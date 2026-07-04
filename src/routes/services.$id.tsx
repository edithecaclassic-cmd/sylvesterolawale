import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Minus, Plus, Quote, Sparkles } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";
import { Footer } from "@/components/site/Footer";
import {
  getService,
  services,
  getProject,
  type Service,
  type Project,
} from "@/data/portfolio";

export const Route = createFileRoute("/services/$id")({
  loader: ({ params }) => {
    const service = getService(params.id);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: [
        { title: s ? `${s.title} | Sylvester Olaleye` : "Service | Sylvester Olaleye" },
        {
          name: "description",
          content: s?.description ?? "Service offered by Sylvester Olaleye.",
        },
        { property: "og:title", content: s ? `${s.title} | Sylvester Olaleye` : "Service" },
        { property: "og:description", content: s?.description ?? "" },
        ...(s ? [{ property: "og:image", content: s.image }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <h1 className="font-display text-4xl">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block text-primary underline">
          View all services
        </Link>
      </div>
    </main>
  ),
  errorComponent: () => (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-center">
      <div>
        <h1 className="font-display text-4xl">Something went wrong</h1>
        <Link to="/services" className="mt-4 inline-block text-primary underline">
          Back to services
        </Link>
      </div>
    </main>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service: s } = Route.useLoaderData() as { service: Service };
  const [openFaq, setOpenFaq] = useState(-1);
  const others = services.filter((x) => x.slug !== s.slug);
  const featuredProjects = s.featured
    .map((id: string) => getProject(id))
    .filter((p): p is Project => Boolean(p));


  return (
    <main className="bg-background">
      <Nav />

      {/* Hero */}
      <header className="relative overflow-hidden bg-ink pb-14 pt-32 text-ink-foreground md:pt-40">
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-[120px]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:items-center md:px-8">
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-foreground/70 transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> All services
            </Link>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" /> {s.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
              {s.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-foreground/75">{s.overview}</p>
            <Link
              to="/"
              hash="contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-card">
            <img
              src={s.image}
              alt={s.title}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Outcomes band */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-8">
          {s.outcomes.map((o) => (
            <div key={o.label} className="py-8 text-center sm:px-6">
              <p className="font-display text-4xl text-primary md:text-5xl">{o.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{o.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
          Skills & tools
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
          What I bring to the table
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {s.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-card"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-secondary/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
            What you get
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">Capabilities</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {s.capabilities.map((c, i) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <span className="font-heading text-sm font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-2 font-heading text-xl font-bold">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow / architecture map */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
          How I work
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
          The process, mapped out
        </h2>

        <div className="relative mt-12 grid gap-8 md:grid-cols-4">
          {/* connecting line on desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 md:block" />
          {s.workflow.map((w) => (
            <div key={w.step} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary font-heading text-lg font-bold text-primary-foreground shadow-glow">
                {w.step}
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured work */}
      {featuredProjects.length > 0 && (
        <section className="bg-secondary/40 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
                  Selected work
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                  Projects in this field
                </h2>
              </div>
              <Link
                to="/work"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                View all work <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((p) => (
                <Link
                  key={p.id}
                  to="/work/$id"
                  params={{ id: p.id }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-heading font-bold group-hover:text-primary">{p.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{p.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Feedbacks */}
      {s.feedbacks.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
            Feedback
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
            What clients say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {s.feedbacks.map((f) => (
              <figure
                key={f.name}
                className="glass rounded-2xl p-7 shadow-card"
              >
                <Quote className="h-7 w-7 text-primary" />
                <blockquote className="mt-4 text-lg leading-relaxed text-foreground">
                  "{f.quote}"
                </blockquote>
                <figcaption className="mt-5 text-sm">
                  <span className="font-heading font-bold">{f.name}</span>
                  <span className="text-muted-foreground"> — {f.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      {s.faqs.length > 0 && (
        <section className="bg-secondary/40 py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <p className="text-center font-heading text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Questions
            </p>
            <h2 className="mt-3 text-center font-display text-3xl tracking-tight md:text-4xl">
              Good to know
            </h2>
            <div className="mt-10 divide-y divide-border border-y border-border">
              {s.faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-heading text-lg font-bold">{f.q}</span>
                      <span
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-foreground"
                        }`}
                      >
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 text-muted-foreground">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pt-16 md:px-8 md:pt-20">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-12 text-center text-ink-foreground md:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/20 blur-[100px]" />
          <h2 className="relative font-display text-3xl tracking-tight md:text-4xl">
            Ready to get started with {s.title.split("&")[0].trim().toLowerCase()}?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-ink-foreground/75">
            Tell me about your project and I'll come back with a clear plan, timeline, and quote.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/2348058496536"
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink-foreground transition-colors hover:text-primary"
            >
              Chat on WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>


      {/* Other services */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <h3 className="font-display text-2xl tracking-tight">Explore other services</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/services/$id"
              params={{ id: o.slug }}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <img
                src={o.image}
                alt={o.title}
                className="h-16 w-24 flex-shrink-0 rounded-lg object-cover"
              />
              <p className="font-heading text-sm font-bold group-hover:text-primary">{o.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
