import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";
import { services } from "@/data/portfolio";

export const Route = createFileRoute("/services/")({
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
        content: "Web development, ecommerce, data analytics, and branding services.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="bg-background">
      <Nav />
      <section className="bg-hero pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-white/70">
            What I Do
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-tight text-white md:text-8xl">
            SERVICES
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            End-to-end design and development, from first concept to launch and beyond.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 md:grid-cols-2 md:px-8">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-glow animate-rise-in"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-primary">0{i + 1}</span>
                  <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h2 className="mt-5 font-heading text-2xl font-bold">{s.title}</h2>
                <p className="mt-3 text-muted-foreground">{s.description}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
