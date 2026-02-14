import { ArrowRight, Box, Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-term-border">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-mono text-2xl font-bold text-term-text mb-12 flex items-center gap-2">
          <span className="text-term-success">02.</span> Selected Works
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tyrus */}
          <div className="group bg-term-card border border-term-border hover:border-term-success transition-all p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Box className="w-12 h-12 text-term-muted group-hover:text-term-success transition-colors" />
             </div>
             <div className="text-xs font-mono text-term-success mb-2">ENGINEERING PROJECT</div>
             <h3 className="text-2xl font-bold mb-4 group-hover:text-term-success transition-colors">Tyrus</h3>
             <p className="text-term-muted text-sm mb-6 leading-relaxed">
                A framework leveraging the Rust compiler to enforce type safety on distributed Node.js architectures. Tyrus acts as a bridge, translating TypeScript ASTs directly into optimized Rust structs.
             </p>
             <div className="flex flex-wrap gap-2 mb-8">
               {["Rust", "Compiler API", "TypeScript"].map(tag => (
                 <span key={tag} className="px-2 py-1 bg-term-bg border border-term-border text-xs text-term-muted font-mono">
                   {tag}
                 </span>
               ))}
             </div>
             <a href="#" className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-term-success border-b border-transparent hover:border-term-success transition-all">
                view_source
                <ArrowRight className="w-4 h-4" />
             </a>
          </div>

          {/* GoiásScript */}
          <div id="lab" className="group bg-term-card border border-term-border hover:border-term-accent transition-all p-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code2 className="w-12 h-12 text-term-muted group-hover:text-term-accent transition-colors" />
             </div>
             <div className="text-xs font-mono text-term-accent mb-2">LANGUAGE STUDY</div>
             <h3 className="text-2xl font-bold mb-4 group-hover:text-term-accent transition-colors">GoiásScript</h3>
             <p className="text-term-muted text-sm mb-6 leading-relaxed">
                An esoteric, functional language inspired by the dialect of the Brazilian heartland. Compiles to optimized JavaScript with a focus on immutability by default and &quot;caipira&quot; syntax.
             </p>
             <div className="flex flex-wrap gap-2 mb-8">
               {["AST Parsing", "Lexer", "Codegen"].map(tag => (
                 <span key={tag} className="px-2 py-1 bg-term-bg border border-term-border text-xs text-term-muted font-mono">
                   {tag}
                 </span>
               ))}
             </div>
             <a href="#" className="inline-flex items-center gap-2 text-sm font-mono text-white hover:text-term-accent border-b border-transparent hover:border-term-accent transition-all">
                read_spec
                <ArrowRight className="w-4 h-4" />
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
