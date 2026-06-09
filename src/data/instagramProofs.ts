/**
 * ============================================================================
 *  PROVAS REAIS DO INSTAGRAM (prints de insights)
 * ============================================================================
 *  Comprovações visuais de desempenho na principal rede da Yá.
 *
 *  Como adicionar/trocar um print:
 *   1. Coloque a imagem em `public/images/instagram-insights/`
 *      (prints verticais de celular ficam ótimos — não são distorcidos).
 *   2. Adicione/edite um item em `INSTAGRAM_PROOFS` apontando o `image`.
 *
 *  Enquanto `image` for `null`, aparece um placeholder elegante reservando o
 *  espaço. ⚠️ Não inserir números definitivos aqui — use textos neutros.
 * ============================================================================
 */

/** Tipos de métrica aceitos (exibidos como selo no card) */
export type ProofMetric =
  | "Alcance"
  | "Impressões"
  | "Reels"
  | "Stories"
  | "Perfil"
  | "Seguidores"
  | "Engajamento";

export type InstagramProof = {
  /** título curto do card */
  title: string;
  /** descrição curta e neutra (sem números inventados) */
  description: string;
  /** caminho do print real; `null` exibe placeholder */
  image: string | null;
  /** tipo de métrica do print */
  metricType: ProofMetric;
  /** destaque opcional (ganha borda iridescente) */
  featured?: boolean;
  /** alt text customizado (opcional — há um padrão descritivo) */
  alt?: string;
  /** proporção da box do print (W/H) p/ encaixe perfeito; padrão "3/4" */
  aspect?: string;
};

/** Textos da subseção (edite à vontade) */
export const INSTAGRAM_PROOFS_COPY = {
  eyebrow: "Comprovações reais",
  title: "Resultados comprovados no Instagram",
  intro:
    "Além dos indicadores estratégicos, os resultados também são acompanhados por dados reais extraídos dos insights do Instagram, principal canal de divulgação e relacionamento da Yá Guayanaz.",
  /** selo discreto exibido sobre cada print */
  badge: "Dados reais do Instagram",
} as const;

export const INSTAGRAM_PROOFS: InstagramProof[] = [
  {
    title: "Painel de desempenho",
    description: "Print real de desempenho obtido no último mês pelo Instagram.",
    image: "/images/instagram-insights/painel-desempenho.jpg",
    metricType: "Alcance",
    aspect: "739/1424",
    featured: true,
  },
  {
    title: "Reels em destaque",
    description: "Resultado registrado em campanha de vídeo.",
    image: "/images/instagram-insights/reels-destaque.jpg",
    metricType: "Reels",
    aspect: "591/1153",
  },
  {
    title: "Visão geral do perfil",
    description: "Dados extraídos dos insights do Instagram.",
    image: "/images/instagram-insights/perfil-overview.jpg",
    metricType: "Perfil",
    aspect: "739/1438",
  },
  {
    title: "Engajamento em Stories",
    description: "Print real de desempenho em Stories.",
    image: "/images/instagram-insights/stories-engagement.jpg",
    metricType: "Stories",
    aspect: "591/1136",
  },
  {
    title: "Perfil dos seguidores",
    description:
      "Dados reais sobre gênero e faixa etária da audiência no Instagram.",
    image: "/images/instagram-insights/seguidores-audiencia.jpg",
    metricType: "Seguidores",
    aspect: "739/1438",
  },
];
