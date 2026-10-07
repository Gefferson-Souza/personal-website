// Só skills da ficha de fatos v2, seção 5. Os três primeiros grupos = Expert, Also used = Proficient, Familiar = Familiar.
// A palavra "Expert" não aparece no site de propósito.
type Skill = { name: string; note?: string };

const groups: { title: string; skills: Skill[] }[] = [
  {
    title: "Languages and frameworks",
    skills: [
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "NestJS" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Data and messaging",
    skills: [
      { name: "PostgreSQL" },
      { name: "RabbitMQ" },
    ],
  },
  {
    title: "Practices",
    skills: [
      { name: "Event-driven architecture" },
      { name: "Offline-first design" },
      { name: "Multi-tenancy" },
      { name: "Brazilian tax e-invoicing integrations" },
    ],
  },
  {
    title: "Also used",
    skills: [
      { name: "Rust (Axum, Tokio)", note: "side projects" },
      { name: "Docker" },
      { name: "Kubernetes on AWS EKS", note: "at Fox" },
      { name: "Redis" },
      { name: "MongoDB" },
      { name: "TypeORM" },
      { name: "Prisma" },
      { name: "React" },
      { name: "Electron" },
      { name: "GitHub Actions" },
      { name: "NX" },
    ],
  },
  {
    title: "Familiar",
    skills: [
      { name: "Python" },
      { name: "Angular" },
      { name: "SASS" },
      { name: "MapBox and Google Maps APIs" },
    ],
  },
  {
    title: "AI-assisted delivery",
    skills: [
      { name: "Claude Code" },
      { name: "Agent workflows" },
      { name: "Quality gates (hooks)" },
      { name: "MCP servers" },
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
            The first three groups are where I am strongest. Familiar means I have worked with it, not that I run it.
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
                    {s.note && <span className="text-term-muted"> ({s.note})</span>}
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
