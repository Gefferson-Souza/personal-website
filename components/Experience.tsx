import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const jobs = [
    {
      company: "Duofy",
      role: "Senior Backend Engineer",
      date: "APR 2025 — PRESENT",
      tech: ["NestJS", "RabbitMQ", "Node.js Architecture"],
      description: [
        "Architected a high-performance multi-tenant context system using AsyncLocalStorage, reducing code coupling by 40%.",
        "Designed a 'Zero Data Loss' loyalty sync engine using RabbitMQ and cron jobs that survived critical ERP outages.",
        "Optimized microservices memory footprint by implementing dynamic lazy loading for native C++ hardware drivers."
      ]
    },
    {
      company: "Fox Digital",
      role: "Tech Lead",
      date: "SEP 2024 — APR 2025",
      tech: ["Kubernetes", "Microservices", "System Resilience"],
      description: [
        "Solely resolved a critical production failure in the government fiscal integration (SEFAZ) during a holiday peak, ensuring zero downtime.",
        "Led the migration to containerized microservices (Docker/K8s), cutting cloud infrastructure costs by 15%.",
        "Automated the entire corporate communication pipeline, eliminating 20+ hours of manual operations monthly."
      ]
    },
    {
      company: "Emestone Mining",
      role: "Software Engineer",
      date: "MAY 2023 — JAN 2024",
      tech: ["React", "CI/CD", "Performance Engineering"],
      description: [
        "Orchestrated the complete production rollout, taking the project from local development to a live cloud environment.", // AQUI ESTÁ O "BOTEI PRA RODAR"
        "Engineered high-performance dashboards, boosting page load speeds by 30% via advanced lazy loading strategies.",
        "Established automated testing protocols that reduced production bug reports by 40%."
      ]
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

              <ul className="space-y-2 mb-4">
                {job.description.map((item, i) => (
                  <li key={i} className="text-term-muted text-sm leading-relaxed pl-4 relative before:content-['>'] before:absolute before:left-0 before:text-term-border">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-term-card border border-term-border text-[10px] text-term-muted font-mono rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}