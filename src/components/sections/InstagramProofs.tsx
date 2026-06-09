import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import {
  INSTAGRAM_PROOFS,
  INSTAGRAM_PROOFS_COPY,
  type InstagramProof,
} from "@/data/instagramProofs";

function ProofCard({ proof }: { proof: InstagramProof }) {
  const alt =
    proof.alt ??
    `${proof.title} — print real dos insights do Instagram da Yá Guayanaz (${proof.metricType})`;

  return (
    <article
      className={`card card-hover flex h-full flex-col !p-3 ${
        proof.featured ? "ring-iridescent" : ""
      }`}
    >
      {/* Área visual com altura PADRONIZADA em todos os cards (mesma proporção)
          para que os blocos de texto fiquem perfeitamente alinhados na linha.
          Como os prints têm proporções quase idênticas (~0.51–0.52), usamos
          object-cover ancorado no topo (object-top): o print preenche a box
          inteira e, quando necessário, corta só uma fração na parte inferior. */}
      <div className="relative flex aspect-[13/25] items-center justify-center overflow-hidden rounded-xl bg-azure-soft">
        {proof.image ? (
          <Image
            src={proof.image}
            alt={alt}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 72vw, 288px"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div
            role="img"
            aria-label={`Espaço reservado para ${alt}`}
            className="flex h-full w-full flex-col items-center justify-center gap-3 px-4 text-center"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/70 text-azure-600 shadow-soft">
              <Icon name="instagram" size={22} />
            </span>
            <span className="text-eyebrow font-sans font-semibold uppercase text-azure-700">
              {proof.metricType}
            </span>
            <span className="text-xs text-ink-muted">print em breve</span>
          </div>
        )}

        {/* Selo discreto "Dados reais do Instagram" */}
        <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-2.5 py-1 text-[0.7rem] font-semibold text-azure-700 shadow-soft backdrop-blur">
          <Icon name="instagram" size={13} />
          {INSTAGRAM_PROOFS_COPY.badge}
        </span>
      </div>

      {/* Texto */}
      <div className="flex flex-1 flex-col gap-1.5 px-1.5 pb-1 pt-4">
        <span className="w-fit rounded-full bg-mist px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-wide text-azure-700">
          {proof.metricType}
        </span>
        <h4 className="font-display text-lg font-medium text-ink">{proof.title}</h4>
        <p className="text-sm leading-relaxed text-ink-muted">{proof.description}</p>
      </div>
    </article>
  );
}

export function InstagramProofs() {
  return (
    <div className="mt-20 lg:mt-24">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
        <span className="eyebrow">
          <span className="h-px w-6 bg-azure-300" aria-hidden="true" />
          {INSTAGRAM_PROOFS_COPY.eyebrow}
        </span>
        <h3 className="text-display-md">{INSTAGRAM_PROOFS_COPY.title}</h3>
        <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
          {INSTAGRAM_PROOFS_COPY.intro}
        </p>
      </Reveal>

      {/* Carrossel no mobile → cards confortáveis em 3+2 centralizado no
          desktop médio → em telas grandes (2xl) a lista "rompe" o container
          (full-bleed) e exibe os 5 cards numa única linha, com o conteúdo
          capado/centralizado em ~1520px para não espremer os prints. */}
      <Reveal className="mt-12">
        <ul
          tabIndex={0}
          aria-label="Prints reais de desempenho no Instagram"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto py-2 pb-4 focus-visible:outline-none md:mx-auto md:max-w-[60rem] md:flex-wrap md:justify-center md:gap-5 md:overflow-visible 2xl:grid 2xl:max-w-none 2xl:grid-cols-5 2xl:ml-[calc(50%-50vw)] 2xl:mr-[calc(50%-50vw)] 2xl:px-[max(2rem,calc((100vw-1520px)/2))] [scrollbar-width:thin]"
        >
          {INSTAGRAM_PROOFS.map((proof) => (
            <li
              key={proof.title}
              className="shrink-0 basis-[72%] snap-start sm:basis-[46%] md:w-72 md:basis-72 md:shrink-0 2xl:w-auto 2xl:basis-auto"
            >
              <ProofCard proof={proof} />
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
