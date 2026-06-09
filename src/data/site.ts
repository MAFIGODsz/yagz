/**
 * ============================================================================
 *  TEXTOS GERAIS DO SITE — navegação, CTAs e formulário
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * NAVEGAÇÃO (âncoras das seções)
 * -------------------------------------------------------------------------- */
export type NavLink = { label: string; href: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Insights", href: "#insights" },
  { label: "Marcas", href: "#marcas" },
  { label: "Serviços", href: "#servicos" },
  { label: "Gloss", href: "#gloss" },
  { label: "Contato", href: "#contato" },
];

/* ----------------------------------------------------------------------------
 * TEXTOS DOS BOTÕES DE CTA (reaproveitados em todo o site)
 * -------------------------------------------------------------------------- */
export type CtaText = {
  partnership: string;
  mediaKit: string;
  talk: string;
  campaign: string;
  instagram: string;
};

export const CTA_TEXT: CtaText = {
  partnership: "Quero uma parceria",
  mediaKit: "Solicitar mídia kit",
  talk: "Falar com Yá Guayanaz",
  campaign: "Vamos criar uma campanha juntos?",
  instagram: "Ver no Instagram",
};

/** Selo de confiança exibido perto dos CTAs */
export const RESPONSE_TIME = "Resposta em até 24h";

/* ----------------------------------------------------------------------------
 * CTA FINAL (painel)
 * -------------------------------------------------------------------------- */
export type CtaCopy = { eyebrow: string; title: string; description: string };

export const CTA: CtaCopy = {
  eyebrow: "Vamos juntas?",
  title: "Pronta para transformar a sua marca em referência?",
  description:
    "Me conta o seu objetivo. Eu desenho a estratégia, crio o conteúdo e cuido para que cada detalhe comunique valor.",
};

/* ----------------------------------------------------------------------------
 * FORMULÁRIO DE CONTATO
 * -------------------------------------------------------------------------- */
export type FormCopy = {
  eyebrow: string;
  title: string;
  description: string;
  reassurance: string;
};

export const FORM: FormCopy = {
  eyebrow: "Fale comigo",
  title: "Vamos tirar a sua ideia do papel",
  description:
    "Conte um pouco sobre a sua marca e o seu objetivo. Eu retorno com uma proposta sob medida — e, se preferir agilidade, é só chamar no WhatsApp.",
  reassurance:
    "Cada parceria começa com uma conversa. Sem compromisso: me escreva e eu te respondo pessoalmente.",
};
