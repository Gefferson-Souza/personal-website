import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const jobs = [
    {
      company: "Duofy",
      role: "Software Engineer (Backend)",
      date: "APR 2025 — PRESENT",
      summary:
        "Retail POS and ERP platform: NX monorepo (NestJS, TypeORM, PostgreSQL, RabbitMQ), serving multiple tenants.",
      tech: ["TypeScript", "NestJS", "PostgreSQL", "RabbitMQ", "Offline-first", "Multi-tenant"],
      description: [
        "Restored sales for every client in a Brazilian state after its tax authority (SEFAZ) changed how it validates tax documents on New Year's Day; I diagnosed and fixed it myself, on the holiday.",
        "Designed an offline-first layer that queues transactions when the network or a government API is down and replays them on recovery, so stores keep selling through outages.",
        "Built a RabbitMQ synchronization engine with scheduled reconciliation that keeps point-of-sale and ERP data consistent through third-party outages.",
        "Built a request-context layer on Node.js AsyncLocalStorage that carries the tenant through each request across the monorepo, replacing manual metadata propagation."
      ]
    },
    {
      company: "Fox Digital Commodities",
      role: "Software Engineer → Tech Lead",
      date: "JAN 2024 — APR 2025",
      summary:
        "Joined as a junior developer in Jan 2024; promoted to mid-level in Jul 2024 and to Tech Lead of a small team in Sep 2024.",
      tech: ["Kubernetes", "EKS", "Docker", "Tax e-invoicing", "REST APIs"],
      description: [
        "Removed 20+ hours of manual work per month by automating the issuance of Brazilian electronic tax documents (CT-e, NF-e, MDF-e): three document types once issued by hand across three systems are now generated from a single freight ticket.",
        "Led the migration of monolithic applications to Kubernetes on EKS and owned the architecture through production deployment.",
        "Mentored 4 developers on clean code, SOLID, Git workflow and Docker.",
        "Built REST APIs for freight calculation and Brazilian tax assessment, plus BI dashboards over MapBox and Google Maps for fleet tracking."
      ]
    },
    {
      company: "Universidade Católica de Brasília",
      role: "Technologist Degree in Systems Analysis and Development",
      date: "2024",
      summary: "",
      tech: [],
      description: []
    }
  ];

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 id="experience-title" className="font-mono text-2xl font-bold text-term-text mb-4 flex items-center gap-2">
            <span className="text-term-success">03.</span> Experience Log
          </h2>
          <p className="text-term-muted text-sm leading-relaxed">
            Production work on retail and freight systems: incident response, offline-first design, tax-document automation and platform migration.
          </p>
        </div>
        <ol className="md:w-2/3 space-y-12">
          {jobs.map((job, index) => (
            <li key={index} className="relative pl-8 border-l border-term-border hover:border-term-success transition-colors group">
              <div aria-hidden="true" className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-term-bg border border-term-border group-hover:border-term-success group-hover:bg-term-success transition-colors"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-term-success transition-colors">{job.role}</h3>
                <span className="font-mono text-xs text-term-muted flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {job.date}
                </span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                 <Briefcase className="w-3 h-3 text-term-muted" />
                 <span className="text-term-success font-mono text-sm">{job.company}</span>
              </div>

              {job.summary && (
                <p className="text-term-muted text-sm leading-relaxed mb-4">{job.summary}</p>
              )}

              {job.description.length > 0 && (
              <ul className="space-y-2 mb-4">
                {job.description.map((item, i) => (
                  <li key={i} className="text-term-muted text-sm leading-relaxed pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-term-muted">
                    {item}
                  </li>
                ))}
              </ul>
              )}

              {job.tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-term-card border border-term-border text-xs text-term-muted font-mono rounded">
                    {t}
                  </span>
                ))}
              </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}