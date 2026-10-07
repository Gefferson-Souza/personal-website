import { Terminal } from 'lucide-react';

export default function Navbar() {
  return (
    <nav aria-label="Primary" className="fixed top-0 w-full z-50 bg-term-bg/95 backdrop-blur-sm border-b border-term-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="hidden sm:flex items-center gap-3">
            <Terminal aria-hidden="true" className="text-term-success w-6 h-6" />
            <span className="font-mono font-bold text-sm sm:text-lg tracking-tight text-white">
              gefferson_souza<span aria-hidden="true" className="text-term-success animate-pulse">_</span>
            </span>
          </div>
          <div className="flex items-center space-x-4 md:space-x-8 w-full justify-end sm:w-auto font-mono text-xs md:text-sm">
            <a href="#about" className="hidden md:inline py-2 text-term-muted hover:text-term-success transition-colors">~/about</a>
            <a href="#skills" className="hidden md:inline py-2 text-term-muted hover:text-term-success transition-colors">~/skills</a>
            <a href="#experience" className="py-2 text-term-muted hover:text-term-success transition-colors">~/experience</a>
            <a href="#projects" className="py-2 text-term-muted hover:text-term-success transition-colors">~/projects</a>
            <a href="#contact" className="px-4 py-1.5 border border-term-border hover:border-term-success text-term-success rounded hover:bg-term-success/10 transition-all">
              contact.sh
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
