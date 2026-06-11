import type { ReactNode } from "react";

/**
 * Wraps a set of sections so they "stack" on scroll: each layer sticks to the
 * top of the viewport and the next section scrolls up to cover it, like a deck
 * of cards. The final child is excluded from stacking and scrolls normally.
 */
export function StackReveal({ children }: { children: ReactNode[] }) {
  const layers = children.slice(0, -1);
  const last = children[children.length - 1];

  return (
    <>
      <div className="relative">
        {layers.map((child, i) => (
          <div
            key={i}
            className="sticky top-0 shadow-[0_-24px_60px_-24px_rgba(0,0,0,0.45)]"
            style={{ zIndex: i + 1 }}
          >
            {child}
          </div>
        ))}
      </div>
      {last}
    </>
  );
}
