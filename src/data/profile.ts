/**
 * ============================================================================
 *  PERFIL DA YÁ — informações principais, hero e "Sobre mim"
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * IMAGENS  (mapa central de fotos — troca fácil)
 * Coloque o caminho da foto real (ex.: "/images/ya-guayanaz/ya-hero.jpg").
 * Deixe `null` para exibir o placeholder premium automático.
 * -------------------------------------------------------------------------- */
export type SiteImages = {
  /** Hero — sugestão: look social/editorial de corpo inteiro */
  hero: string | null;
  /** Sobre mim — sugestão: retrato de beleza */
  about: string | null;
  /** Gloss — sugestão: foto com o produto KÊMI na mão */
  gloss: string | null;
  /** Bloco de autoridade — sugestão: foto fitness/lifestyle */
  authority: string | null;
};

export const IMAGES: SiteImages = {
  hero: "/images/ya-guayanaz/ya-hero.jpg",
  about: "/images/ya-guayanaz/ya-about.jpg",
  gloss: "/images/ya-guayanaz/ya-gloss.jpg",
  authority: null, // ex.: "/images/ya-guayanaz/ya-fitness.jpg"
};

/* ----------------------------------------------------------------------------
 * PERFIL / HERO
 * -------------------------------------------------------------------------- */
export type Profile = {
  name: string;
  role: string;
  tagline: string;
  heroEyebrow: string;
  impactPhrase: string;
  heroDescription: string;
};

export const PROFILE: Profile = {
  name: "Yá Guayanaz",
  role: "Criadora de Conteúdo · Estrategista Digital",
  tagline: "Conexões que transformam marcas em referências.",
  heroEyebrow: "Media Kit · Parcerias 2025",
  impactPhrase:
    "Mais do que criar conteúdo, eu construo conexões que transformam marcas em referências.",
  heroDescription:
    "Criadora de conteúdo, influenciadora e estrategista digital. Em 6 anos, ajudei mais de 350 marcas a comunicar valor, gerar desejo e vender com estratégia.",
};

/* ----------------------------------------------------------------------------
 * SOBRE MIM
 * -------------------------------------------------------------------------- */
export type Highlight = { value: string; label: string };

export type About = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  highlights: Highlight[];
};

export const ABOUT: About = {
  eyebrow: "Sobre mim",
  title: "Prazer, sou a Yá.",
  paragraphs: [
    "Crio conteúdo, mas penso como estrategista. Cada post, campanha e parceria nasce de uma pergunta: como fazer essa marca ser lembrada e desejada?",
    "Em mais de 6 anos de mercado, foram mais de 350 marcas atendidas — de grandes nomes a negócios locais que viraram referência na sua região.",
    "Também sei o que é construir do zero: criei meu próprio gloss labial, do conceito à prateleira. Por isso entendo os dois lados da parceria — o de quem cria conteúdo e o de quem precisa vender.",
  ],
  highlights: [
    { value: "+6 anos", label: "de mercado digital" },
    { value: "+350", label: "marcas atendidas" },
    { value: "Marca própria", label: "do conceito à prateleira" },
    { value: "Conteúdo", label: "que conecta e converte" },
  ],
};
