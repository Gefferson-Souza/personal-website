import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-term-bg/95 backdrop-blur-sm border-b border-term-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Terminal className="text-term-success w-6 h-6" />
            <span className="font-mono font-bold text-lg tracking-tight text-white">
              gefferson_souza<span className="text-term-success animate-pulse">_</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
            <a href="#" className="text-term-muted hover:text-term-success transition-colors">~/about</a>
            <a href="#experience" className="text-term-muted hover:text-term-success transition-colors">~/experience</a>
            <a href="#projects" className="text-term-muted hover:text-term-success transition-colors">~/projects</a>
            <a href="#lab" className="text-term-muted hover:text-term-success transition-colors">~/lab</a>
            <a href="#contact" className="px-4 py-1.5 border border-term-border hover:border-term-success text-term-success rounded hover:bg-term-success/10 transition-all">
              contact.sh
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
