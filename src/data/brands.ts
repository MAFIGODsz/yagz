/**
 * ============================================================================
 *  MARCAS ATENDIDAS
 * ============================================================================
 *  As principais ganham destaque (vitrine em cards clicáveis com logo + nome);
 *  as demais ficam em um grid secundário mais discreto (chips).
 *
 *  Para inserir o LOGO de uma marca:
 *   1. coloque o arquivo em  /public/images/brands/  (ex.: growth-suplementos.png)
 *   2. preencha o campo `logo`. Os logos são exibidos com object-contain
 *      (sem distorção, sem corte) dentro de um tile quadrado padronizado.
 *
 *  Para tornar o card CLICÁVEL (abre o Instagram da marca em nova aba):
 *   - preencha `instagramUrl` com o link real, ex.:
 *       instagramUrl: "https://www.instagram.com/growthsuplementos/"
 *   - enquanto for "#" (ou vazio), o card aparece premium mas NÃO navega
 *     (o ícone de Instagram no hover só surge quando há link real).
 *
 *  Exemplo completo:
 *   {
 *     name: "Growth Suplementos",
 *     logo: "/images/brands/growth-suplementos.png",
 *     instagramUrl: "https://www.instagram.com/growthsuplementos/",
 *     featured: true,
 *   }
 * ============================================================================
 */

export type Brand = {
  name: string;
  /** caminho opcional do logo, ex.: "/images/brands/dove.png" */
  logo?: string;
  /** link do Instagram da marca; "#" ou vazio = card não navega (ainda) */
  instagramUrl?: string;
  /** marca em destaque (vitrine principal) */
  featured?: boolean;
};

/** As 12 marcas em destaque (vitrine principal, com mais peso visual) */
export const FEATURED_BRANDS: Brand[] = [
  { name: "Growth Suplementos", logo: "/images/brands/growth-suplementos.jpg", instagramUrl: "https://www.instagram.com/growthsupplements/", featured: true },
  { name: "Hey!Mu", logo: "/images/brands/heymu.png", instagramUrl: "https://www.instagram.com/heymubrasil/", featured: true },
  { name: "Fit Urban", logo: "/images/brands/fit-urban.png", instagramUrl: "https://www.instagram.com/fiturbanoficial/", featured: true },
  { name: "Kaisan", logo: "/images/brands/kaisan.jpg", instagramUrl: "https://www.instagram.com/kaisanbrasil/", featured: true },
  { name: "Dove", logo: "/images/brands/dove.png", instagramUrl: "https://www.instagram.com/dovebrasil/", featured: true },
  { name: "Cintas Glamour", logo: "/images/brands/cintas-glamour.jpg", instagramUrl: "https://www.instagram.com/cintasglamour/", featured: true },
  { name: "Toda UP", logo: "/images/brands/toda-up.jpg", instagramUrl: "https://www.instagram.com/fitaup/", featured: true },
  { name: "Instituto Kêmi", logo: "/images/brands/instituto-kemi.jpg", instagramUrl: "https://www.instagram.com/institutokemi/", featured: true },
  { name: "Kêmi Cosmetics", logo: "/images/brands/kemi-cosmetics.jpg", instagramUrl: "https://www.instagram.com/kemi.cosmetics/", featured: true },
  { name: "Gold Spell", logo: "/images/brands/gold-spell.jpg", instagramUrl: "https://www.instagram.com/goldspellcosmeticos/", featured: true },
  { name: "Calebito Sorveteria", logo: "/images/brands/calebito-sorvetes.jpg", instagramUrl: "https://www.instagram.com/calebitosorveteria/", featured: true },
  { name: "Power Academia", logo: "/images/brands/power-academia.jpg", instagramUrl: "https://www.instagram.com/powerbicas/", featured: true },
];

/** Outras marcas (exibidas como chips) */
export const OTHER_BRANDS: string[] = [
  "Ótica Avenida",
  "Ana Paula Siqueira Dentista",
  "Santo Antônio Supermercado",
  "Açaí Point",
  "Renata Almeida Confeitaria",
  "Milena Araújo Nail Design",
  "Zampi Papelaria e Decor",
  "Studio Juliana Perenciolo",
  "Loja Sonho Meu",
];
