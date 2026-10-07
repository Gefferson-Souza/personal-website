// Fonte única dos dados públicos do perfil. Vem da ficha de fatos v2.
// Trocar um link aqui atualiza rodapé, JSON-LD e metadata no mesmo passe.

export const siteUrl = "https://gefferson-souza-dev.vercel.app";

export const profile = {
  name: "Gefferson Teodoro de Souza",
  shortName: "Gefferson Souza",
  jobTitle: "Software Engineer (Backend)",
  employer: "Duofy",
  location: "Goiânia, Brazil (UTC−3)",
  email: "geffersonteodorodesouza@gmail.com",
  github: "https://github.com/Gefferson-Souza",
  // TODO(dono): trocar pelo slug novo quando for escolhido (ficha v2, seção 1:
  // gefferson-souza, geffersonsouza ou gefferson-t-souza). Ao trocar, atualizar no mesmo
  // passe currículo, README do GitHub e este arquivo. O slug atual foi mantido de propósito.
  linkedin: "https://www.linkedin.com/in/gefferson-teodoro-de-souza-desenvolvedor-full-stck/",
} as const;

export const keywords = [
  "Backend Engineer",
  "Node.js",
  "TypeScript",
  "NestJS",
  "PostgreSQL",
  "RabbitMQ",
  "Kubernetes",
  "Amazon EKS",
  "event-driven architecture",
  "multi-tenant",
  "offline-first",
  "REST APIs",
  "tax e-invoicing",
  "Rust",
];
