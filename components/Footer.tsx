import { profile } from "@/lib/profile";

const linkClass =
  "inline-block py-2 text-term-muted hover:text-term-success transition-colors";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-term-border bg-term-bg py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-mono text-lg font-bold text-white mb-2">Get in touch</h2>
            <p className="text-term-muted text-sm">
              Backend engineering. {profile.location}. Replies in English or Portuguese.
            </p>
          </div>
          <nav aria-label="Contact" className="flex flex-wrap justify-center gap-x-6 font-mono text-sm">
            <a href={`mailto:${profile.email}`} className={`${linkClass} break-all`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkClass}>GitHub</a>
          </nav>
        </div>
        <div className="mt-12 text-center text-xs text-term-muted font-mono">
          <p>© 2026 {profile.shortName}.</p>
        </div>
      </div>
    </footer>
  );
}
