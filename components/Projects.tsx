import { ArrowRight, Box, Code2, Star } from 'lucide-react';
import { profile } from '@/lib/profile';

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="projects-title" className="font-mono text-2xl font-bold text-term-text mb-12 flex items-center gap-2">
          <span className="text-term-success">03.</span> Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Tyrus Project */}
          <div className="group bg-term-card border border-term-border hover:border-term-success transition-all p-8 relative overflow-hidden flex flex-col">
            <div aria-hidden="true" className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Box className="w-24 h-24 text-term-muted group-hover:text-term-success transition-colors" />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-term-success/10 text-term-success text-xs font-mono border border-term-success/20">SIDE PROJECT</span>
              <span className="text-xs font-mono text-term-muted">EXPERIMENTAL</span>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-term-success transition-colors">Tyrus</h3>

            <p className="text-term-muted text-sm mb-6 leading-relaxed flex-grow">
              An experimental TypeScript-to-Rust transpiler with Axum and Tokio code generation.</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["TypeScript", "Rust", "Axum", "Tokio"].map(tag => (
                <span key={tag} className="px-2 py-1 bg-term-bg border border-term-border text-xs text-term-muted font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <a href={`${profile.github}/Tyrus`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-term-success border-b border-transparent hover:border-term-success transition-all w-fit">
              View source<span className="sr-only"> for Tyrus (opens in a new tab)</span>
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </a>
          </div>

          {/* GoiásScript Project */}
          <div className="group bg-term-card border border-term-border hover:border-term-accent transition-all p-8 relative overflow-hidden flex flex-col">
            <div aria-hidden="true" className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="w-24 h-24 text-term-muted group-hover:text-term-accent transition-colors" />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-term-accent/10 text-term-accent text-xs font-mono border border-term-accent/20">SIDE PROJECT</span>
              <span className="inline-flex items-center gap-1 text-xs font-mono text-term-text">
                <Star aria-hidden="true" className="w-3 h-3 text-term-accent" />
                40 GitHub stars
              </span>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-term-accent transition-colors">GoiásScript</h3>

            <p className="text-term-muted text-sm mb-6 leading-relaxed flex-grow">
              An esoteric programming language with a hand-written lexer and parser that compiles to JavaScript.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Hand-written lexer", "Parser", "Compiles to JavaScript"].map(tag => (
                <span key={tag} className="px-2 py-1 bg-term-bg border border-term-border text-xs text-term-muted font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <a href={`${profile.github}/goiasscript`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-term-accent border-b border-transparent hover:border-term-accent transition-all w-fit">
              View source<span className="sr-only"> for GoiásScript (opens in a new tab)</span>
              <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </a>
          </div>

          {/* Setup pessoal: sem link até o repositório ser aberto (ficha v2, seção 7) */}
          <div className="bg-term-card border border-term-border p-8 flex flex-col md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-term-bg text-term-muted text-xs font-mono border border-term-border">PERSONAL SETUP</span>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-white">Claude Code quality gates (hooks)</h3>

            <p className="text-term-muted text-sm mb-6 leading-relaxed">
              Quality gates (hooks) for AI-assisted coding, built after I analyzed 3,454 of my own sessions: 17.6% of my messages were corrections.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Claude Code", "Hooks", "Agent workflows", "MCP servers"].map(tag => (
                <span key={tag} className="px-2 py-1 bg-term-bg border border-term-border text-xs text-term-muted font-mono">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}