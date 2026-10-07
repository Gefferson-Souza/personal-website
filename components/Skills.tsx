// Só skills da ficha de fatos v2, seção 5. "familiar" marca o nível mais baixo da ficha.
type Skill = { name: string; familiar?: boolean };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "Backend",
    skills: [
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "REST APIs" },
      { name: "Event-driven architecture" },
      { name: "Multi-tenancy" },
      { name: "Offline-first design" },
      { name: "Rust (Axum, Tokio)" },
      { name: "Python", familiar: true },
    ],
  },
  {
    title: "Data and messaging",
    skills: [
      { name: "PostgreSQL" },
      { name: "RabbitMQ" },
      { name: "Redis" },
      { name: "MongoDB" },
      { name: "TypeORM" },
      { name: "Prisma" },
    ],
  },
  {
    title: "Infra",
    skills: [
      { name: "Docker" },
      { name: "Kubernetes on AWS (EKS)" },
      { name: "GitHub Actions" },
      { name: "NX monorepo" },
    ],
  },
  {
    title: "Frontend and Desktop",
    skills: [
      { name: "React" },
      { name: "Electron" },
      { name: "Angular", familiar: true },
      { name: "SASS", familiar: true },
      { name: "MapBox and Google Maps APIs", familiar: true },
    ],
  },
  {
    title: "Quality",
    skills: [
      { name: "Pre-commit quality gates (hooks)" },
      { name: "AI-assisted delivery (Claude Code, MCP servers, agent workflows)" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 id="skills-title" className="font-mono text-2xl font-bold text-term-text mb-4 flex items-center gap-2">
            <span className="text-term-success">02.</span> Skills
          </h2>
          <p className="text-term-muted text-sm leading-relaxed">
            What I use in production. Items marked familiar are working knowledge, not daily tools.
          </p>
        </div>
        <div className="md:w-2/3 grid gap-8 sm:grid-cols-2">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-sm font-bold text-term-success mb-3">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <li
                    key={s.name}
                    className="px-2 py-1 bg-term-card border border-term-border text-xs text-term-text font-mono rounded"
                  >
                    {s.name}
                    {s.familiar && <span className="text-term-muted"> (familiar)</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
