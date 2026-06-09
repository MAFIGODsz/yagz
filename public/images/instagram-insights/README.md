# Prints de insights do Instagram

Coloque aqui os **prints reais** dos insights do Instagram da Yá (alcance,
impressões, Reels, Stories, perfil, engajamento). Prints verticais de celular
funcionam perfeitamente — eles aparecem inteiros, sem distorção, sobre um
fundo perolado elegante.

## Como adicionar um print (2 passos)

1. **Coloque o arquivo** nesta pasta. Use `.jpg`, `.png` ou `.webp`.
   Sugestão de nome: `alcance-campanha-01.jpg`, `reels-01.jpg`, etc.
2. **Aponte o caminho** em `src/data/instagramProofs.ts`, no campo `image`:

```ts
export const INSTAGRAM_PROOFS = [
  {
    title: "Alcance em campanha",
    description: "Print real de desempenho obtido em ação no Instagram.",
    image: "/images/instagram-insights/alcance-campanha-01.jpg",
    metricType: "Alcance",
    featured: true,
  },
  // ...adicione quantos quiser
];
```

Enquanto `image` for `null`, o card mostra um **placeholder elegante** que
reserva o espaço.

## Boas práticas
- ⚠️ **Não edite os números** dos prints nem invente métricas — use os prints
  originais e textos neutros ("print real de desempenho", "resultado registrado
  em campanha").
- Prefira prints nítidos e legíveis; recorte tarjas pessoais se quiser.
- `metricType` aceita: `Alcance`, `Impressões`, `Reels`, `Stories`, `Perfil`,
  `Engajamento`.
