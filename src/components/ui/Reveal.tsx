"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/** Variações de entrada reutilizáveis */
export type RevealVariant = "up" | "fade" | "scale" | "blur" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** atraso da animação em ms (para escalonar listas) */
  delay?: number;
  /** elemento HTML a renderizar (default: div) */
  as?: ElementType;
  /** tipo de animação de entrada (default: "up" = fadeInUp) */
  variant?: RevealVariant;
};

/**
 * Envólucro de animação de entrada (fade + subida) acionada quando o elemento
 * entra na viewport. Respeita prefers-reduced-motion automaticamente via CSS.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-variant={variant}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
