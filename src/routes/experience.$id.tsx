import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { getExperience, experiences } from "@/data/portfolio";

export const Route = createFileRoute("/experience/$id")({
  loader: ({ params }) => {
    const item = getExperience(params.id);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.item;
    return {
      meta: [
        { title: e ? `${e.org} | Experience | Sylvester Olaleye` : "Experience | Sylvester Olaleye" },
        {
          name: "description",
          content: e?.summary ?? "Experience detail by Sylvester Olaleye.",
        },
        { property: "og:title", content: e ? `${e.org} | Sylvester Olaleye` : "Experience" },
        { property: "og:description", content: e?.summary ?? "" },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <h1 className="font-display text-4xl">Experience not found</h1>
        <Link to="/experience" className="mt-4 inline-block text-primary underline">
          View all experience
        </Link>
      </div>
    </main>
  ),
  errorComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <h1 className="font-display text-4xl">Something went wrong</h1>
        <Link to="/experience" className="mt-4 inline-block text-primary underline">
          View all experience
        </Link>
      </div>
    </main>
  ),
  component: ExperienceDetail,
});

function ExperienceDetail() {
  const { item } = Route.useLoaderData();
  const idx = experiences.findIndex((e) => e.id === item.id);
  const next = experiences[(idx + 1) % experiences.length];

  return (
    <main className="bg-background">
      <Nav />

      <header className="relative overflow-hidden bg-ink pb-16 pt-32 text-ink-foreground md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/60 transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All experience
          </Link>
          <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.3em] text-primary">
            {item.period}
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight md:text-7xl">{item.org}</h1>
          <p className="mt-3 text-lg font-semibold text-primary">{item.role}</p>
        </div>
      </header>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-4xl gap-12 px-5 md:grid-cols-[1.5fr_1fr] md:px-8">
          <div>
            <h2 className="font-heading text-2xl font-bold">Overview</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{item.summary}</p>

            <h2 className="mt-10 font-heading text-2xl font-bold">Highlights</h2>
            <ul className="mt-4 space-y-3">
              {item.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Focus areas
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/experience/$id"
              params={{ id: next.id }}
              className="group mt-6 flex items-center justify-between rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Next
                </p>
                <p className="mt-1 font-heading text-lg font-bold">{next.org}</p>
              </div>
              <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
