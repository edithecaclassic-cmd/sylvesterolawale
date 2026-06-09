import { useState } from "react";
import { ArrowUpRight, Plus, X } from "lucide-react";
import { services } from "@/data/portfolio";

export function Services() {
  const [open, setOpen] = useState(-1);

  return (
    <section id="services" className="relative bg-background pb-24 pt-4 md:pb-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-display text-5xl text-foreground/5 md:text-8xl">SERVICE</p>
        <div className="-mt-6 flex flex-col items-start justify-between gap-4 md:-mt-12 md:flex-row md:items-end">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">SERVICE</h2>
          <a
            href="#services"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
          >
            See All Services <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <div key={s.title}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className={`flex w-full items-center justify-between gap-6 px-1 text-left transition-colors ${
                    isOpen ? "rounded-2xl bg-ink text-ink-foreground" : "hover:text-primary"
                  }`}
                >
                  <div className="flex flex-1 items-center gap-6 py-6 md:py-7">
                    <span
                      className={`hidden font-heading text-sm font-bold md:block ${
                        isOpen ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="font-heading text-xl font-bold uppercase tracking-tight md:text-3xl">
                      {s.title}
                    </span>
                  </div>

                  {/* expanded image preview */}
                  <div
                    className="relative mr-4 hidden overflow-hidden rounded-xl transition-all duration-500 md:block"
                    style={{
                      width: isOpen ? 150 : 0,
                      height: isOpen ? 90 : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <img
                      src={s.image}
                      alt={`${s.title} preview`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <span
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground"
                    }`}
                  >
                    {isOpen ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>

                <div
                  className="grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl px-1 pb-7 pl-1 text-base text-muted-foreground md:pl-14">
                      {s.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
