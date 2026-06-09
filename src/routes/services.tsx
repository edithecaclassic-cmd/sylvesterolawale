import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";
import { ProcessSection } from "@/components/site/ProcessSection";
import { services } from "@/data/portfolio";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Sylvester Olaleye" },
      {
        name: "description",
        content:
          "Web development, ecommerce design, data analytics, and branding services by Sylvester Olaleye.",
      },
      { property: "og:title", content: "Services | Sylvester Olaleye" },
      {
        property: "og:description",
        content: "Fast, bold, conversion-focused services for ambitious brands.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="bg-background">
      <Nav />
      <header className="relative overflow-hidden bg-ink pb-16 pt-32 text-ink-foreground md:pb-20 md:pt-40">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
            What I offer
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-tight md:text-8xl">SERVICES</h1>
          <p className="mt-4 max-w-xl text-ink-foreground/70">
            End-to-end design and development, tuned for speed, clarity, and conversion.
          </p>
        </div>
      </header>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 md:grid-cols-2 md:px-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow animate-rise-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 font-heading text-sm font-bold text-ink-foreground backdrop-blur">
                  0{i + 1}
                </span>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-xl font-bold uppercase tracking-tight md:text-2xl">
                  {s.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 md:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back home
          </Link>
          <Link
            to="/"
            hash="contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <ProcessSection />
      <ContactCTA />
    </main>
  );
}
