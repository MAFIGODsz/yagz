"use client";

import { useEffect, useRef, type ReactNode } from "react";

type HeroParallaxProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  "aria-label"?: string;
};

/**
 * Section do hero com parallax de ponteiro: expõe `--px`/`--py` (-1..1) que os
 * elementos decorativos (.parallax-1/2/3) usam para se mover com o mouse,
 * criando profundidade. Só ativa em ponteiro fino e respeita reduced-motion.
 */
export function HeroParallax({ children, className = "", id, ...rest }: HeroParallaxProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const py = ((e.clientY - r.top) / r.height - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--px", px.toFixed(3));
        el.style.setProperty("--py", py.toFixed(3));
      });
    };
    const reset = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} id={id} className={className} {...rest}>
      {children}
    </section>
  );
}
