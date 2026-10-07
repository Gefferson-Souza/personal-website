import { ArrowRight, Terminal } from 'lucide-react';
import { profile } from '@/lib/profile';

const highlights = [
  {
    label: "incident",
    text: "Restored sales for every affected client on New Year's Day, after a Brazilian tax authority began rejecting tax documents. I diagnosed and fixed it myself.",
  },
  {
    label: "automation",
    text: "At Fox, removed 20+ hours a month of manual tax-document work (CT-e, NF-e, MDF-e).",
  },
  {
    label: "public code",
    text: "GoiásScript, an esoteric programming language with a hand-written lexer and parser: 40 GitHub stars.",
  },
];

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-term-card border border-term-border rounded-full text-xs font-mono text-term-success mb-6 animate-fade-in">
            Gefferson Souza · Goiânia, Brazil · UTC-3
        </div>
        <h1 id="hero-title" className="font-mono text-4xl lg:text-6xl font-bold leading-tight mb-6 text-term-text">
            <span aria-hidden="true" className="text-term-muted">&lt;</span>Backend{' '}<br/>
            <span className="text-term-success">Engineer</span><span aria-hidden="true" className="text-term-muted">/&gt;</span>
        </h1>
        <p className="text-term-text text-lg max-w-xl mb-4 leading-relaxed">
            I work on multi-tenant retail systems in TypeScript and NestJS, with offline-first operation and Brazilian tax e-invoicing integrations.
        </p>
        <p className="font-mono text-sm text-term-muted mb-8">
            Node.js · TypeScript · NestJS · PostgreSQL · RabbitMQ
        </p>
        <div className="flex flex-wrap items-center gap-4 font-mono text-sm">
            <a href="#experience" className="px-6 py-3 bg-term-text text-term-bg font-bold hover:bg-term-success transition-colors rounded-sm flex items-center gap-2">
                View experience
            </a>
            <a href="https://github.com/Gefferson-Souza" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-term-border text-term-muted hover:text-white hover:border-white transition-colors flex items-center gap-2 rounded-sm">
                GitHub
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
                <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={`mailto:${profile.email}`} className="py-3 text-term-muted hover:text-term-success transition-colors break-all underline underline-offset-4 decoration-term-border">
                {profile.email}
            </a>
        </div>
      </div>

      <div className="relative group">
        <div aria-hidden="true" className="absolute -inset-1 bg-gradient-to-r from-term-success to-term-accent rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-term-card border border-term-border rounded-lg shadow-2xl overflow-hidden font-mono text-sm">
            <div className="bg-[#0f0f0f] px-4 py-3 flex items-center justify-between border-b border-term-border">
                <div aria-hidden="true" className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div aria-hidden="true" className="text-xs text-term-muted flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    highlights
                </div>
                <div aria-hidden="true" className="w-12"></div>
            </div>

            <ul aria-label="Highlights" className="bg-term-bg divide-y divide-term-border">
                {highlights.map((item) => (
                    <li key={item.label} className="p-5">
                        <div className="text-xs text-term-success mb-1">{item.label}</div>
                        <p className="text-term-text text-sm leading-relaxed">{item.text}</p>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
