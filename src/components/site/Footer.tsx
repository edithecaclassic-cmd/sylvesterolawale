import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { socials } from "@/data/portfolio";

const nav = [
  { label: "Work", to: "/work" as const },
  { label: "Services", to: "/services" as const },
  { label: "Experience", to: "/experience" as const },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success" />
              </span>
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/70">
                Available for new project
              </span>
            </Link>
            <p className="mt-5 font-display text-2xl tracking-tight">SYLVESTER OLALEYE</p>
            <p className="mt-3 max-w-xs text-sm text-ink-foreground/60">
              Website designer, AI automation and workflow expert, ecommerce specialist and
              virtual assistant building fast, bold, conversion-focused experiences.
            </p>
          </div>

          {/* explore */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/50">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {nav.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-ink-foreground/75 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* connect */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/50">
              Connect
            </p>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm text-ink-foreground/75 transition-colors hover:text-primary"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink-foreground/50">
              Get in touch
            </p>
            <a
              href="mailto:hello@sylvesterolaleye.com"
              className="mt-4 flex items-start gap-3 text-sm text-ink-foreground/75 transition-colors hover:text-primary"
            >
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              hello@sylvesterolaleye.com
            </a>
            <p className="mt-3 flex items-start gap-3 text-sm text-ink-foreground/75">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              Working with clients worldwide
            </p>
            <Link
              to="/"
              hash="contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">
          <span className="font-mono text-xs text-ink-foreground/50">
            © {year} Sylvester Olaleye. All rights reserved.
          </span>
          <span className="font-mono text-xs text-ink-foreground/40">
            Designed & built with intent.
          </span>
        </div>
      </div>
    </footer>
  );
}
