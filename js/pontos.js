const ACEITA_PILHA = ["pilhas-baterias"];

const ACEITA_ELETRONICO = ["celulares"]

const ACEITA_ELETRODOMESTICO = ["eletronicos-eletrodomesticos"]

const ACEITA_PNEU = ["pneus"];

const ACEITA_OLEO = ["oleo-cozinha"];

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
  { id: "oleo-009", nome: "Ecoenel Recicla – Carlito Pamplona", tipo: "Ecoenel Recicla", bairro: "Carlito Pamplona", endereco: "Avenida Francisco Sá, s/n", horario: "Seg a Sáb, 8h–12h e 14h–17h", telefone: "0800 28 50 196", aceita: ACEITA_OLEO }
];