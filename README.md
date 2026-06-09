# Yá Guayanaz — Media Kit & Portfólio

Site de portfólio/media kit premium para a influenciadora digital **Yá Guayanaz**.
Construído com **Next.js 15 + TypeScript + Tailwind CSS**, com identidade visual
delicada e estratégica em tons de azul claro, pérola e detalhes iridescentes
inspirados em asas de borboleta.

---

## 🚀 Como rodar

```bash
npm install      # instala as dependências (já feito)
npm run dev      # ambiente de desenvolvimento → http://localhost:3000
npm run build    # build de produção
npm run start    # roda o build de produção
```

---

## ✍️ Como editar o conteúdo (o que você mais vai usar)

**Todo o conteúdo está organizado por domínio em `src/data/` — edite o arquivo
do tema que quer mudar, sem mexer no layout:**

| Arquivo | O que contém |
| --- | --- |
| `src/data/profile.ts` | `IMAGES` (fotos), `PROFILE` (hero) e `ABOUT` (Sobre mim) |
| `src/data/metrics.ts` | `INSIGHTS` — cards de "Insights & Desempenho" ⚠️ placeholders |
| `src/data/brands.ts` | `FEATURED_BRANDS` (destaque) e `OTHER_BRANDS` (lista) |
| `src/data/services.ts` | `SERVICES` e `PARTNERSHIP_FORMATS` |
| `src/data/gloss.ts` | `GLOSS` — projeto autoral do gloss KÊMI |
| `src/data/socialLinks.ts` | `CONTACT` (**⚠️ atualizar**), links e `WHATSAPP_MESSAGES` |
| `src/data/site.ts` | `NAV_LINKS`, `CTA_TEXT`, `CTA`, `FORM`, `RESPONSE_TIME` |

> Dica: cada arquivo exporta **tipos TypeScript** próprios, então o editor avisa
> se você esquecer um campo. Pode importar de `@/data` (tudo) ou do arquivo do
> domínio. Os botões de contato usam o componente reutilizável `ContactActions`
> e, no mobile, a barra fixa `MobileCtaBar` aparece ao rolar.

---

## 🖼️ Como trocar as fotos

1. Coloque as fotos em `public/images/ya-guayanaz/`
2. Aponte os caminhos no objeto `IMAGES` em `src/data/profile.ts`

Enquanto não houver foto, aparece um **placeholder elegante** com a borboleta.
Detalhes e sugestões de enquadramento: `public/images/ya-guayanaz/README.md`.

| Chave       | Onde aparece          | Foto sugerida (do material enviado) |
| ----------- | --------------------- | ----------------------------------- |
| `hero`      | Topo                  | Look social de corpo inteiro        |
| `about`     | Sobre mim             | Retrato de beleza                   |
| `gloss`     | Seção do gloss        | Foto com o gloss KÊMI na mão        |
| `authority` | (reserva)             | Foto fitness/lifestyle              |

## 🏷️ Como adicionar logos das marcas

Coloque os logos em `public/images/ya-guayanaz/brands/` e adicione o campo
`logo` na marca em `src/data/brands.ts`. Veja `brands/README.md`.

---

## 🎨 Design System

A identidade visual é controlada por **tokens**:

- **Cores, gradientes e variáveis** → `src/app/globals.css` (bloco `:root`)
- **Escala tipográfica, sombras, animações** → `tailwind.config.ts`

Mude uma variável de cor em `globals.css` e o site inteiro acompanha.

**Fontes:** Cormorant Garamond (títulos, elegante e feminina) + Manrope (corpo,
moderna e legível) — carregadas via `next/font` (performáticas, sem layout shift).

**Classes utilitárias prontas:** `.btn` + `.btn-primary`/`.btn-secondary`,
`.card`, `.card-hover`, `.glass`, `.glass-card`, `.eyebrow`, `.section`,
`.container-px`, `.text-gradient`, `.hairline`.

---

## 🧩 Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx          # fontes, metadados/SEO, navbar + footer, skip-link
│   ├── page.tsx            # monta as seções da home
│   └── globals.css         # design tokens + classes reutilizáveis
├── components/
│   ├── ui/                 # Button, Figure, Butterfly, Icon, Reveal, ContactActions…
│   ├── layout/             # Navbar, Footer, MobileCtaBar
│   └── sections/           # Hero, About, Insights, Brands, Services, GlossProject, PartnershipCTA, ContactForm
└── data/                   # ⭐ conteúdo editável, organizado por domínio
    ├── index.ts            # barril: re-exporta tudo (import via "@/data")
    ├── profile.ts          # fotos, hero e "Sobre mim"
    ├── metrics.ts          # insights & desempenho
    ├── brands.ts           # marcas
    ├── services.ts         # serviços e formatos
    ├── gloss.ts            # projeto do gloss
    ├── socialLinks.ts      # WhatsApp / Instagram / e-mail
    └── site.ts             # navegação, CTAs e formulário
```

---

## ♿ Acessibilidade & Performance

- Contraste de texto validado em AA (≥ 4.5:1)
- Foco visível no teclado, skip-link, landmarks semânticos e `alt` descritivo
- `prefers-reduced-motion` respeitado (anima só quem permite movimento)
- Sem scroll horizontal no mobile; layout responsivo (375 / 768 / 1024 / 1440)
- Imagens otimizadas (`next/image`, AVIF/WebP, lazy load) — página 100% estática

---

> ⚠️ **Antes de publicar:** atualize `CONTACT` em `src/data/socialLinks.ts`
> (WhatsApp/Instagram/e-mail) e os números em `INSIGHTS` em `src/data/metrics.ts`.
