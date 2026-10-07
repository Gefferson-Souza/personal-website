import { codeToHtml } from 'shiki';
import { ArrowRight, Command, Terminal } from 'lucide-react';
import { profile } from '@/lib/profile';

export default async function Hero() {
  const tsCode = `
@Controller('users')
export class UsersController {
  constructor(
    private readonly service: UserService
  ) {}

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const user = await this.service.findById(id);
    if (!user) throw new NotFoundException();
    return user;
  }
}
`.trim();

  const rsCode = `
async fn get_user(
    Path(id): Path<Uuid>,
    State(pool): State<PgPool>,
) -> Result<Json<User>, StatusCode> {
    sqlx::query_as!(
        User,
        "SELECT id, name, email FROM users WHERE id = $1",
        id
    )
    .fetch_one(&pool)
    .await
    .map(Json)
    .map_err(|e| match e {
        sqlx::Error::RowNotFound => StatusCode::NOT_FOUND,
        _ => StatusCode::SERVICE_UNAVAILABLE,
    })
}
`.trim();

  const tsHtml = await codeToHtml(tsCode, {
    lang: 'typescript',
    theme: 'github-dark-dimmed'
  });

  const rsHtml = await codeToHtml(rsCode, {
    lang: 'rust',
    theme: 'github-dark-dimmed'
  });

  return (
    <section id="top" aria-labelledby="hero-title" className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-term-card border border-term-border rounded-full text-xs font-mono text-term-success mb-6 animate-fade-in">
            Gefferson Souza · Goiânia, Brazil · UTC−3
        </div>
        <h1 id="hero-title" className="font-mono text-4xl lg:text-6xl font-bold leading-tight mb-6 text-term-text">
            <span aria-hidden="true" className="text-term-muted">&lt;</span>Backend<br/>
            <span className="text-term-success">Engineer</span><span aria-hidden="true" className="text-term-muted">/&gt;</span>
        </h1>
        <p className="text-term-text text-lg max-w-xl mb-4 leading-relaxed">
            Mid-level backend engineer. I build retail systems in TypeScript and NestJS that keep selling when the network or a tax-authority API is down.
        </p>
        <p className="font-mono text-sm text-term-muted mb-8">
            Node.js · TypeScript · NestJS · PostgreSQL · RabbitMQ
        </p>
        <div className="flex flex-wrap items-center gap-4 font-mono text-sm mb-8">
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
        <ul aria-label="Highlights" className="space-y-2 max-w-xl text-sm leading-relaxed text-term-muted border-l border-term-border pl-4">
            <li>Restored sales for every client in a Brazilian state on New Year&apos;s Day; I fixed it myself.</li>
            <li>Removed 20+ hours a month of manual tax-document work.</li>
            <li>Junior in Jan 2024, mid-level in Jul 2024, Tech Lead in Sep 2024.</li>
        </ul>
      </div>

      <div className="relative group perspective-1000">
        <div aria-hidden="true" className="absolute -inset-1 bg-gradient-to-r from-term-success to-term-accent rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-term-card border border-term-border rounded-lg shadow-2xl overflow-hidden font-mono text-sm transform transition-transform duration-500 hover:scale-[1.01]">
            <div className="bg-[#0f0f0f] px-4 py-3 flex items-center justify-between border-b border-term-border">
                <div aria-hidden="true" className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors"></div>
                </div>
                <div aria-hidden="true" className="text-xs text-term-muted hidden sm:flex items-center gap-2">
                    <Terminal className="w-3 h-3" />
                    illustrative examples
                </div>
                <div aria-hidden="true" className="flex gap-4 text-xs text-term-muted">
                    <span>UTF-8</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-term-border bg-term-bg relative">

                <div role="region" aria-label="NestJS controller example in TypeScript" tabIndex={0} className="p-4 overflow-x-auto">
                    <div className="text-xs text-term-muted mb-2 border-b border-term-border/30 pb-1 w-fit font-bold flex items-center gap-1">
                        <span className="text-blue-400">TS</span> users.controller.ts
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: tsHtml }} className="text-xs leading-relaxed" />
                </div>

                <div role="region" aria-label="Axum handler example in Rust (side projects)" tabIndex={0} className="p-4 overflow-x-auto relative">
                     <div aria-hidden="true" className="absolute -left-3 top-1/2 -translate-y-1/2 bg-term-bg border border-term-border rounded-full p-1 z-10 hidden sm:block">
                        <ArrowRight className="w-4 h-4 text-term-accent animate-pulse" />
                     </div>
                     <div className="text-xs text-term-muted mb-2 border-b border-term-border/30 pb-1 w-fit font-bold flex items-center gap-1">
                        <span className="text-orange-400">RS</span> users_handler.rs <span className="font-normal">(side projects)</span>
                    </div>
                     <div dangerouslySetInnerHTML={{ __html: rsHtml }} className="text-xs leading-relaxed" />
                </div>
            </div>

            <div aria-hidden="true" className="bg-term-success text-black px-4 py-1 text-xs font-bold flex justify-between items-center">
                <span className="flex items-center gap-2">
                    <Command className="w-3 h-3" /> NORMAL
                </span>
                <span>examples</span>
            </div>
        </div>
        <p className="mt-3 text-xs text-term-muted font-mono">
            Illustrative examples, not production code. NestJS is my day-to-day stack; Rust is for side projects.
        </p>
      </div>
    </section>
  );
}
