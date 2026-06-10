import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work | Sylvester Olaleye" },
      {
        name: "description",
        content:
          "Selected web design and development projects by Sylvester Olaleye, including Deeplus Media, AXION Logistics, and more.",
      },
      { property: "og:title", content: "Work | Sylvester Olaleye" },
      {
        property: "og:description",
        content: "Bold, conversion-focused websites built for ambitious brands.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main className="bg-background">
      <Nav />
      <header className="relative overflow-hidden bg-ink pb-16 pt-32 text-ink-foreground md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-tight md:text-8xl">ALL WORK</h1>
          <p className="mt-4 max-w-xl text-ink-foreground/70">
            A selection of websites I have designed and built, from real client launches to
            speculative redesigns.
          </p>
        </div>
      </header>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 md:grid-cols-2 md:px-8">
          {projects.map((p, i) => (
            <Link
              key={p.id}
              to="/work/$id"
              params={{ id: p.id }}
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
                  <h3 className="font-heading text-xl font-bold">{p.title}</h3>
                  <span className="text-sm text-muted-foreground">{p.year}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-5 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
