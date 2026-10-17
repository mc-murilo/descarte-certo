// DESCARTE CERTO - app.js
// Usa MATERIAIS (materiais.js) e PONTOS (pontos.js).
(function () {
  "use strict";

  const $ = (sel) => document.querySelector(sel);

  // Remove acentos e deixa minúsculo: "Óleo" -> "oleo"
  const normalizar = (t) =>
    String(t).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();

  // Cria elementos sem usar innerHTML
  function el(tag, attrs, ...filhos) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (k === "text") e.textContent = v;
      else if (k === "class") e.className = v;
      else e.setAttribute(k, v);
    }
    filhos.flat().forEach((f) => f && e.append(f));
    return e;
  }

  const campoBusca = $("#busca");
  const listaMateriais = $("#lista-materiais");
  const status = $("#status");
  const detalhe = $("#detalhe");

  let materialAtual = null;

  // ---------- Busca ----------
  function buscar(texto) {
    const palavras = normalizar(texto).split(/\s+/).filter(Boolean);
    if (!palavras.length) return MATERIAIS.slice();

    return MATERIAIS
      .map((m) => {
        const nome = normalizar(m.nome);
        const alvo = normalizar([m.nome].concat(m.termos || []).join(" "));
        if (!palavras.every((p) => alvo.includes(p))) return null;
        const comeca = nome.startsWith(palavras[0]) ? 0 : nome.includes(palavras[0]) ? 1 : 2;
        return { m, comeca };
      })
      .filter(Boolean)
      .sort((a, b) => a.comeca - b.comeca)
      .map((x) => x.m);
  }

  function renderMateriais() {
    const achados = buscar(campoBusca.value);
    listaMateriais.replaceChildren();

    achados.forEach((m) => {
      const botao = el("button", {
        type: "button",
        text: m.nome,
        "aria-pressed": String(materialAtual === m.id),
      });
      botao.addEventListener("click", () => escolher(m.id));
      listaMateriais.append(el("li", {}, botao));
    });

    if (!achados.length) {
      status.textContent = "Nenhum material encontrado. Tente outro nome, como “pilha” ou “celular”.";
    } else if (campoBusca.value.trim()) {
      status.textContent = achados.length + (achados.length === 1 ? " material encontrado." : " materiais encontrados.");
    } else {
      status.textContent = "Escolha um material ou use a busca acima.";
    }
  }

  // ---------- Detalhe do material ----------
  function escolher(id) {
    materialAtual = id;
    renderMateriais();
    renderDetalhe();
    detalhe.focus();
    detalhe.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function limparEscolha() {
    materialAtual = null;
    detalhe.hidden = true;
    detalhe.replaceChildren();
    renderMateriais();
    campoBusca.focus();
  }

  function renderDetalhe() {
    const m = MATERIAIS.find((x) => x.id === materialAtual);
    if (!m) return;

    const voltar = el("button", { type: "button", class: "voltar", text: "Escolher outro material" });
    voltar.addEventListener("click", limparEscolha);

    detalhe.replaceChildren(...[
      voltar,
      el("h2", { text: m.nome }),
      m.alerta ? el("p", { class: "alerta", text: m.alerta }) : null,
      el("h3", { text: "Como descartar" }),
      el("ol", { class: "passos" }, m.instrucao.map((p) => el("li", { text: p })))
    ].filter(Boolean));

    if (m.destino === "lixo-comum") {
      detalhe.append(el("p", { class: "aviso", text: "Este material pode ir no lixo comum. Não precisa levar a um ponto de descarte." }));
    } else if (m.destino === "coleta") {
      detalhe.append(el("p", { class: "aviso", text: "Ainda não temos pontos cadastrados para este material. Siga a instrução acima." }));
    } else {
      renderPontos(m);
    }
    detalhe.hidden = false;
  }

  // ---------- Pontos de descarte ----------
  const semBairro = (p) => !p.bairro || /CONFERIR/.test(p.bairro);
  const bairroTexto = (p) => (semBairro(p) ? "Outros" : p.bairro);

  function linkMapa(p) {
    const consulta = p.lat != null && p.lng != null
      ? p.lat + "," + p.lng
      : [p.endereco, semBairro(p) ? "" : p.bairro, "Fortaleza, CE"].filter(Boolean).join(", ");
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(consulta);
  }

  function cartaoPonto(p) {
    return el("li", { class: "ponto" },
      el("strong", { text: p.nome }),
      el("span", { class: "tipo", text: p.tipo }),
      el("span", { text: semBairro(p) ? p.endereco : p.endereco + " – " + p.bairro }),
      el("span", { text: "Horário: " + (p.horario || "Consultar") }),
      p.telefone ? el("span", { text: "Telefone: " + p.telefone }) : null,
      p.obs ? el("span", { text: p.obs }) : null,
      el("a", { href: linkMapa(p), target: "_blank", rel: "noopener", text: "Ver no Google Maps" })
    );
  }

  function renderPontos(m) {
    const pontos = PONTOS
      .filter((p) => p.aceita.includes(m.id))
      .sort((a, b) => bairroTexto(a).localeCompare(bairroTexto(b), "pt-BR") || a.nome.localeCompare(b.nome, "pt-BR"));

    detalhe.append(el("h3", { text: "Onde levar em Fortaleza" }));

    if (!pontos.length) {
      detalhe.append(el("p", { class: "aviso", text: "Ainda não temos pontos cadastrados para este material." }));
      return;
    }

    const bairros = [...new Set(pontos.map(bairroTexto))].sort((a, b) => a.localeCompare(b, "pt-BR"));
    const select = el("select", { id: "filtro-bairro" }, el("option", { value: "", text: "Todos os bairros" }),
      bairros.map((b) => el("option", { value: b, text: b })));
    const contagem = el("span", { "aria-live": "polite" });
    const lista = el("ul", { class: "pontos" });

    function atualizar() {
      const filtrados = select.value ? pontos.filter((p) => bairroTexto(p) === select.value) : pontos;
      lista.replaceChildren(...filtrados.map(cartaoPonto));
      contagem.textContent = filtrados.length + (filtrados.length === 1 ? " ponto" : " pontos");
    }
    select.addEventListener("change", atualizar);

    detalhe.append(
      el("div", { class: "filtro" },
        el("label", { for: "filtro-bairro", text: "Bairro:" }), select, contagem),
      lista
    );
    atualizar();
  }

  // ---------- Início ----------
  campoBusca.addEventListener("input", renderMateriais);
  $("#atualizacao").textContent = ULTIMA_ATUALIZACAO;
  renderMateriais();
})();