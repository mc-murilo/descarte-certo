const ACEITA_PILHA = ["pilhas-baterias"];

const ACEITA_ELETRONICO = ["celulares"]

const ACEITA_ELETRODOMESTICO = ["eletronicos-eletrodomesticos"]

const ACEITA_PNEU = ["pneus"];

const ACEITA_OLEO = ["oleo-cozinha"];

const ACEITA_LAMPADA = ["lampadas"];

const ACEITA_MEDICAMENTO = ["medicamentos"];

const ACEITA_ENTULHO = ["entulho"];

const ACEITA_MOVEL = ["moveis-colchoes"];

const ACEITA_RECICLAVEL = ["reciclavel-comum"];

const PONTOS = [
 // ---------- PILHAS E BATERIAS ----------
  
  { id: "pilha-001", nome: "Vivo – Loja Fortaleza", tipo: "Loja de operadora", bairro: "Centro", endereco: "Rua Barão do Rio Branco, 1197", telefone: "(85) 98222-1058", aceita: ACEITA_PILHA, obs: "Recebe também baterias de celular e carregadores." },
  { id: "pilha-002", nome: "Pague Menos – Centro", tipo: "Farmácia", bairro: "Centro", endereco: "Rua Pedro Borges, 209", aceita: ACEITA_PILHA, obs: "Recebe baterias de celular; confirme se aceita pilhas comuns." },
  { id: "pilha-003", nome: "Rabelo – Centro", tipo: "Loja de celulares", bairro: "Centro", endereco: "Rua Assunção, 145", telefone: "(85) 3464-9247", aceita: ACEITA_PILHA, obs: "Recebe baterias de celular; confirme se aceita pilhas comuns." },
  { id: "pilha-004", nome: "Oboé Celular", tipo: "Loja de celulares", bairro: "Centro", endereco: "Rua Major Facundo, 650", aceita: ACEITA_PILHA, obs: "Recebe baterias de celular; confirme se aceita pilhas comuns." },
  { id: "pilha-005", nome: "Exata – Centro", tipo: "Loja", bairro: "Centro", endereco: "Rua Pedro Borges, 30", aceita: ACEITA_PILHA, obs: "Recebe baterias de celular; confirme se aceita pilhas comuns." },
  { id: "pilha-006", nome: "Pão de Açúcar – Meireles", tipo: "Supermercado", bairro: "Meireles", endereco: "Avenida Santos Dumont, 1169", telefone: "(85) 3255-2656", aceita: ACEITA_PILHA },
  { id: "pilha-007", nome: "Carrefour – Joaquim Távora", tipo: "Supermercado", bairro: "Joaquim Távora", endereco: "Avenida Barão de Studart, 2000", telefone: "(85) 3246-4763", aceita: ACEITA_PILHA },
  { id: "pilha-008", nome: "Samsung – Unidade Fortaleza", tipo: "Posto de entrega", endereco: "Avenida Rui Barbosa, 2727", telefone: "(85) 2180-6973", aceita: ACEITA_PILHA, obs: "Recebe também outros eletrônicos (TVs abaixo de 40 polegadas)." },
  { id: "pilha-009", nome: "Raia / Drogasil – Fátima", tipo: "Farmácia", bairro: "Fátima", endereco: "Avenida Treze de Maio, 767", aceita: ACEITA_PILHA, obs: "Recebe também medicamentos vencidos." },
  { id: "pilha-010", nome: "Vivo – Loja Shopping Benfica", tipo: "Loja de operadora", bairro: "Benfica", endereco: "Rua Carapinima, 2200, loja 200", telefone: "(85) 98142-2843", aceita: ACEITA_PILHA },

   // ---------- ELETRÔNICOS E CELULARES ----------

  { id: "eletronico-001", nome: "Casas Bahia – Centro", tipo: "Loja", bairro: "Centro", endereco: "Rua General Sampaio, 1267", aceita: ACEITA_ELETRONICO, obs: "Recebe computadores, celulares e eletrônicos e eletrodomésticos pequenos; não lista TVs nem geladeiras." },
  { id: "eletronico-002", nome: "Casas Bahia – Senador Pompeu", tipo: "Loja", bairro: "Centro", endereco: "Rua Senador Pompeu, 1020", aceita: ACEITA_ELETRONICO, obs: "Recebe computadores, celulares e eletrônicos e eletrodomésticos pequenos; não lista TVs nem geladeiras." },
  { id: "eletronico-003", nome: "Ecoletas – Unimed", tipo: "Posto de entrega", endereco: "Avenida Santos Dumont, 877", telefone: "(85) 4006-5600", aceita: ACEITA_ELETRONICO, obs: "Recebe também TVs LCD/LED. Ponto em empresa: confirme se recebe o público." },
  { id: "eletronico-004", nome: "Samsung – Unidade Fortaleza", tipo: "Posto de entrega", endereco: "Avenida Rui Barbosa, 2727", telefone: "(85) 2180-6973", aceita: ACEITA_ELETRONICO, obs: "Recebe TVs abaixo de 40 polegadas." },
  { id: "eletronico-005", nome: "Ecoponto – Fátima", tipo: "Ecoponto", bairro: "Fátima", endereco: "Avenida Eduardo Girão, 989", horario: "Seg a Sáb, 8h–12h e 14h–17h", aceita: ACEITA_ELETRONICO, obs: "Esquina com a Avenida Luciano Carneiro. Ecoponto da Prefeitura: confirme se recebe eletrônicos antes de ir." },
  { id: "eletronico-006", nome: "Liliani – Barão do Rio Branco", tipo: "Loja", bairro: "Centro", endereco: "Rua Barão do Rio Branco, 1179", aceita: ACEITA_ELETRONICO, obs: "Recebe celulares, baterias e acessórios; não lista outros eletrônicos." },
  { id: "eletronico-007", nome: "Pague Menos – Liberato Barroso", tipo: "Farmácia", bairro: "Centro", endereco: "Rua Liberato Barroso, 131", aceita: ACEITA_ELETRONICO, obs: "Recebe celulares, baterias e acessórios; não lista outros eletrônicos." },
  { id: "eletronico-008", nome: "Central de Negócios", tipo: "Loja", bairro: "Centro", endereco: "Rua Pedro Borges, 20", aceita: ACEITA_ELETRONICO, obs: "Recebe celulares, baterias e acessórios; não lista outros eletrônicos." },
  { id: "eletronico-009", nome: "Macavi", tipo: "Loja", bairro: "Centro", endereco: "Rua Senador Pompeu, 1157", aceita: ACEITA_ELETRONICO, obs: "Recebe celulares, baterias e acessórios; não lista outros eletrônicos." },
  { id: "eletronico-010", nome: "Rabelo – Barão do Rio Branco", tipo: "Loja de celulares", bairro: "Centro", endereco: "Rua Barão do Rio Branco, 1095", aceita: ACEITA_ELETRONICO, obs: "Recebe celulares, baterias e acessórios; não lista outros eletrônicos." },

  // ---------- ELETRODOMÉSTICOS ----------
  
  { id: "eletrodomestico-001", nome: "Fundação Casa da Esperança", tipo: "ONG", endereco: "Rua Doutor Francisco Francilio Dourado, 11", aceita: ACEITA_ELETRODOMESTICO, obs: "Recebe geladeiras, freezers, fogões, micro-ondas, máquinas de lavar, ar-condicionado e móveis. Fica a cerca de 7 km do centro; confirme o contato antes de ir." },
  { id: "eletrodomestico-002", nome: "Casas Bahia – Praça do Ferreira", tipo: "Loja", bairro: "Centro", endereco: "Travessa Pará, 20", aceita: ACEITA_ELETRODOMESTICO, obs: "Recebe eletrodomésticos pequenos (aspirador, cafeteira, ferro, chuveiro, barbeador); não lista geladeira, fogão nem TV." },
  { id: "eletrodomestico-003", nome: "Casas Bahia – Shopping Benfica", tipo: "Loja", bairro: "Benfica", endereco: "Avenida Carapinima, 2200", aceita: ACEITA_ELETRODOMESTICO, obs: "Recebe eletrodomésticos pequenos (aspirador, cafeteira, ferro, chuveiro, barbeador); não lista geladeira, fogão nem TV." },
  { id: "eletrodomestico-004", nome: "Eletrônica Moriá II", tipo: "Posto de entrega", endereco: "Rua Monsenhor Salazar, 640", aceita: ACEITA_ELETRODOMESTICO, obs: "Recebe apenas produtos da marca LG (geladeiras, freezers, TVs e eletrodomésticos pequenos)." },
  { id: "eletrodomestico-005", nome: "Casas Bahia – Aldeota", tipo: "Loja", bairro: "Aldeota", endereco: "Avenida Santos Dumont, 3130", aceita: ACEITA_ELETRODOMESTICO, obs: "Recebe eletrodomésticos pequenos (aspirador, cafeteira, ferro, chuveiro, barbeador); não lista geladeira, fogão nem TV." },
  { id: "eletrodomestico-006", nome: "Casas Bahia – Montese", tipo: "Loja", bairro: "Montese", endereco: "Avenida Professor Gomes de Matos, 827", aceita: ACEITA_ELETRODOMESTICO, obs: "Recebe eletrodomésticos pequenos (aspirador, cafeteira, ferro, chuveiro, barbeador); não lista geladeira, fogão nem TV." },
  { id: "eletrodomestico-007", nome: "Casas Bahia – Farias Brito", tipo: "Loja", bairro: "São Gerardo", endereco: "Avenida Bezerra de Menezes, 2380", aceita: ACEITA_ELETRODOMESTICO, obs: "Recebe eletrodomésticos pequenos (aspirador, cafeteira, ferro, chuveiro, barbeador); não lista geladeira, fogão nem TV." },
  { id: "eletrodomestico-008", nome: "North Shopping", tipo: "Shopping", bairro: "Presidente Kennedy", endereco: "Avenida Bezerra de Menezes, 2450", aceita: ACEITA_ELETRODOMESTICO, obs: "Recebe eletrodomésticos pequenos (aspirador, cafeteira, ferro, chuveiro, barbeador); não lista geladeira, fogão nem TV." },

  // ---------- PNEUS ----------
  
  { id: "pneu-001", nome: "EG Pneus", tipo: "Posto de entrega", endereco: "Rua General Sampaio, 1768", telefone: "(85) 3231-0077", aceita: ACEITA_PNEU },
  { id: "pneu-002", nome: "GC Pneus", tipo: "Posto de entrega", endereco: "Rua Castro e Silva, 1015", telefone: "(85) 3212-3099", aceita: ACEITA_PNEU },
  { id: "pneu-003", nome: "HB Car", tipo: "Posto de entrega", endereco: "Avenida Duque de Caxias, 1833", telefone: "(85) 3223-1307", aceita: ACEITA_PNEU },
  { id: "pneu-004", nome: "HB Car", tipo: "Posto de entrega", endereco: "Avenida da Abolição, 3877", telefone: "(85) 3263-1072", aceita: ACEITA_PNEU },
  { id: "pneu-005", nome: "RR Pneus", tipo: "Posto de entrega", endereco: "Avenida Barão de Studart, 2730", telefone: "(85) 4005-4700", aceita: ACEITA_PNEU },
  { id: "pneu-006", nome: "Ecoponto – Fátima", tipo: "Ecoponto", bairro: "Fátima", endereco: "Avenida Eduardo Girão, 989", horario: "Seg a Sáb, 8h–12h e 14h–17h", aceita: ACEITA_PNEU, obs: "Esquina com a Avenida Luciano Carneiro. Ecoponto da Prefeitura: confirme se recebe pneus antes de ir." },
  { id: "pneu-007", nome: "Ecoponto – Varjota", tipo: "Ecoponto", bairro: "Varjota", endereco: "Rua Meruoca, 224-326", horario: "Seg a Sáb, 8h–12h e 14h–17h", aceita: ACEITA_PNEU, obs: "Ecoponto da Prefeitura: confirme se recebe pneus antes de ir." },
  { id: "pneu-008", nome: "Ecoponto – Joaquim Távora", tipo: "Ecoponto", bairro: "Joaquim Távora", endereco: "Avenida Visconde do Rio Branco, 3485", horario: "Seg a Sáb, 8h–12h e 14h–17h", aceita: ACEITA_PNEU, obs: "Anexo ao Parque Rio Branco. Ecoponto da Prefeitura: confirme se recebe pneus antes de ir." },
  { id: "pneu-009", nome: "Ecoponto – Pici", tipo: "Ecoponto", bairro: "Pici", endereco: "Rua Pernambuco, 600", horario: "Seg a Sáb, 8h–12h e 14h–17h", aceita: ACEITA_PNEU, obs: "Anexo à UFC. Ecoponto da Prefeitura: confirme se recebe pneus antes de ir." },

  // ---------- OLEOS ----------

   { id: "oleo-001", nome: "Pão de Açúcar – Meireles", tipo: "Supermercado", bairro: "Meireles", endereco: "Avenida Santos Dumont, 1169", telefone: "(85) 3255-2656", aceita: ACEITA_OLEO },
  { id: "oleo-002", nome: "Pão de Açúcar – Fátima", tipo: "Supermercado", bairro: "Fátima", endereco: "Rua Doutor Costa de Araújo, 1132", telefone: "(85) 3105-4710", aceita: ACEITA_OLEO },
  { id: "oleo-003", nome: "Pão de Açúcar – Aldeota", tipo: "Supermercado", bairro: "Aldeota", endereco: "Rua Bárbara de Alencar, 1887", telefone: "(85) 3105-4730", aceita: ACEITA_OLEO },
  { id: "oleo-004", nome: "Carrefour – Joaquim Távora", tipo: "Supermercado", bairro: "Joaquim Távora", endereco: "Avenida Barão de Studart, 2000", telefone: "(85) 3246-4763", aceita: ACEITA_OLEO },
  { id: "oleo-005", nome: "Ecoenel Recicla – Centro", tipo: "Ecoenel Recicla", bairro: "Centro", endereco: "Rua Guilherme Rocha, 1427", horario: "Seg a Sáb, 8h–12h e 14h–17h", telefone: "0800 28 50 196", aceita: ACEITA_OLEO },
  { id: "oleo-006", nome: "Ecoenel SEBRAE – Praia de Iracema", tipo: "Ecoenel Recicla", bairro: "Praia de Iracema", endereco: "Rua Doutor Atualpa Barbosa Lima, 394", horario: "Seg a Sex, 8h–12h e 14h–16h; Sáb, 8h–11h", aceita: ACEITA_OLEO, obs: "Ao lado do SEBRAE." },
  { id: "oleo-007", nome: "Ecoponto – Fátima (Ecoenel Recicla)", tipo: "Ecoponto", bairro: "Fátima", endereco: "Avenida Eduardo Girão, 989", horario: "Seg a Sáb, 8h–12h e 14h–17h", telefone: "0800 28 50 196", aceita: ACEITA_OLEO, obs: "Esquina com a Avenida Luciano Carneiro." },
  { id: "oleo-008", nome: "Ecoenel Recicla – Jacarecanga", tipo: "Ecoenel Recicla", bairro: "Jacarecanga", endereco: "Rua Costa Matos, 8", horario: "Seg a Sáb, 8h–12h e 14h–17h", telefone: "0800 28 50 196", aceita: ACEITA_OLEO },
  { id: "oleo-009", nome: "Ecoenel Recicla – Carlito Pamplona", tipo: "Ecoenel Recicla", bairro: "Carlito Pamplona", endereco: "Avenida Francisco Sá, s/n", horario: "Seg a Sáb, 8h–12h e 14h–17h", telefone: "0800 28 50 196", aceita: ACEITA_OLEO },

  // ---------- LÂMPADAS ----------

  { id: "lampada-001", nome: "G.Barbosa – Padre Valdevino", tipo: "Supermercado", endereco: "Rua Padre Valdevino, 920", telefone: "(85) 3052-2024", aceita: ACEITA_LAMPADA, obs: "Recebe lâmpadas fluorescentes, halógenas e incandescentes." },
  { id: "lampada-002", nome: "Assaí – Bezerra de Menezes", tipo: "Supermercado", bairro: "Otávio Bonfim", endereco: "Avenida Bezerra de Menezes, 571", aceita: ACEITA_LAMPADA, obs: "Próximo ao Mercado São Sebastião. Lista do eCycle: lâmpadas fluorescentes." },
  { id: "lampada-003", nome: "Normatel – Bezerra de Menezes", tipo: "Loja", bairro: "Monte Castelo", endereco: "Avenida Bezerra de Menezes, 78", aceita: ACEITA_LAMPADA, obs: "Lista do eCycle: lâmpadas fluorescentes." },
  { id: "lampada-004", nome: "Carrefour – Barão de Studart", tipo: "Supermercado", bairro: "Joaquim Távora", endereco: "Avenida Barão de Studart, 2200", telefone: "(85) 3499-3040", aceita: ACEITA_LAMPADA, obs: "Recebe lâmpadas fluorescentes, halógenas e incandescentes." },
  { id: "lampada-005", nome: "G.Barbosa – Borges de Melo", tipo: "Supermercado", endereco: "Avenida Borges de Melo, 1135", telefone: "(85) 98215-1330", aceita: ACEITA_LAMPADA, obs: "Recebe lâmpadas fluorescentes, halógenas e incandescentes." },
  { id: "lampada-006", nome: "Atacadão – Barra do Ceará", tipo: "Supermercado", bairro: "Carlito Pamplona", endereco: "Avenida Francisco Sá, 3175", aceita: ACEITA_LAMPADA, obs: "Lista do eCycle: lâmpadas fluorescentes." },
  { id: "lampada-007", nome: "Hiper BP (Big) – José Bastos", tipo: "Supermercado", endereco: "Avenida José Bastos, 1012", telefone: "(85) 99116-7668", aceita: ACEITA_LAMPADA, obs: "Recebe lâmpadas fluorescentes, halógenas e incandescentes, além de pilhas e baterias." },
  { id: "lampada-008", nome: "Normatel – Antônio Sales", tipo: "Loja", bairro: "Dionísio Torres", endereco: "Avenida Antônio Sales, 3410", aceita: ACEITA_LAMPADA, obs: "Lista do eCycle: lâmpadas fluorescentes." },
  { id: "lampada-009", nome: "Normatel – Santos Dumont", tipo: "Loja", bairro: "Aldeota", endereco: "Avenida Santos Dumont, 3870", aceita: ACEITA_LAMPADA, obs: "Lista do eCycle: lâmpadas fluorescentes." },
  { id: "lampada-010", nome: "Assaí – Sargento Hermínio", tipo: "Supermercado", bairro: "Presidente Kennedy", endereco: "Avenida Sargento Hermínio Sampaio, s/n (lote 1, quadra 04)", aceita: ACEITA_LAMPADA, obs: "Lista do eCycle: lâmpadas fluorescentes." },
 
  // ---------- MEDICAMENTOS ----------

  { id: "medicamento-001", nome: "Pague Menos – Centro", tipo: "Farmácia", bairro: "Centro", endereco: "Rua Senador Pompeu, 1520", telefone: "(85) 3255-5461", aceita: ACEITA_MEDICAMENTO },
  { id: "medicamento-002", nome: "Raia / Drogasil – Treze de Maio (1948)", tipo: "Farmácia", bairro: "Fátima", endereco: "Avenida Treze de Maio, 1948", aceita: ACEITA_MEDICAMENTO },
  { id: "medicamento-003", nome: "Raia / Drogasil – Antônio Sales", tipo: "Farmácia", bairro: "Joaquim Távora", endereco: "Avenida Antônio Sales, 666", telefone: "(85) 3016-9749", aceita: ACEITA_MEDICAMENTO },
  { id: "medicamento-004", nome: "Raia / Drogasil – Santos Dumont", tipo: "Farmácia", bairro: "Aldeota", endereco: "Avenida Santos Dumont, 1261", aceita: ACEITA_MEDICAMENTO },
  { id: "medicamento-005", nome: "Raia / Drogasil – Treze de Maio (767)", tipo: "Farmácia", bairro: "Fátima", endereco: "Avenida Treze de Maio, 767", aceita: ACEITA_MEDICAMENTO },
  { id: "medicamento-006", nome: "Raia / Drogasil – Rui Barbosa", tipo: "Farmácia", bairro: "Meireles", endereco: "Avenida Rui Barbosa, 783", telefone: "(85) 3224-7367", aceita: ACEITA_MEDICAMENTO },
  { id: "medicamento-007", nome: "Raia / Drogasil – Padre Valdevino", tipo: "Farmácia", bairro: "Aldeota", endereco: "Rua Padre Valdevino, 1713", aceita: ACEITA_MEDICAMENTO },
  { id: "medicamento-008", nome: "Raia / Drogasil – Barão de Studart (1501)", tipo: "Farmácia", bairro: "Aldeota", endereco: "Avenida Barão de Studart, 1501, loja 07", aceita: ACEITA_MEDICAMENTO },
  { id: "medicamento-009", nome: "Raia / Drogasil – Barão de Studart (920)", tipo: "Farmácia", bairro: "Aldeota", endereco: "Avenida Barão de Studart, 920", aceita: ACEITA_MEDICAMENTO },
  { id: "medicamento-010", nome: "Raia / Drogasil – Monsenhor Tabosa", tipo: "Farmácia", bairro: "Meireles", endereco: "Avenida Monsenhor Tabosa, 1400", aceita: ACEITA_MEDICAMENTO },

   // ---------- ENTULHO ----------

  { id: "entulho-001", nome: "Ecoponto – Fátima", tipo: "Ecoponto", bairro: "Fátima", endereco: "Avenida Eduardo Girão, 989", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_ENTULHO, obs: "Esquina com a Avenida Luciano Carneiro. Confirme os limites de quantidade de entulho antes de ir." },
  { id: "entulho-002", nome: "Ecoponto – Varjota", tipo: "Ecoponto", bairro: "Varjota", endereco: "Rua Meruoca, 224-326", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_ENTULHO, obs: "Confirme os limites de quantidade de entulho antes de ir." },
  { id: "entulho-003", nome: "Ecoponto – Joaquim Távora", tipo: "Ecoponto", bairro: "Joaquim Távora", endereco: "Avenida Visconde do Rio Branco, 3485", horario: "Seg a Sáb, 8h–17h", aceita: ACEITA_ENTULHO, obs: "Confirme os limites de quantidade de entulho antes de ir." },
  { id: "entulho-004", nome: "Ecoponto – Pici", tipo: "Ecoponto", bairro: "Pici", endereco: "Rua Pernambuco, 600", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_ENTULHO, obs: "Confirme os limites de quantidade de entulho antes de ir." },
  { id: "entulho-005", nome: "Ecoponto – Serrinha", tipo: "Ecoponto", bairro: "Serrinha", endereco: "Rua Inácio Parente, 70", horario: "Seg a Sáb, 8h–17h", aceita: ACEITA_ENTULHO, obs: "Esquina com a Rua Freire Alemão. Confirme os limites de quantidade de entulho antes de ir." },
  { id: "entulho-006", nome: "Ecoponto – Barra do Ceará", tipo: "Ecoponto", bairro: "Barra do Ceará", endereco: "Rua Graça Aranha, 300", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_ENTULHO, obs: "Esquina com a Rua Wilcar Bastos Cavalcante. Confirme os limites de quantidade de entulho antes de ir." },
  { id: "entulho-007", nome: "Ecoponto – Cidade 2000", tipo: "Ecoponto", bairro: "Cidade 2000", endereco: "Rua Giselda Cysne, 92", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_ENTULHO, obs: "Cruzamento com a Rua Sólon Carvalho. Confirme os limites de quantidade de entulho antes de ir." },
  { id: "entulho-008", nome: "Ecoponto – Jóquei Clube", tipo: "Ecoponto", bairro: "Jóquei Clube", endereco: "Rua Perdigão de Oliveira, 971", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_ENTULHO, obs: "Esquina com a Rua Silveira Filho. Confirme os limites de quantidade de entulho antes de ir." },
  { id: "entulho-009", nome: "Ecoponto – Edson Queiroz", tipo: "Ecoponto", bairro: "Edson Queiroz", endereco: "Rua Vereador José Batista Barbosa", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_ENTULHO, obs: "Sem número no eCycle (cruzamento com a Rua Hil de Moraes). Confirme os limites de quantidade de entulho antes de ir." },
  { id: "entulho-010", nome: "Ecoponto – Praia do Futuro I", tipo: "Ecoponto", bairro: "Vicente Pinzon", endereco: "Rua José Aurélio Câmara, 83", horario: "Seg a Sáb, 8h–17h", aceita: ACEITA_ENTULHO, obs: "Esquina com a Avenida Dioguinho. Confirme os limites de quantidade de entulho antes de ir." },
  { id: "entulho-011", nome: "Ecoponto – Cidade dos Funcionários", tipo: "Ecoponto", bairro: "Cidade dos Funcionários", endereco: "Rua Doutor José Plutarco, esquina com a Rua Aluísio Barros Leal", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_ENTULHO, obs: "Confirme os limites de quantidade de entulho antes de ir. Endereço sem número, conforme a Marquise Ambiental." },
  { id: "entulho-012", nome: "Ecoponto – Vila Velha", tipo: "Ecoponto", bairro: "Vila Velha", endereco: "Rua Jasmim, s/n (por trás do Liceu Vila Velha)", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_ENTULHO, obs: "Confirme os limites de quantidade de entulho antes de ir. Endereço sem número, conforme a Marquise Ambiental." },
  { id: "entulho-013", nome: "Ecoponto – Vila Peri", tipo: "Ecoponto", bairro: "Vila Peri", endereco: "Rua Antônio Costa Mendes, esquina com a Travessa Augusto Ribeiro", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_ENTULHO, obs: "Confirme os limites de quantidade de entulho antes de ir. Endereço sem número, conforme a Marquise Ambiental." },
  { id: "entulho-014", nome: "Ecoponto – Conjunto Ceará I", tipo: "Ecoponto", bairro: "Conjunto Ceará", endereco: "Rua 442, 159 (esquina com a Rua 432)", horario: "Seg a Sáb, 8h–17h", aceita: ACEITA_ENTULHO, obs: "Confirme os limites de quantidade de entulho antes de ir." },
 
  // ---------- MÓVEIS ----------
 
  { id: "movel-001", nome: "Fundação Casa da Esperança", tipo: "ONG", endereco: "Rua Doutor Francisco Francilio Dourado, 11", aceita: ACEITA_MOVEL, obs: "Recebe móveis de madeira, além de geladeiras, fogões e máquinas de lavar. Fica a cerca de 7 km do centro; confirme o contato antes de ir." },
  { id: "movel-002", nome: "Ecoenel Recicla – Centro", tipo: "Ecoenel Recicla", bairro: "Centro", endereco: "Rua Guilherme Rocha, 1427", horario: "Seg a Sáb, 8h–12h e 14h–17h", telefone: "0800 28 50 196", aceita: ACEITA_MOVEL, obs: "Recebe móveis de metal e de plástico." },
  { id: "movel-003", nome: "Ecoenel SEBRAE – Praia de Iracema", tipo: "Ecoenel Recicla", bairro: "Praia de Iracema", endereco: "Rua Doutor Atualpa Barbosa Lima, 394", horario: "Seg a Sex, 8h–12h e 14h–16h; Sáb, 8h–11h", aceita: ACEITA_MOVEL, obs: "Ao lado do SEBRAE. Recebe móveis de metal e de plástico." },
  { id: "movel-004", nome: "Ecoponto – Fátima", tipo: "Ecoponto", bairro: "Fátima", endereco: "Avenida Eduardo Girão, 989", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_MOVEL, obs: "Esquina com a Avenida Luciano Carneiro. Recebe móveis de metal, plástico e vidro, segundo o eCycle." },
  { id: "movel-005", nome: "Ecoenel Recicla – Jacarecanga", tipo: "Ecoenel Recicla", bairro: "Jacarecanga", endereco: "Rua Costa Matos, 8", horario: "Seg a Sáb, 8h–12h e 14h–17h", telefone: "0800 28 50 196", aceita: ACEITA_MOVEL, obs: "Recebe móveis de metal e de plástico." },
  { id: "movel-006", nome: "Ecoenel Recicla – Carlito Pamplona", tipo: "Ecoenel Recicla", bairro: "Carlito Pamplona", endereco: "Avenida Francisco Sá, s/n", horario: "Seg a Sáb, 8h–12h e 14h–17h", telefone: "0800 28 50 196", aceita: ACEITA_MOVEL, obs: "Recebe móveis de metal e de plástico." },
  { id: "movel-007", nome: "Ecoponto – Varjota", tipo: "Ecoponto", bairro: "Varjota", endereco: "Rua Meruoca, 224-326", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_MOVEL, obs: "Recebe móveis de metal, plástico e vidro, segundo o eCycle." },

  // ---------- RECICLÁVEIS ----------
  
   { id: "reciclavel-001", nome: "Ecoelce – José Walter", tipo: "Ecoelce", bairro: "José Walter", endereco: "Rua José Paranhos da Silva, s/n (com a Avenida J)", horario: "Seg a Sex, 8h–12h e 13h–17h; Sáb, 8h–12h", aceita: ACEITA_RECICLAVEL, obs: "Em frente ao Colégio Rachel de Queiroz. Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-002", nome: "Ecoelce – Sebrae Praia de Iracema", tipo: "Ecoelce", bairro: "Praia de Iracema", endereco: "Rua Antônio Augusto, s/n (com a Rua Doutor Atualpa Barbosa Lima)", horario: "Seg a Sex, 8h–12h e 13h–17h; Sáb, 8h–12h", aceita: ACEITA_RECICLAVEL, obs: "Ao lado do SEBRAE. Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-003", nome: "Pão de Açúcar – Meireles (Santos Dumont)", tipo: "Supermercado", bairro: "Meireles", endereco: "Avenida Santos Dumont, 1169", telefone: "(85) 3255-2656", aceita: ACEITA_RECICLAVEL, obs: "Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-004", nome: "Pão de Açúcar – Fátima", tipo: "Supermercado", bairro: "Fátima", endereco: "Rua Doutor Costa de Araújo, 1132", telefone: "(85) 3105-4710", aceita: ACEITA_RECICLAVEL, obs: "Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-005", nome: "Carrefour – Joaquim Távora", tipo: "Supermercado", bairro: "Joaquim Távora", endereco: "Avenida Barão de Studart, 2000", telefone: "(85) 3246-4763", aceita: ACEITA_RECICLAVEL, obs: "Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-006", nome: "Pão de Açúcar – Aldeota", tipo: "Supermercado", bairro: "Aldeota", endereco: "Rua Bárbara de Alencar, 1887", telefone: "(85) 3105-4730", aceita: ACEITA_RECICLAVEL, obs: "Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-007", nome: "Ecoponto – Fátima", tipo: "Ecoponto", bairro: "Fátima", endereco: "Avenida Eduardo Girão, 989", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_RECICLAVEL, obs: "Esquina com a Avenida Luciano Carneiro." },
  { id: "reciclavel-008", nome: "Sociedade Comunitária de Reciclagem do Pirambu", tipo: "Cooperativa", bairro: "Pirambu", endereco: "Rua General Costa Matos, 8 A", telefone: "(85) 3214-3515", aceita: ACEITA_RECICLAVEL, obs: "Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-009", nome: "Pão de Açúcar – Bezerra de Menezes", tipo: "Supermercado", bairro: "São Gerardo", endereco: "Avenida Bezerra de Menezes, 1498/1548", telefone: "(85) 3105-4716", aceita: ACEITA_RECICLAVEL, obs: "No eCycle aparece como \"Pão de Açúcar – Edson Queiroz\", mas o endereço é na Avenida Bezerra de Menezes. Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-010", nome: "Pão de Açúcar – Meireles (Abolição)", tipo: "Supermercado", bairro: "Meireles", endereco: "Avenida da Abolição, 2900", telefone: "(85) 3105-4718", aceita: ACEITA_RECICLAVEL, obs: "Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-011", nome: "Pão de Açúcar – Mucuripe", tipo: "Supermercado", bairro: "Mucuripe", endereco: "Avenida da Abolição, 3790", telefone: "(85) 3105-4718", aceita: ACEITA_RECICLAVEL, obs: "Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-012", nome: "Pão de Açúcar – Cocó", tipo: "Supermercado", bairro: "Cocó", endereco: "Avenida Engenheiro Santana Júnior, 2277, loja 55", telefone: "(85) 3255-2605", aceita: ACEITA_RECICLAVEL, obs: "Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-013", nome: "Ecoponto – Varjota", tipo: "Ecoponto", bairro: "Varjota", endereco: "Rua Meruoca, 224-326", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_RECICLAVEL },
  { id: "reciclavel-014", nome: "Ecoponto – Joaquim Távora", tipo: "Ecoponto", bairro: "Joaquim Távora", endereco: "Avenida Visconde do Rio Branco, 3485", horario: "Seg a Sáb, 8h–17h", aceita: ACEITA_RECICLAVEL },
  { id: "reciclavel-015", nome: "Ecoponto – Pici", tipo: "Ecoponto", bairro: "Pici", endereco: "Rua Pernambuco, 600", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_RECICLAVEL },
  { id: "reciclavel-016", nome: "Ecoponto – Serrinha", tipo: "Ecoponto", bairro: "Serrinha", endereco: "Rua Inácio Parente, 70", horario: "Seg a Sáb, 8h–17h", aceita: ACEITA_RECICLAVEL, obs: "Esquina com a Rua Freire Alemão." },
  { id: "reciclavel-017", nome: "Ecoponto – Barra do Ceará", tipo: "Ecoponto", bairro: "Barra do Ceará", endereco: "Rua Graça Aranha, 300", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_RECICLAVEL, obs: "Esquina com a Rua Wilcar Bastos Cavalcante." },
  { id: "reciclavel-018", nome: "Ecoponto – Cidade 2000", tipo: "Ecoponto", bairro: "Cidade 2000", endereco: "Rua Giselda Cysne, 92", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_RECICLAVEL, obs: "Cruzamento com a Rua Sólon Carvalho." },
  { id: "reciclavel-019", nome: "Pão de Açúcar – Buena Vista", tipo: "Supermercado", bairro: "Edson Queiroz", endereco: "Avenida Washington Soares, 1500", telefone: "(85) 3366-6104", aceita: ACEITA_RECICLAVEL, obs: "Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-020", nome: "Ecoponto – Jóquei Clube", tipo: "Ecoponto", bairro: "Jóquei Clube", endereco: "Rua Perdigão de Oliveira, 971", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_RECICLAVEL, obs: "Esquina com a Rua Silveira Filho." },
  { id: "reciclavel-021", nome: "Ecoponto – Edson Queiroz", tipo: "Ecoponto", bairro: "Edson Queiroz", endereco: "Rua Vereador José Batista Barbosa", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_RECICLAVEL, obs: "Sem número no eCycle (cruzamento com a Rua Hil de Moraes)." },
  { id: "reciclavel-022", nome: "Ecoponto – Praia do Futuro I", tipo: "Ecoponto", bairro: "Vicente Pinzon", endereco: "Rua José Aurélio Câmara, 83", horario: "Seg a Sáb, 8h–17h", aceita: ACEITA_RECICLAVEL, obs: "Esquina com a Avenida Dioguinho." },
  { id: "reciclavel-023", nome: "Ecoponto – Cidade dos Funcionários", tipo: "Ecoponto", bairro: "Cidade dos Funcionários", endereco: "Rua Doutor José Plutarco, esquina com a Rua Aluísio Barros Leal", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_RECICLAVEL, obs: "Endereço sem número, conforme a Marquise Ambiental." },
  { id: "reciclavel-024", nome: "Ecoponto – Vila Velha", tipo: "Ecoponto", bairro: "Vila Velha", endereco: "Rua Jasmim, s/n (por trás do Liceu Vila Velha)", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_RECICLAVEL, obs: "Endereço sem número, conforme a Marquise Ambiental." },
  { id: "reciclavel-025", nome: "Ecoponto – Vila Peri", tipo: "Ecoponto", bairro: "Vila Peri", endereco: "Rua Antônio Costa Mendes, esquina com a Travessa Augusto Ribeiro", horario: "Seg a Sáb, 7h–18h", aceita: ACEITA_RECICLAVEL, obs: "Endereço sem número, conforme a Marquise Ambiental." },
  { id: "reciclavel-026", nome: "Carrefour – Parangaba", tipo: "Supermercado", bairro: "Parangaba", endereco: "Avenida Godofredo Maciel, 3190", telefone: "(85) 98192-6576", aceita: ACEITA_RECICLAVEL, obs: "Recebe embalagem cartonada (caixa de leite e suco); confirme os demais recicláveis." },
  { id: "reciclavel-027", nome: "Ecoponto – Conjunto Ceará I", tipo: "Ecoponto", bairro: "Conjunto Ceará", endereco: "Rua 442, 159 (esquina com a Rua 432)", horario: "Seg a Sáb, 8h–17h", aceita: ACEITA_RECICLAVEL }
];