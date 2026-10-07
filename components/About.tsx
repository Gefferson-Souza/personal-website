import { profile } from "@/lib/profile";

export default function About() {
  const facts = [
    { label: "focus", value: "Backend: event-driven, multi-tenant, offline-first" },
    { label: "platform", value: "NX monorepo: NestJS, PostgreSQL, RabbitMQ" },
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
              a request context that carries the tenant through each call, and integrations with a Brazilian state tax authority and ERPs.
            </p>
            <p>
              The platform is an NX monorepo of NestJS services on PostgreSQL and RabbitMQ, serving multiple tenants.
              On my own time I analyzed 3,454 of my AI-assisted coding sessions and built Claude Code pre-commit gates
              that block untyped code and debug statements before review.
            </p>
            <p>
              Today I am a Software Engineer (Backend) at Duofy. Before that I was Tech Lead of a small team at Fox
              Digital Commodities.
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
