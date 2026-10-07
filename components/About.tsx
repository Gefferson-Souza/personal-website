import { profile } from "@/lib/profile";

export default function About() {
  const facts = [
    { label: "focus", value: "Backend: event-driven, multi-tenant, offline-first" },
    { label: "scope", value: "TypeScript end to end, from NestJS services to Electron and React clients" },
    { label: "location", value: profile.location },
    { label: "time zone", value: "One to two hours ahead of US Eastern" },
    { label: "languages", value: "Portuguese (native); English (professional written communication, conversational speaking)" },
  ];

  return (
    <section id="about" aria-labelledby="about-title" className="py-20 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <h2 id="about-title" className="font-mono text-2xl font-bold text-term-text mb-4 flex items-center gap-2">
            <span className="text-term-success">01.</span> About
          </h2>
        </div>
        <div className="md:w-2/3">
          <div className="space-y-4 text-term-muted text-sm leading-relaxed max-w-2xl">
            <p>
              My depth is in the backend: transaction queues that keep working offline, RabbitMQ reconciliation,
              tenant isolation enforced in the framework, and integrations with tax authorities and ERPs.
            </p>
            <p>
              The scope around it is TypeScript from end to end. I write the NestJS services and PostgreSQL schemas,
              and I work on the Electron and React clients that call them.
            </p>
            <p>
              I joined Fox Digital Commodities as a junior in January 2024 and became Tech Lead eight months later.
              Today I am a Software Engineer (Backend) at Duofy.
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
