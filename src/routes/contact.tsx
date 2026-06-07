import { createFileRoute } from "@tanstack/react-router";
import { Mail, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { socials } from "@/data/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Sylvester Olaleye" },
      {
        name: "description",
        content:
          "Get in touch with Sylvester Olaleye to build a fast, bold, conversion-focused website.",
      },
      { property: "og:title", content: "Contact | Sylvester Olaleye" },
      {
        property: "og:description",
        content: "Let's build something fast, bold, and unforgettable.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-hero">
      <Nav />
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-5 pb-20 pt-32 md:px-8">
        <p className="font-heading text-sm font-bold uppercase tracking-[0.25em] text-white/70">
          Let's talk
        </p>
        <h1 className="mt-3 font-display text-5xl leading-[0.9] tracking-tight text-white md:text-8xl">
          HAVE A PROJECT<br />IN MIND?
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/80 md:text-lg">
          Tell me about your project and let's build something fast, bold, and
          conversion-focused. Reach out on any channel below.
        </p>

        <a
          href="https://wa.me/2348058496536"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:scale-105"
        >
          <Mail className="h-4 w-4" /> Message on WhatsApp
        </a>

        <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white backdrop-blur transition-colors hover:border-primary"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                {s.label}
              </span>
              <ArrowUpRight className="h-5 w-5 text-white/60 transition-colors group-hover:text-primary" />
            </a>
          ))}
        </div>

        <p className="mt-16 text-xs text-white/50">
          © {new Date().getFullYear()} Sylvester Olaleye
        </p>
      </section>
    </main>
  );
}
