import { Icon } from "./Icon";
import { CONTACT, buildWhatsappLink, mediaKitMailto } from "@/data/socialLinks";
import { CTA_TEXT } from "@/data/site";

type Variant = "light" | "dark";

type ContactActionsProps = {
  /** "light" = sobre fundo claro | "dark" = sobre fundo azul profundo */
  variant?: Variant;
  align?: "start" | "center";
  className?: string;
  /** rótulo do botão principal (WhatsApp) */
  whatsappLabel?: string;
  /** mensagem enviada ao abrir o WhatsApp */
  whatsappMessage?: string;
  /** botão do Instagram: true (rótulo padrão) | string (rótulo custom) | false */
  instagram?: boolean | string;
  /** botão de e-mail / mídia kit: true | string | false */
  email?: boolean | string;
};

/**
 * Grupo de CTAs reutilizável (WhatsApp + Instagram + E-mail comercial).
 * Centraliza os botões de contato do site — basta editar os links em
 * `src/data/socialLinks.ts`. O WhatsApp é sempre o CTA principal.
 */
export function ContactActions({
  variant = "light",
  align = "start",
  className = "",
  whatsappLabel = CTA_TEXT.partnership,
  whatsappMessage,
  instagram = false,
  email = false,
}: ContactActionsProps) {
  const isDark = variant === "dark";

  const primaryClasses = isDark
    ? "btn bg-white text-azure-700 shadow-soft hover:-translate-y-0.5 hover:shadow-lift"
    : "btn btn-primary";

  const secondaryClasses = isDark
    ? "btn border border-white/45 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20"
    : "btn btn-secondary";

  const instagramLabel = typeof instagram === "string" ? instagram : CTA_TEXT.instagram;
  const emailLabel = typeof email === "string" ? email : CTA_TEXT.mediaKit;

  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
        align === "center" ? "sm:justify-center" : "sm:items-center"
      } ${className}`}
    >
      {/* CTA principal — WhatsApp */}
      <a
        href={buildWhatsappLink(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${primaryClasses}`}
      >
        <Icon name="whatsapp" size={18} />
        <span>{whatsappLabel}</span>
      </a>

      {/* E-mail comercial / mídia kit */}
      {email && (
        <a href={mediaKitMailto} className={secondaryClasses}>
          <Icon name="mail" size={18} />
          <span>{emailLabel}</span>
        </a>
      )}

      {/* Instagram */}
      {instagram && (
        <a
          href={CONTACT.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={secondaryClasses}
        >
          <Icon name="instagram" size={18} />
          <span>{instagramLabel}</span>
        </a>
      )}
    </div>
  );
}
