import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";
import { getProject, projects } from "@/data/portfolio";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: p
        ? [
            { title: `${p.title} | Sylvester Olaleye` },
            { name: "description", content: p.description },
            { property: "og:title", content: `${p.title} | Sylvester Olaleye` },
            { property: "og:description", content: p.description },
            { property: "og:type", content: "article" },
            { property: "og:image", content: p.mockup ?? p.image },
          ]
        : [{ title: "Project | Sylvester Olaleye" }],
    };
  },
  notFoundComponent: () => (
    <main className="bg-background">
      <Nav />
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
        <h1 className="font-display text-5xl">PROJECT NOT FOUND</h1>
        <Link to="/work" className="mt-6 text-primary hover:underline">
          Back to all work
        </Link>
      </div>
    </main>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const others = projects.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <main className="bg-background">
      <Nav />

      <section className="bg-hero pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All Work
          </Link>
          <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.25em] text-white/70">
            {p.category} · {p.year}
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-tight text-white md:text-7xl">
            {p.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">{p.overview}</p>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-105"
            >
              Visit Live Site <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={p.mockup ?? p.image}
              alt={`${p.title} website mockup`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-xl font-bold">The Challenge</h2>
                <p className="mt-3 text-muted-foreground">{p.challenge}</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold">The Solution</h2>
                <p className="mt-3 text-muted-foreground">{p.solution}</p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold">Results</h2>
                <ul className="mt-3 space-y-2">
                  {p.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Deliverables
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Year
                </h3>
                <p className="mt-2 font-display text-3xl">{p.year}</p>
              </div>
            </aside>
          </div>

          {/* other projects */}
          <div className="mt-16 border-t border-border pt-10">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">MORE WORK</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/work/$slug"
                  params={{ slug: o.slug }}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <div>
                    <h3 className="font-heading text-lg font-bold">{o.title}</h3>
                    <p className="text-sm text-muted-foreground">{o.category}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
