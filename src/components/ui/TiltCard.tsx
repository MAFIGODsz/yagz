"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Hook de tilt 3D sutil que segue o ponteiro. Performático:
 * - só ativa em ponteiro fino (desktop) e se o usuário permitir movimento;
 * - escreve apenas variáveis CSS (transform composto na GPU), via rAF;
 * - sem dependências externas.
 */
function useTilt(max: number) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--ry", `${(px * max).toFixed(2)}deg`);
        el.style.setProperty("--rx", `${(-py * max).toFixed(2)}deg`);
      });
    };

    const reset = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", reset);
      cancelAnimationFrame(raf);
    };
  }, [max]);

  return ref;
}

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** inclinação máxima em graus (sutil por padrão) */
  max?: number;
};

/**
 * Envólucro que aplica um leve efeito 3D (tilt) seguindo o mouse.
 * O conteúdo (ex.: um .card) mantém seus próprios estados de hover.
 */
export function TiltCard({ children, className = "", max = 6 }: TiltCardProps) {
  const ref = useTilt(max);
  return (
    <div ref={ref} className={`tilt ${className}`}>
      {children}
    </div>
  );
}
