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

  // ─── FIX WEBKIT background-clip:text ────────────────────────────────────
  // .text-gradient usa background-clip:text. No WebKit (Safari / Chrome mobile)
  // o clip do gradiente âncora em TODOS os descendentes, inclusive os que têm
  // visibility:hidden — tornando o placeholder "rest" visível e revelando o
  // texto completo antes do fim da animação.
  //
  // Solução: aplicar text-gradient SOMENTE ao span interno de "shown" e colocar
  // o span "rest" como irmão (sibling) fora do contexto de background-clip.
  // O wrapper externo mantém as demais classes (italic, etc.) para que ambos
  // os spans herdem o font-style correto e a reserva de espaço seja fiel.
  const GRADIENT_CLASS = "text-gradient";
  const hasGradient = className.includes(GRADIENT_CLASS);
  // Classes sem text-gradient → vão para o wrapper (ex.: "italic")
  const wrapperClass = hasGradient
    ? className.replace(GRADIENT_CLASS, "").trim()
    : className;
  // Classes exclusivas do span visível (text-gradient permanece aqui)
  const shownClass = hasGradient ? GRADIENT_CLASS : "";

  return (
    <span className={wrapperClass} aria-label={text}>
      {/* Apenas o texto já revelado recebe o gradiente */}
      <span aria-hidden="true" className={shownClass}>
        {shown}
        {caret && !done && <span className="tw-caret" aria-hidden="true" />}
      </span>
      {/* Placeholder fora do contexto background-clip:text → visibility:hidden
          funciona corretamente em todos os navegadores / mobile */}
      <span aria-hidden="true" className="invisible">
        {rest}
      </span>
    </span>
  );
}
