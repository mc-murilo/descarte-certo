const ULTIMA_ATUALIZACAO = "17/10/2026";

const MATERIAIS = [
  {
    id: "pilhas-baterias",
    nome: "Pilhas e baterias",
    destino: "ponto",
    termos: ["pilha", "bateria", "bateria de celular", "bateria de relogio", "pilha alcalina", "pilha recarregavel"],
    instrucao: [
      "Guarde as pilhas usadas em um pote ou saquinho fechado, longe de crianças e do calor.",
      "Não abra, não fure e não queime as pilhas.",
      "Quando juntar uma quantidade, leve a um ponto de coleta da lista abaixo."
    ],
    alerta: "Nunca jogue no lixo comum: o vazamento contamina o solo e a água."
  },
  {
    id: "oleo-cozinha",
    nome: "Óleos",
    destino: "ponto",
    termos: ["oleo", "oleo de fritura", "oleo usado", "gordura", "azeite usado", "gordura de cozinha"],
    instrucao: [
      "Espere o óleo esfriar totalmente.",
      "Coe para tirar restos de comida e coloque em uma garrafa PET bem fechada.",
      "Não misture com água, detergente ou outros líquidos.",
      "Leve a um ponto de coleta da lista abaixo quando a garrafa estiver cheia."
    ],
    alerta: "Nunca jogue na pia, no ralo ou no vaso sanitário: entope a tubulação e polui a água."
  },
  {
    id: "lampadas",
    nome: "Lâmpadas",
    destino: "ponto",
    termos: ["lampada", "lampada fluorescente", "lampada led", "lampada queimada", "luminaria"],
    instrucao: [
      "Retire a lâmpada com cuidado para não quebrar.",
      "Embale em papel, jornal ou na caixa original.",
      "Leve a um ponto de coleta da lista abaixo."
    ],
    alerta: "Lâmpadas fluorescentes têm mercúrio. Se quebrar, ventile o local e não use aspirador."
  },
  {
    id: "medicamentos",
    nome: "Medicamentos",
    destino: "ponto",
    termos: ["remedio", "remedios vencidos", "comprimido", "xarope", "pomada", "medicamento"],
    instrucao: [
      "Mantenha o medicamento na embalagem original, se possível.",
      "Não retire os comprimidos para jogar fora separadamente.",
      "Leve a um ponto de coleta da lista abaixo."
    ],
    alerta: "Não jogue no vaso sanitário, na pia ou no lixo comum."
  },
  {
    id: "pneus",
    nome: "Pneus",
    destino: "ponto",
    termos: ["pneu", "pneu velho", "pneu usado", "camara de ar", "borracha"],
    instrucao: [
      "Não deixe o pneu em quintal, terreno ou calçada: acumula água e favorece a dengue.",
      "Leve a um ponto de coleta da lista abaixo."
    ],
    alerta: "Nunca queime pneus e não descarte em terrenos baldios."
  },
  {
    id: "celulares",
    nome: "Eletrônicos",
    destino: "ponto",
    termos: ["celular", "smartphone", "telefone", "carregador", "fone de ouvido", "tablet"],
    instrucao: [
      "Apague seus dados e retire o chip e o cartão de memória.",
      "Se a bateria estiver estufada, não tente abrir nem forçar.",
      "Leve o aparelho, a bateria e o carregador a um ponto de coleta da lista abaixo."
    ],
    alerta: "A bateria de lítio pode pegar fogo se for amassada ou perfurada."
  },
  {
    id: "eletronicos-eletrodomesticos",
    nome: "Eletrodomésticos",
    destino: "ponto",
    termos: ["computador", "notebook", "televisao", "tv", "monitor", "cabo", "fio", "teclado", "mouse", "impressora", "ventilador", "liquidificador", "ferro de passar", "microondas", "lixo eletronico", "geladeira", "refrigerador", "freezer", "fogao", "maquina de lavar", "lavadora", "ar condicionado", "ar-condicionado", "aspirador", "cafeteira", "secador de cabelo", "controle remoto", "eletrodomestico", "linha branca"],
    instrucao: [
      "Se ainda funciona, considere doar.",
      "Se não funciona, não desmonte o aparelho em casa.",
      "Leve a um ponto de coleta da lista abaixo."
    ],
    alerta: "Eletrônicos têm metais pesados que contaminam o solo se forem descartados no lixo comum. Itens grandes (geladeira, fogão, máquina de lavar, ar-condicionado) podem ter regras próprias: ligue antes de levar."
  },
  {
    id: "entulho",
    nome: "Entulho",
    destino: "ponto",
    termos: ["entulho", "restos de obra", "tijolo", "cimento", "concreto", "reforma", "areia", "ceramica", "caliça"],
    instrucao: [
      "Separe o entulho do lixo doméstico.",
      "Armazene em sacos resistentes ou em local fechado, sem bloquear a calçada.",
      "Leve a um ponto de recebimento da lista abaixo ou contrate caçamba licenciada."
    ],
    alerta: "Descartar entulho em terreno baldio ou na calçada é infração ambiental."
  },
  {
    id: "moveis-colchoes",
    nome: "Móveis",
    destino: "ponto",
    termos: ["movel", "sofa", "guarda-roupa", "armario", "cama", "colchao", "mesa", "cadeira", "estante", "madeira"],
    instrucao: [
      "Se estiver em bom estado, doe a instituições ou conhecidos.",
      "Se não der para doar, procure o serviço de recolhimento de volumosos ou um ponto da lista abaixo.",
      "Não deixe na calçada sem agendamento."
    ],
    alerta: ""
  },
  {
    id: "reciclavel-comum",
    nome: "Recicláveis",
    destino: "ponto",
    termos: ["papel", "papelao", "plastico", "pet", "garrafa", "lata", "aluminio", "metal", "vidro", "caixa de leite", "longa vida", "coleta seletiva", "reciclagem", "embalagem"],
    instrucao: [
      "Lave rapidamente as embalagens para tirar restos de comida.",
      "Deixe secar e separe do lixo orgânico.",
      "Vidro quebrado: embrulhe em jornal e identifique para evitar acidentes.",
      "Entregue na coleta seletiva ou em um ponto/cooperativa da lista abaixo."
    ],
    alerta: "Papel engordurado, guardanapo usado e papel higiênico não são recicláveis."
  },
];