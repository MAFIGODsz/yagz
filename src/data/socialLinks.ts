/**
 * ============================================================================
 *  LINKS DE CONTATO — WhatsApp, Instagram e e-mail
 * ============================================================================
 *  ⚠️ ATUALIZE `CONTACT` ANTES DE PUBLICAR.
 *  Os helpers geram os links usados pelos botões de CTA em todo o site.
 * ============================================================================
 */

export type SocialContact = {
  instagramHandle: string;
  instagramUrl: string;
  /** Número internacional, somente dígitos: 55 + DDD + número */
  whatsappNumber: string;
  /** Mensagem padrão pré-preenchida no WhatsApp */
  whatsappMessage: string;
  email: string;
  /** CNPJ da empresa (exibido discretamente no rodapé) */
  cnpj: string;
};

export const CONTACT: SocialContact = {
  instagramHandle: "@yasmin.guayanaz",
  instagramUrl: "https://instagram.com/yasmin.guayanaz",
  whatsappNumber: "5532987205316",
  whatsappMessage:
    "Olá, Yá! Vi seu media kit e tenho interesse em uma parceria comercial.",
  email: "contatocomercial.yaguayanaz@gmail.com",
  cnpj: "66.874.537/0001-99",
};

/** Gera um link de WhatsApp com mensagem personalizável */
export const buildWhatsappLink = (message: string = CONTACT.whatsappMessage) =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

/** Link padrão de WhatsApp (mensagem de parceria) */
export const whatsappLink = buildWhatsappLink();

/** Gera um link de e-mail (mailto) com assunto e corpo */
export const buildMailto = (subject: string, body: string) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

/** Link de e-mail comercial para solicitar o mídia kit */
export const mediaKitMailto = buildMailto(
  "Solicitação de mídia kit — [sua marca]",
  "Olá, Yá! Sou da [marca] e gostaria de receber o seu mídia kit para avaliarmos uma parceria.",
);

/** Mensagens de WhatsApp por contexto (edite à vontade) */
export const WHATSAPP_MESSAGES = {
  partnership: CONTACT.whatsappMessage,
  campaign:
    "Oi, Yá! Quero criar uma campanha com você. Pode me contar como funciona?",
  mediaKit: "Oi, Yá! Pode me enviar o seu mídia kit, por favor?",
} as const;
