"use client";

import { useEffect, useRef, useState } from "react";

// One observer pass for scroll reveals and one pointer listener for tilt cards; the CSS in globals.css does the rest.
export default function Effects() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const onMove = (ev: PointerEvent) => {
      const card = (ev.target as Element).closest<HTMLElement>("[data-tilt]");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((ev.clientX - r.left) / r.width) * 100}%`);
      card.style.setProperty("--my", `${((ev.clientY - r.top) / r.height) * 100}%`);
      card.style.setProperty("--ry", `${((ev.clientX - r.left) / r.width - 0.5) * 10}deg`);
      card.style.setProperty("--rx", `${((ev.clientY - r.top) / r.height - 0.5) * -10}deg`);
    };
    const onLeave = (ev: PointerEvent) => {
      const card = (ev.target as Element).closest?.<HTMLElement>("[data-tilt]");
      if (card && !card.contains(ev.relatedTarget as Node)) {
        card.style.removeProperty("--rx");
        card.style.removeProperty("--ry");
      }
    };
    if (fine && !still) {
      document.addEventListener("pointermove", onMove);
      document.addEventListener("pointerout", onLeave);
    }
    return () => {
      io.disconnect();
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onLeave);
    };
  }, []);

  return null;
}

// Digits roll up to their value once the figure scrolls into view; the real value stays readable for screen readers.
export function RollingNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return setInView(true);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        io.disconnect();
      }
    }, { rootMargin: "0px 0px -15% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  let col = 0;
  return (
    <span ref={ref} className={`roll${inView ? " is-in" : ""}`}>
      <span className="sr-only">{value}</span>
      <span className="roll__digits" aria-hidden="true">
        {[...value].map((ch, i) =>
          /\d/.test(ch) ? (
            <span key={i} className="roll__col">
              <span className="roll__strip" style={{ "--d": ch, "--i": col++ } as React.CSSProperties}>
                {Array.from({ length: 10 }, (_, n) => <span key={n}>{n}</span>)}
              </span>
            </span>
          ) : (
            <span key={i}>{ch === " " ? " " : ch}</span>
          )
        )}
      </span>
    </span>
  );
}
