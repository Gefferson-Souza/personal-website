import { ArrowRight, Box, Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-mono text-2xl font-bold text-term-text mb-12 flex items-center gap-2">
          <span className="text-term-success">02.</span> Engineering Labs
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tyrus Project */}
          <div className="group bg-term-card border border-term-border hover:border-term-success transition-all p-8 relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Box className="w-24 h-24 text-term-muted group-hover:text-term-success transition-colors" />
             </div>
             
             <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-term-success/10 text-term-success text-xs font-mono border border-term-success/20">COMPILER ARCHITECTURE</span>
                <span className="text-xs font-mono text-term-muted">RUST + TS</span>
             </div>

             <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-term-success transition-colors">Tyrus (The Oxidizer)</h3>
             
             <p className="text-term-muted text-sm mb-6 leading-relaxed flex-grow">
                An experimental source-to-source compiler designed to bridge NestJS agility with Rust safety. It statically analyzes TypeScript ASTs to generate idiomatic, type-safe Rust code (Axum/Tokio) for backend services.
             </p>
             
             <div className="flex flex-wrap gap-2 mb-8">
               {["AST Parsing", "Static Analysis", "Code Generation", "Rust"].map(tag => (
                 <span key={tag} className="px-2 py-1 bg-term-bg border border-term-border text-xs text-term-muted font-mono">
                   {tag}
                 </span>
               ))}
             </div>
             
             <a href="https://github.com/gefferson-souza/Tyrus" target="_blank" className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-term-success border-b border-transparent hover:border-term-success transition-all w-fit">
                view_source
                <ArrowRight className="w-4 h-4" />
             </a>
          </div>

          {/* GoiásScript Project */}
          <div className="group bg-term-card border border-term-border hover:border-term-purple transition-all p-8 relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 className="w-24 h-24 text-term-muted group-hover:text-term-purple transition-colors" />
             </div>

             <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-term-purple/10 text-term-purple text-xs font-mono border border-term-purple/20">LANGUAGE DESIGN</span>
                <span className="text-xs font-mono text-term-muted">ESOTERIC</span>
             </div>

             <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-term-purple transition-colors">GoiásScript</h3>
             
             <p className="text-term-muted text-sm mb-6 leading-relaxed flex-grow">
                A Turing-complete programming language implementing a custom lexer and parser. Built to demonstrate AST manipulation while paying homage to the Brazilian "Caipira" dialect.
             </p>
             
             <div className="flex flex-wrap gap-2 mb-8">
               {["Custom Lexer", "Parser Logic", "Tokenization", "JavaScript Compilation"].map(tag => (
                 <span key={tag} className="px-2 py-1 bg-term-bg border border-term-border text-xs text-term-muted font-mono">
                   {tag}
                 </span>
               ))}
             </div>
             
             <a href="#" className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-term-purple border-b border-transparent hover:border-term-purple transition-all w-fit">
                read_documentation
                <ArrowRight className="w-4 h-4" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}