import { profile } from "@/lib/profile";

export default function About() {
  const facts = [
    { label: "location", value: profile.location },
    {
      label: "time zone",
      value:
        "UTC−3 all year, no daylight saving. 1 hour ahead of US Eastern during US daylight time, 2 hours otherwise; 4–5 hours ahead of US Pacific",
    },
    { label: "languages", value: "Portuguese (native); English (professional written communication, conversational speaking)" },
    {
      label: "education",
      value: "Technologist Degree in Systems Analysis and Development, Universidade Católica de Brasília (2024)",
    },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="py-20 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 id="about-title" className="font-mono text-2xl font-bold text-term-text mb-4 flex items-center gap-2">
            <span className="text-term-success">04.</span> About
          </h2>
        </div>
        <div className="md:w-2/3">
          <div className="space-y-4 text-term-muted text-sm leading-relaxed max-w-2xl">
            <p>
              I am a backend engineer with almost three years in the field. I joined Fox Digital Commodities in Jan 2024
              as a junior, was promoted to mid-level in Jul 2024 and to Tech Lead in Sep 2024. Since Apr 2025 I am a
              Software Engineer (Backend) at Duofy.
            </p>
            <p>
              At Duofy I work on a retail POS and ERP platform in an NX monorepo: an offline transaction queue, RabbitMQ
              reconciliation, a request context that carries the tenant through each call, and integrations with a
              Brazilian state tax authority.
            </p>
          </div>

          <dl className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-[max-content_1fr] text-sm font-mono border border-term-border bg-term-card p-6 max-w-2xl">
            {facts.map((f) => (
              <div key={f.label} className="contents">
                <dt className="text-term-success">{f.label}:</dt>
                <dd className="text-term-text">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
