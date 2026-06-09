# Logos das marcas

Coloque aqui os logos das marcas atendidas (recomendado **.png com fundo
transparente** ou **.svg**).

## Como adicionar um logo

1. Salve o arquivo nesta pasta, ex.: `growth-suplementos.png`.
2. Em `src/data/brands.ts`, preencha o campo `logo` da marca:

```ts
{
  name: "Growth Suplementos",
  logo: "/images/brands/growth-suplementos.png",
  featured: true,
}
```

- Com `logo`, o card mostra a imagem **centralizada, sem distorção**
  (`object-contain`), com altura de card consistente.
- Sem `logo`, o card mostra o **nome** da marca com tipografia serifada.

> Dica: para um "mural de marcas" uniforme, exporte os logos com proporções
> e margens parecidas. A altura é limitada automaticamente; a largura se ajusta.
