import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work | Sylvester Olaleye" },
      {
        name: "description",
        content:
          "Selected web design and development work by Sylvester Olaleye, including Deeplus Media, AXION Logistics, and more.",
      },
      { property: "og:title", content: "Work | Sylvester Olaleye" },
      {
        property: "og:description",
        content: "Selected web design and development projects built to convert.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main className="bg-background">
      <Nav />
      <section className="bg-hero pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-white/70">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-tight text-white md:text-8xl">
            ALL WORK
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            A selection of websites and brand experiences built to be fast, bold, and
            conversion-focused.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 md:grid-cols-2 md:px-8">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              to="/work/$slug"
              params={{ slug: p.slug }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-rise-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} project preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink-foreground backdrop-blur">
                  {p.category}
                </span>
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-heading text-xl font-bold">{p.title}</h2>
                  <span className="text-sm text-muted-foreground">{p.year}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
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
            </Link>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
