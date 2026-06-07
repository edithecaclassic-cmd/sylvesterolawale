import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";
import { experiences } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience | Sylvester Olaleye" },
      {
        name: "description",
        content:
          "4+ years of experience designing and building conversion-focused websites across Fiverr, PeoplePerHour, and Contra.",
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
      <section className="bg-hero pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-white/70">
            Background
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-tight text-white md:text-8xl">
            EXPERIENCE
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80">
            4+ years delivering bold, conversion-focused work for clients worldwide.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="relative border-l border-border pl-8 md:pl-12">
            {experiences.map((e, i) => (
              <div
                key={e.org}
                className="relative pb-12 last:pb-0 animate-rise-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background md:-left-[57px]">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {e.period}
                </span>
                <h2 className="mt-1 font-heading text-2xl font-bold">{e.org}</h2>
                <p className="mt-0.5 text-sm font-medium text-muted-foreground">{e.role}</p>
                <p className="mt-3 max-w-2xl text-muted-foreground">{e.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}
