export default function Experience() {
  const jobs = [
    {
      company: "Duofy",
      role: "Senior Backend Engineer",
      date: "2024 — Present",
      description: "High-Scalability Architecture (NestJS/DDD) for enterprise-grade applications. Database Performance (PostgreSQL) tuning and query optimization. Engineering Standards (CI/CD) implementation for reliable deployments."
    },
    {
      company: "Fox Digital",
      role: "Tech Lead",
      date: "2023 — 2024",
      description: "Led the migration of legacy monoliths to a Rust-based microservices architecture. Achieved 80% latency reduction through efficient async runtime utilization. Mentored junior developers on strict type safety practices and asynchronous programming patterns."
    },
    {
      company: "Emestone Mining",
      role: "Software Engineer",
      date: "2021 — 2023",
      description: "Built high-throughput data ingestion pipelines using Node.js and C++ native addons. Designed real-time analytics dashboards processing 10k+ events per second. Enforced strict testing coverage (95%+) using Jest and integration testing suites."
    }
  ];

  return (
    <section id="experience" className="py-20 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 className="font-mono text-2xl font-bold text-term-text mb-4 flex items-center gap-2">
            <span className="text-term-success">01.</span> Experience
          </h2>
          <p className="text-term-muted text-sm leading-relaxed">
            A chronological log of professional engagements, focusing on backend architecture, system optimization, and technical leadership.
          </p>
        </div>
        <div className="md:w-2/3 space-y-12">
          {jobs.map((job, index) => (
            <div key={index} className="relative pl-8 border-l border-term-border hover:border-term-success transition-colors group">
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-term-bg border border-term-border group-hover:border-term-success group-hover:bg-term-success transition-colors"></div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-term-success transition-colors">{job.role}</h3>
                <span className="font-mono text-xs text-term-muted">{job.date}</span>
              </div>
              <div className="text-term-success font-mono text-sm mb-4">{job.company}</div>
              <p className="text-term-muted text-sm leading-relaxed max-w-prose">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
