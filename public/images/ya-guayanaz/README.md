# Imagens da Yá Guayanaz

Coloque aqui as fotos reais da Yá. O site já está preparado para troca fácil:
enquanto um arquivo não existir, é exibido um **placeholder elegante** com a
borboleta da marca.

## Como trocar uma imagem (2 passos)

1. **Coloque o arquivo** nesta pasta (`/public/images/ya-guayanaz/`).
   Use `.jpg`, `.webp` ou `.png`. Recomendado: largura ≥ 1200px, otimizada.
2. **Aponte o caminho** em `src/data/profile.ts`, no objeto `IMAGES`:

```ts
export const IMAGES = {
  hero:      "/images/ya-guayanaz/ya-hero.jpg",
  about:     "/images/ya-guayanaz/ya-about.jpg",
  gloss:     "/images/ya-guayanaz/ya-gloss.jpg",
  authority: "/images/ya-guayanaz/ya-fitness.jpg",
};
```

## Fotos sugeridas (com base no material enviado)

| Chave em `IMAGES` | Onde aparece            | Sugestão de foto                              | Proporção ideal |
| ----------------- | ----------------------- | --------------------------------------------- | --------------- |
| `hero`            | Hero (topo)             | Look social/editorial de corpo inteiro        | 4:5 (vertical)  |
| `about`           | Seção "Sobre mim"       | Retrato de beleza, olhar marcante             | 4:5 (vertical)  |
| `gloss`           | Seção do gloss (KÊMI)   | Foto segurando o produto KÊMI                 | 4:5 (vertical)  |
| `authority`       | (reserva p/ destaque)   | Foto fitness/lifestyle                        | 4:5 (vertical)  |

> As imagens são exibidas com `object-cover`, mantendo a proporção **sem
> distorção** e com recorte elegante e responsivo. Use fotos verticais para o
> melhor enquadramento.
