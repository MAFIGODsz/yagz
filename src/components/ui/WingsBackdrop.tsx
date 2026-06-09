"use client";

import { useId } from "react";

type WingsBackdropProps = {
  className?: string;
  /** intensidade do brilho (0–1) */
  opacity?: number;
};

/**
 * Plano de fundo decorativo e abstrato inspirado em asas de borboleta:
 * formas orgânicas com gradiente iridescente, bem suaves (blur) e em
 * movimento lento. Puramente estético (aria-hidden) — não usa ícones.
 */
export function WingsBackdrop({ className = "", opacity = 0.55 }: WingsBackdropProps) {
  const uid = useId().replace(/:/g, "");
  const a = `wing-a-${uid}`;
  const b = `wing-b-${uid}`;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      {/* Asa superior esquerda */}
      <svg
        className="absolute -left-32 -top-40 h-[44rem] w-[44rem] animate-drift blur-2xl"
        viewBox="0 0 200 200"
        fill="none"
      >
        <defs>
          <radialGradient id={a} cx="38%" cy="32%" r="75%">
            <stop offset="0%" stopColor="var(--azure-300)" stopOpacity="0.9" />
            <stop offset="55%" stopColor="var(--periwinkle)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--mist)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M104 18C150 14 188 52 184 104C181 146 142 174 110 168C78 162 58 128 64 90C69 56 78 20 104 18Z"
          fill={`url(#${a})`}
        />
      </svg>

      {/* Asa inferior direita (espelhada e com nuance aqua) */}
      <svg
        className="absolute -bottom-48 -right-36 h-[48rem] w-[48rem] animate-float-slow blur-2xl"
        viewBox="0 0 200 200"
        fill="none"
      >
        <defs>
          <radialGradient id={b} cx="62%" cy="68%" r="75%">
            <stop offset="0%" stopColor="var(--azure-200)" stopOpacity="0.85" />
            <stop offset="55%" stopColor="var(--lilac)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--azure-50)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path
          d="M96 32C58 28 22 64 28 112C33 152 74 180 110 172C146 164 172 126 166 86C160 50 134 36 96 32Z"
          fill={`url(#${b})`}
        />
      </svg>
    </div>
  );
}
