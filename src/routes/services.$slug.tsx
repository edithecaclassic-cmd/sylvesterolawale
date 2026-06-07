import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { ContactCTA } from "@/components/site/ContactCTA";
import { getService, services } from "@/data/portfolio";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    return {
      meta: s
        ? [
            { title: `${s.title} | Sylvester Olaleye` },
            { name: "description", content: s.description },
            { property: "og:title", content: `${s.title} | Sylvester Olaleye` },
            { property: "og:description", content: s.description },
            { property: "og:image", content: s.image },
          ]
        : [{ title: "Service | Sylvester Olaleye" }],
    };
  },
  notFoundComponent: () => (
    <main className="bg-background">
      <Nav />
      <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-5 text-center">
        <h1 className="font-display text-5xl">SERVICE NOT FOUND</h1>
        <Link to="/services" className="mt-6 text-primary hover:underline">
          Back to services
        </Link>
      </div>
    </main>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <main className="bg-background">
      <Nav />
      <section className="bg-hero pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <h1 className="mt-6 font-display text-5xl tracking-tight text-white md:text-7xl">
            {s.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">{s.details}</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <img
              src={s.image}
              alt={`${s.title} preview`}
              loading="lazy"
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-xl font-bold">What's included</h2>
              <ul className="mt-4 space-y-3">
                {s.features.map((f: string) => (
                  <li key={f} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7">
              <h2 className="font-heading text-xl font-bold">Ready to start?</h2>
              <p className="mt-3 text-muted-foreground">
                Let's talk about your project and how this service can move it forward.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">OTHER SERVICES</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="group rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <h3 className="font-heading text-base font-bold group-hover:text-primary">
                    {o.title}
                  </h3>
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
