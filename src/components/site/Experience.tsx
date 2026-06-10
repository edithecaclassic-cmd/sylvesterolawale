import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { experiences } from "@/data/portfolio";
import projectAxion from "@/assets/project-axion.jpg";
import projectDeeplus from "@/assets/project-deeplus.jpg";
import projectForma from "@/assets/project-forma.jpg";
import projectCaroline from "@/assets/project-caroline.jpg";

const floatImages = [projectAxion, projectDeeplus, projectForma, projectCaroline];

export function Experience() {
  const [active, setActive] = useState(-1);
  const [hover, setHover] = useState<number | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number, clientY: number) => {
    if (!floatRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    floatRef.current.style.left = `${clientX - rect.left}px`;
    floatRef.current.style.top = `${clientY - rect.top}px`;
  };

  return (
    <section id="experience" className="relative bg-ink py-20 text-ink-foreground md:py-28">
      <div ref={sectionRef} className="relative mx-auto max-w-7xl px-5 md:px-8">
        <p className="font-display text-5xl text-white/[0.04] md:text-8xl">EXPERIENCE</p>
        <div className="-mt-6 flex items-end justify-between gap-4 md:-mt-12">
          <h2 className="font-display text-4xl tracking-tight md:text-6xl">EXPERIENCE</h2>
          <span className="text-sm font-medium text-ink-foreground/60">
            4+ years of experience
          </span>
        </div>

        {/* floating preview that trails the cursor on hover */}
        <div
          ref={floatRef}
          className={`pointer-events-none absolute z-20 hidden h-28 w-44 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl border border-white/15 shadow-glow transition-all duration-200 md:block ${
            hover !== null ? "scale-100 opacity-100" : "scale-75 opacity-0"
          }`}
          style={{ rotate: "-6deg" }}
        >
          {hover !== null && (
            <img
              src={floatImages[hover % floatImages.length]}
              alt=""
              className="h-full w-full object-cover"
            />
          )}
        </div>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {experiences.map((e, i) => {
            const isActive = active === i;
            return (
              <div
                key={e.org}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onMouseMove={(ev) => onMove(ev.clientX, ev.clientY)}
              >
                <button
                  onClick={() => setActive(isActive ? -1 : i)}
                  className="group flex w-full items-center gap-4 py-6 text-left md:py-7"
                >
                  <span
                    className={`font-heading text-xs font-bold transition-colors ${
                      isActive ? "text-primary" : "text-ink-foreground/40"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`font-heading text-lg font-bold transition-colors md:text-2xl ${
                        isActive ? "text-primary" : "group-hover:text-primary"
                      }`}
                    >
                      {e.org}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink-foreground/60">{e.role}</p>
                  </div>
                  <span className="text-sm font-medium text-ink-foreground/60">{e.period}</span>
                  <ArrowUpRight
                    className={`h-5 w-5 flex-shrink-0 text-primary transition-all duration-300 ${
                      isActive ? "rotate-0 opacity-100" : "-rotate-45 opacity-40"
                    }`}
                  />
                </button>

                <div
                  className="grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    gridTemplateRows: isActive ? "1fr" : "0fr",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 pl-7 text-base text-ink-foreground/70">
                      {e.detail}
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
