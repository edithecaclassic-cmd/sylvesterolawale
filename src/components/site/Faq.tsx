import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/portfolio";

export function Faq() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="relative bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-center font-display text-5xl text-foreground/5 md:text-8xl">
          FAQ
        </p>
        <div className="-mt-6 text-center md:-mt-12">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">
            QUESTIONS, ANSWERED
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.question}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-heading text-base font-bold md:text-lg">
                    {f.question}
                  </span>
                  <Plus
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {f.answer}
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
