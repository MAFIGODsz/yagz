import { Icon } from "./Icon";
import { RESPONSE_TIME } from "@/data/site";

type ResponseBadgeProps = {
  /** "light" = fundo claro | "dark" = sobre fundo azul profundo */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Selo de confiança "Resposta em até 24h" — reduz o atrito perto dos CTAs.
 */
export function ResponseBadge({ variant = "light", className = "" }: ResponseBadgeProps) {
  const dark = variant === "dark";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium ${
        dark ? "bg-white/15 text-white" : "bg-mist text-azure-700"
      } ${className}`}
    >
      <Icon
        name="clock"
        size={16}
        className={dark ? "text-white" : "text-azure-600"}
      />
      {RESPONSE_TIME}
    </span>
  );
}
