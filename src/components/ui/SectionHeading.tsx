import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  /** marcador editorial opcional, ex.: "01" */
  index?: string;
  /** alinhamento do conjunto */
  align?: "left" | "center";
  /** id usado por aria-labelledby da seção */
  id?: string;
  className?: string;
};

/**
 * Cabeçalho padrão de seção: marcador editorial + eyebrow + título display +
 * descrição. Mantém ritmo tipográfico e respiro consistentes no site.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  align = "center",
  id,
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      <span className="eyebrow">
        {index && (
          <span className="font-display text-base italic text-azure-400">
            {index}
          </span>
        )}
        <span className="h-px w-6 bg-azure-300" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 id={id} className="text-display-md">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
