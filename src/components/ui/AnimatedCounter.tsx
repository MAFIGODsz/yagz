"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Conta de 0 até o valor quando entra na viewport, preservando prefixo,
 * sufixo e casas decimais (ex.: "+350", "+6 anos", "8,4%", "1.2M").
 *
 * - Placeholders sem número real (ex.: "+000k", "00%") são exibidos como estão
 *   (alvo = 0 → sem animação) — editar para o número real ativa o efeito.
 * - Anima uma única vez (IntersectionObserver) e respeita prefers-reduced-motion.
 * - Use tabular-nums no estilo para a largura não "pular" durante a contagem.
 */

type Parsed = {
  prefix: string;
  suffix: string;
  decimals: number;
  decSep: string;
  target: number;
};

function parseValue(value: string): Parsed | null {
  const m = value.match(/^(\D*)([\d.,]+)(.*)$/s);
  if (!m) return null;
  const [, prefix, numStr, suffix] = m;

  const decMatch = numStr.match(/[.,](\d{1,2})$/);
  const decimals = decMatch ? decMatch[1].length : 0;
  const decSep = decMatch ? numStr.charAt(numStr.length - decimals - 1) : ".";

  let normalized: string;
  if (decMatch) {
    const intPart = numStr
      .slice(0, numStr.length - decimals - 1)
      .replace(/[.,]/g, "");
    normalized = `${intPart}.${decMatch[1]}`;
  } else {
    normalized = numStr.replace(/[.,]/g, "");
  }

  const target = parseFloat(normalized);
  if (!Number.isFinite(target)) return null;
  return { prefix, suffix, decimals, decSep, target };
}

function format(n: number, decimals: number, decSep: string) {
  const s = n.toFixed(decimals);
  return decSep === "." ? s : s.replace(".", decSep);
}

type AnimatedCounterProps = {
  value: string;
  className?: string;
  /** duração da contagem em ms */
  duration?: number;
  /** atraso antes de iniciar a contagem (ms) */
  delay?: number;
  /** iniciar só quando entrar na viewport (default: true) */
  startOnView?: boolean;
};

export function AnimatedCounter({
  value,
  className,
  duration = 1600,
  delay = 0,
  startOnView = true,
}: AnimatedCounterProps) {
  const parsed = parseValue(value);
  const animatable = parsed !== null && parsed.target > 0;

  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [display, setDisplay] = useState<string>(() =>
    animatable
      ? `${parsed!.prefix}${format(0, parsed!.decimals, parsed!.decSep)}${parsed!.suffix}`
      : value,
  );

  useEffect(() => {
    if (!animatable || !parsed) {
      setDisplay(value);
      return;
    }
    const final = `${parsed.prefix}${format(parsed.target, parsed.decimals, parsed.decSep)}${parsed.suffix}`;
    const reduce =
      document.documentElement.classList.contains("reduce-motion");
    if (reduce) {
      setDisplay(final);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (started.current) return;
      started.current = true;
      const begin = () => {
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
          setDisplay(
            `${parsed.prefix}${format(parsed.target * eased, parsed.decimals, parsed.decSep)}${parsed.suffix}`,
          );
          if (t < 1) requestAnimationFrame(tick);
          else setDisplay(final);
        };
        requestAnimationFrame(tick);
      };
      if (delay > 0) window.setTimeout(begin, delay);
      else begin();
    };

    if (!startOnView) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration, delay, startOnView]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
