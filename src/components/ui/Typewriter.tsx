"use client";

import { useEffect, useState } from "react";

/**
 * Efeito de escrita real (substring progressiva): "Y" → "Yá" → "Yá G" → …
 * - React state + setInterval (revelação caractere a caractere).
 * - Sem layout shift: a parte ainda não digitada fica reservada (invisível).
 * - Caret perolado com blink suave.
 * - Respeita movimento reduzido (classe .reduce-motion em <html>) mostrando o
 *   texto completo de imediato; com ?motion=1 a animação roda mesmo assim.
 * - Acessível: aria-label com o texto completo.
 */
type TypewriterProps = {
  text: string;
  className?: string;
  /** intervalo entre letras (ms) */
  speed?: number;
  /** atraso antes de começar (ms) */
  startDelay?: number;
  /** exibir caret perolado */
  caret?: boolean;
};

export function Typewriter({
  text,
  className = "",
  speed = 90,
  startDelay = 350,
  caret = true,
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce =
      document.documentElement.classList.contains("reduce-motion");
    if (reduce) {
      setCount(text.length);
      setDone(true);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const starter = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length && interval) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(starter);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  const shown = text.slice(0, count);
  const rest = text.slice(count);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{shown}</span>
      {caret && !done && <span className="tw-caret" aria-hidden="true" />}
      {/* reserva o espaço do texto completo (sem layout shift) */}
      <span aria-hidden="true" className="invisible">
        {rest}
      </span>
    </span>
  );
}
