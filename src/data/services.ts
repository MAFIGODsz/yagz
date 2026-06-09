/**
 * ============================================================================
 *  SERVIÇOS E FORMATOS DE PARCERIA
 * ============================================================================
 */

/** Ícones disponíveis (ver src/components/ui/Icon.tsx) */
export type ServiceIcon =
  | "content"
  | "campaign"
  | "branding"
  | "consulting"
  | "course"
  | "positioning";

export type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const SERVICES: Service[] = [
  {
    title: "Criação de Conteúdo",
    description:
      "Reels, fotos e vídeos editoriais com a sua cara. Do roteiro à entrega — conteúdo pensado para gerar conexão.",
    icon: "content",
  },
  {
    title: "Publicidade & Campanhas",
    description:
      "Lançamentos e ações publicitárias com narrativa que desperta desejo e leva o público à ação.",
    icon: "campaign",
  },
  {
    title: "Branding & Posicionamento",
    description:
      "Construo a imagem da sua marca para que ela seja lembrada pelos motivos certos.",
    icon: "branding",
  },
  {
    title: "Consultoria Personalizada",
    description:
      "Diagnóstico das suas redes e um plano de ação sob medida para crescer com direção.",
    icon: "consulting",
  },
  {
    title: "Cursos de Redes Sociais",
    description:
      "Formação prática para quem quer profissionalizar a presença digital e viver de conteúdo.",
    icon: "course",
  },
  {
    title: "Posicionamento Digital",
    description:
      "Autoridade e percepção de valor: a sua mensagem certa, comunicada em todos os pontos de contato.",
    icon: "positioning",
  },
];

/** Formatos & entregáveis em destaque (chips abaixo dos serviços) */
export const PARTNERSHIP_FORMATS: string[] = [
  "Publicidade",
  "Reels",
  "Stories",
  "Campanhas",
  "UGC",
  "Consultoria",
  "Cursos",
  "Branding",
  "Embaixadora de marca",
  "Permuta",
];
