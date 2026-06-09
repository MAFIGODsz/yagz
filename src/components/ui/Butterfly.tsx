"use client";

import { useId, type SVGProps } from "react";

type ButterflyProps = SVGProps<SVGSVGElement> & {
  /** "line" = traço delicado | "filled" = preenchimento iridescente suave */
  variant?: "line" | "filled";
  /** intensidade do preenchimento (0–1); padrão 0.16 para filled decorativo */
  fillIntensity?: number;
};

/**
 * Borboleta — símbolo da marca: transformação, leveza, conexão e evolução.
 * Desenho simétrico (asas espelhadas) com traço fino e gradiente iridescente.
 * Decorativa por padrão (aria-hidden); passe `role="img"` + `aria-label` se
 * precisar que tenha significado.
 */
export function Butterfly({ variant = "line", fillIntensity, ...props }: ButterflyProps) {
  // id único e estável (SSR-safe) para evitar colisão de gradientes
  const gid = `bfly-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--azure-400)" />
          <stop offset="50%" stopColor="var(--periwinkle)" />
          <stop offset="100%" stopColor="var(--lilac)" />
        </linearGradient>
      </defs>

      <g
        stroke={`url(#${gid})`}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={variant === "filled" ? `url(#${gid})` : "none"}
        fillOpacity={variant === "filled" ? (fillIntensity ?? 0.16) : 0}
      >
        {/* Antenas */}
        <path d="M50 39 C 47 28 41 23 35 21" fill="none" />
        <path d="M50 39 C 53 28 59 23 65 21" fill="none" />

        {/* Corpo */}
        <path d="M50 37 C 48.6 46 48.6 60 50 70 C 51.4 60 51.4 46 50 37 Z" />

        {/* Asa superior esquerda */}
        <path d="M50 41 C 37 24 14 22 10 37 C 7.5 48 27 53 50 47 Z" />
        {/* Asa inferior esquerda */}
        <path d="M50 49 C 39 56 23 60 23 72 C 23 82 41 77 50 64 Z" />

        {/* Asa superior direita (espelhada) */}
        <path d="M50 41 C 63 24 86 22 90 37 C 92.5 48 73 53 50 47 Z" />
        {/* Asa inferior direita (espelhada) */}
        <path d="M50 49 C 61 56 77 60 77 72 C 77 82 59 77 50 64 Z" />
      </g>
    </svg>
  );
}
