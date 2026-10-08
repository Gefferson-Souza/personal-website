import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const jobs = [
    {
      company: "Duofy",
      role: "Software Engineer",
      date: "APR 2025 — PRESENT",
      summary:
        "Full-stack role, mostly backend work on a multi-tenant retail platform (point of sale and ERP), with offline-first operation and Brazilian tax e-invoicing integrations. Stack: NestJS, PostgreSQL, RabbitMQ.",
      tech: ["TypeScript", "NestJS", "PostgreSQL", "RabbitMQ", "Offline-first", "Multi-tenant"],
      description: [
        "Restored sales for every affected client after a Brazilian tax authority began rejecting tax documents on New Year's Day; I diagnosed and fixed it myself, on the holiday."
      ]
    },
    {
      company: "Fox Digital Commodities",
      role: "Software Engineer → Tech Lead",
      date: "JAN 2024 — APR 2025",
      summary:
        "Joined as a junior developer (Jan 2024); mid-level (Jul 2024); Tech Lead of a small team (Sep 2024).",
      tech: ["Kubernetes", "AWS EKS", "Tax e-invoicing", "CT-e", "NF-e", "MDF-e"],
      description: [
        "Removed 20+ hours of manual work per month by automating the issuance of Brazilian electronic tax documents (CT-e, NF-e, MDF-e): three document types once issued by hand across three systems are now generated when a grain-truck freight ticket is created.",
        "Led the migration of monolithic services to Kubernetes on EKS.",
        "Mentored 4 developers."
      ]
    }
  ];

  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 id="experience-title" className="font-mono text-2xl font-bold text-term-text mb-4 flex items-center gap-2">
            <span className="text-term-success">01.</span> Experience
          </h2>
          <p className="text-term-muted text-sm leading-relaxed">
            Most recent first. Two companies since Jan 2024.
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