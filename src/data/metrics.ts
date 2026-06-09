/**
 * ============================================================================
 *  INSIGHTS & DESEMPENHO
 * ============================================================================
 *  ⚠️ PLACEHOLDERS — substitua pelos números reais dos relatórios das plataformas.
 *  Nada aqui é um dado definitivo: use "+000k", "00%", tags ou `updating: true`
 *  (selo "Em atualização") até ter os números finais.
 *
 *  Como editar cada card:
 *   - `value`    → número/percentual em destaque (ex.: "+180k", "8,4%")
 *   - `caption`  → contexto curto abaixo do valor
 *   - `tags`     → lista de chips (ex.: nichos) em vez de um número
 *   - `updating` → mostra o selo "Em atualização" quando o dado ainda não existe
 * ============================================================================
 */

export type Insight = {
  label: string;
  value?: string;
  caption: string;
  tags?: string[];
  updating?: boolean;
  /** observação opcional exibida em um popup (ícone "!") ao lado da caption */
  info?: string;
};

export const INSIGHTS: Insight[] = [
  { label: "Seguidores", value: "32,6k", caption: "Comunidade ativa e fiel" },
  { label: "Alcance mensal", value: "2,2M", caption: "Contas alcançadas por mês" },
  { label: "Visualizações em Reels", value: "15,6k", caption: "Média por vídeo" },
  {
    label: "Taxa de engajamento",
    value: "4,3%",
    caption: "Acima da média do nicho",
    info: "A taxa pode variar conforme formato, campanha e potencial de viralização dos conteúdos.",
  },
  { label: "Público predominante", value: "65,4%", caption: "Mulheres · 18–34 anos" },
  {
    label: "Principais cidades",
    caption: "Principais praças de audiência",
    tags: [
      "Juiz de Fora",
      "Rio de Janeiro",
      "Bicas",
      "São João Nepomuceno",
      "Palma",
      "Mar de Espanha",
      "Maripá de Minas",
      "Pequeri",
      "Leopoldina",
    ],
  },
  {
    label: "Nichos de melhor performance",
    caption: "Onde o conteúdo mais converte",
    tags: ["Beleza", "Lifestyle", "Moda", "Rotina", "Fitness"],
  },
];

/** Observação elegante exibida abaixo dos cards de insights */
export const INSIGHTS_NOTE =
  "Dados atualizados periodicamente com base nos relatórios das plataformas.";
