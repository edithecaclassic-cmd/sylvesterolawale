import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import { experiences } from "@/data/portfolio";

export const Route = createFileRoute("/experience/")({
  head: () => ({
    meta: [
      { title: "Experience | Sylvester Olaleye" },
      {
        name: "description",
        content:
          "The freelance and academic experience behind Sylvester Olaleye's web design and development work.",
      },
      { property: "og:title", content: "Experience | Sylvester Olaleye" },
      {
        property: "og:description",
        content: "4+ years building bold, conversion-focused websites.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <main className="bg-background">
      <Nav />
      <header className="relative overflow-hidden bg-ink pb-16 pt-32 text-ink-foreground md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Background
          </p>
          <h1 className="mt-3 font-display text-4xl tracking-tight md:text-7xl">EXPERIENCE</h1>
          <p className="mt-4 max-w-xl text-ink-foreground/70">
            4+ years of freelance work and an engineering foundation that shapes how I build.
          </p>
        </div>
      </header>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="relative border-l border-border pl-8">
            {experiences.map((e, i) => (
              <Link
                key={e.org}
                to="/experience/$id"
                params={{ id: e.id }}
                className="group relative block pb-12 last:pb-0 animate-rise-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="absolute -left-[2.6rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h2 className="font-heading text-xl font-bold transition-colors group-hover:text-primary md:text-2xl">
                    {e.org}
                  </h2>
                  <span className="font-mono text-sm font-medium text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-primary">{e.role}</p>
                <p className="mt-3 max-w-2xl text-muted-foreground">{e.detail}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back home
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
