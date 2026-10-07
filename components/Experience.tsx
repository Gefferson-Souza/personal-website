import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const jobs = [
    {
      company: "Duofy",
      role: "Software Engineer (Backend)",
      date: "APR 2025 — PRESENT",
      tech: ["NestJS", "RabbitMQ", "PostgreSQL", "Offline-first"],
      description: [
        "Restored service for every affected terminal in the state after the tax authority began enforcing a regulatory change it had publicly postponed; diagnosed and shipped the fix alone during the holiday shutdown.",
        "Designed an offline-first contingency layer that queues transactions when the network or an upstream government API is unavailable and reconciles on recovery.",
        "Built a multi-tenant request-context layer on Node.js AsyncLocalStorage across the monorepo, eliminating manual metadata propagation and the cross-tenant leaks it caused.",
        "Designed a RabbitMQ synchronization engine with scheduled reconciliation that keeps point-of-sale and ERP data consistent through third-party outages.",
        "Built pre-commit gates that block untyped code, debug statements and untracked work before review, after analyzing 3,454 AI-assisted coding sessions."
      ]
    },
    {
      company: "Fox Digital Commodities",
      role: "Tech Lead / Software Engineer",
      date: "SEP 2024 — APR 2025",
      tech: ["Kubernetes", "EKS", "Fiscal Automation"],
      description: [
        "Removed 20+ hours of manual work per month by automating fiscal document issuance: three document types once issued by hand across three systems now emit from a single freight ticket.",
        "Drove the migration of monolithic services to Kubernetes on EKS with one infrastructure engineer, and owned architecture through production deployment.",
        "Mentored 4 developers on clean code, SOLID, Git workflow and Docker practice."
      ]
    },
    {
      company: "Fox Digital Commodities",
      role: "Software Engineer (Full Stack)",
      date: "JAN 2024 — AUG 2024",
      tech: ["REST APIs", "MapBox", "BI Dashboards"],
      description: [
        "Built REST APIs for real-time freight calculation and tax assessment, and BI dashboards over MapBox and Google Maps for fleet tracking."
      ]
    },
    {
      company: "Universidade Católica de Brasília",
      role: "Technologist in Systems Analysis and Development",
      date: "2024",
      tech: [],
      description: []
    }
  ];

  return (
    <section id="experience" className="py-20 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="font-mono text-2xl font-bold text-term-text mb-4 flex items-center gap-2">
            <span className="text-term-success">01.</span> Experience Log
          </h2>
          <p className="text-term-muted text-sm leading-relaxed">
            A track record of solving complex engineering problems, from architectural design to critical production deployments.
          </p>
        </div>
        <div className="md:w-2/3 space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="relative pl-8 border-l border-term-border hover:border-term-success transition-colors group">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-term-bg border border-term-border group-hover:border-term-success group-hover:bg-term-success transition-colors"></div>
              
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

              {job.description.length > 0 && (
              <ul className="space-y-2 mb-4">
                {job.description.map((item, i) => (
                  <li key={i} className="text-term-muted text-sm leading-relaxed pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-term-border">
                    {item}
                  </li>
                ))}
              </ul>
              )}

              {job.tech.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-term-card border border-term-border text-[10px] text-term-muted font-mono rounded">
                    {t}
                  </span>
                ))}
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}