export default function Footer() {
  return (
    <footer id="contact" className="border-t border-term-border bg-term-bg py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-mono text-lg font-bold text-white mb-2">Ready to scale your backend engineering team?</h4>
            <p className="text-term-muted text-sm">Open for backend engineering roles.</p>
          </div>
          <div className="flex gap-6 font-mono text-sm">
            <a href="mailto:[EMAIL_ADDRESS]" className="text-term-muted hover:text-term-success transition-colors">email</a>
            <a href="https://www.linkedin.com/in/gefferson-teodoro-de-souza-desenvolvedor-full-stck/" className="text-term-muted hover:text-term-success transition-colors">linkedin</a>
            <a href="https://github.com/Gefferson-Souza" className="text-term-muted hover:text-term-success transition-colors">github</a>
            <a href="#" className="text-term-muted hover:text-term-success transition-colors">resume.pdf</a>
          </div>
        </div>
        <div className="mt-12 text-center text-xs text-term-border font-mono">
          <p>© 2026 Gefferson Souza. All systems operational.</p>
        </div>
      </div>
    </footer>
  );
}
