import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";
import { getProject, projects } from "@/data/portfolio";

export const Route = createFileRoute("/work/$id")({
  loader: ({ params }) => {
    const project = getProject(params.id);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.title} | Sylvester Olaleye` : "Project | Sylvester Olaleye" },
        {
          name: "description",
          content: p?.description ?? "Project case study by Sylvester Olaleye.",
        },
        { property: "og:title", content: p ? `${p.title} | Sylvester Olaleye` : "Project" },
        { property: "og:description", content: p?.description ?? "" },
        ...(p ? [{ property: "og:image", content: p.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <h1 className="font-display text-4xl">Project not found</h1>
        <Link to="/work" className="mt-4 inline-block text-primary underline">
          View all work
        </Link>
      </div>
    </main>
  ),
  errorComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <h1 className="font-display text-4xl">Something went wrong</h1>
        <Link to="/work" className="mt-4 inline-block text-primary underline">
          Back to work
        </Link>
      </div>
    </main>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();
  const others = projects.filter((x) => x.id !== p.id).slice(0, 2);

  return (
    <main className="bg-background">
      <Nav />
      <header className="relative overflow-hidden bg-ink pb-12 pt-32 text-ink-foreground md:pt-40">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-foreground/70 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All work
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              {p.category}
            </span>
            <span className="text-sm text-ink-foreground/60">{p.year}</span>
          </div>
          <h1 className="mt-4 font-display text-5xl tracking-tight md:text-8xl">{p.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-foreground/75">{p.description}</p>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Visit live site <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </header>

      <section className="mx-auto -mt-2 max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="overflow-hidden rounded-3xl border border-border shadow-card">
          <img
            src={p.image}
            alt={`${p.title} mockup`}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.overview}</p>

            <h3 className="mt-10 font-heading text-xl font-bold">What I delivered</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {p.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Results
              </h3>
              <div className="mt-4 space-y-4">
                {p.results.map((r) => (
                  <div key={r.label}>
                    <p className="font-display text-3xl text-primary">{r.value}</p>
                    <p className="text-sm text-muted-foreground">{r.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Tags
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <h3 className="font-display text-2xl tracking-tight">More work</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.id}
                to="/work/$id"
                params={{ id: o.id }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <img
                  src={o.image}
                  alt={o.title}
                  className="h-16 w-24 flex-shrink-0 rounded-lg object-cover"
                />
                <div>
                  <p className="font-heading font-bold group-hover:text-primary">{o.title}</p>
                  <p className="text-sm text-muted-foreground">{o.category}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
