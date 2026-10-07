import { codeToHtml } from 'shiki';
import { ArrowRight, Command, Terminal } from 'lucide-react';

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
            Gefferson Souza · Goiânia, Brazil
        </div>
        <h1 id="hero-title" className="font-mono text-4xl lg:text-6xl font-bold leading-tight mb-6 text-term-text">
            <span aria-hidden="true" className="text-term-muted">&lt;</span>Backend<span aria-hidden="true" className="text-term-muted">/&gt;</span><br/>
            Resilient<br/>
            <span className="text-term-success">Systems</span>
        </h1>
        <p className="font-mono text-sm text-term-text mb-4">
            Node.js · TypeScript · NestJS · PostgreSQL · Kubernetes (EKS)
        </p>
        <p className="text-term-muted text-lg max-w-xl mb-8 leading-relaxed font-light">
             Software Engineer (Backend) building event-driven, multi-tenant and offline-first systems for retail, with Brazilian tax e-invoicing integrations. NestJS day to day, Rust in open-source compiler projects.
        </p>
        <div className="flex flex-wrap gap-4 font-mono text-sm">
            <a href="#experience" className="px-6 py-3 bg-term-text text-term-bg font-bold hover:bg-term-success transition-colors rounded-sm flex items-center gap-2">
                view_experience()
            </a>
            <a href="https://github.com/Gefferson-Souza" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-term-border text-term-muted hover:text-white hover:border-white transition-colors flex items-center gap-2 rounded-sm">
                github_profile
                <ArrowRight className="w-4 h-4" />
            </a>
        </div>
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
                    nvim -O nest_controller.ts axum_handler.rs
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

                <div role="region" aria-label="Axum handler example in Rust" tabIndex={0} className="p-4 overflow-x-auto relative">
                     <div aria-hidden="true" className="absolute -left-3 top-1/2 -translate-y-1/2 bg-term-bg border border-term-border rounded-full p-1 z-10 hidden sm:block">
                        <ArrowRight className="w-4 h-4 text-term-accent animate-pulse" />
                     </div>
                     <div className="text-xs text-term-muted mb-2 border-b border-term-border/30 pb-1 w-fit font-bold flex items-center gap-1">
                        <span className="text-orange-400">RS</span> users_handler.rs
                    </div>
                     <div dangerouslySetInnerHTML={{ __html: rsHtml }} className="text-xs leading-relaxed" />
                </div>
            </div>

            <div aria-hidden="true" className="bg-term-success text-black px-4 py-1 text-xs font-bold flex justify-between items-center">
                <span className="flex items-center gap-2">
                    <Command className="w-3 h-3" /> NORMAL
                </span>
                <span>master*</span>
            </div>
        </div>
      </div>
    </section>
  );
}
