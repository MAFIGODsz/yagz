import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Butterfly } from "@/components/ui/Butterfly";
import { InfoTooltip } from "@/components/ui/InfoTooltip";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WingsBackdrop } from "@/components/ui/WingsBackdrop";
import { InstagramProofs } from "./InstagramProofs";
import { INSIGHTS, INSIGHTS_NOTE, type Insight } from "@/data/metrics";

function InsightCard({
  insight,
  featured = false,
}: {
  insight: Insight;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl p-6 transition-all duration-500 ease-soft-out ${
        featured
          ? "card-hover border border-azure-200 bg-gradient-to-br from-white to-azure-50 shadow-card"
          : "glass-card card-hover"
      }`}
    >
      {featured && (
        <>
          <Butterfly
            variant="filled"
            className="butterfly-anim pointer-events-none absolute -right-5 -top-5 h-24 w-24 opacity-40"
          />
          {/* brilho perolado + onda curva sutil (só desktop) */}
          <div className="pointer-events-none absolute -bottom-16 -left-10 hidden h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(167,216,242,0.35),transparent_70%)] blur-2xl lg:block" />
          <svg
            aria-hidden="true"
            viewBox="0 0 400 200"
            className="pointer-events-none absolute inset-x-0 bottom-0 hidden w-full opacity-[0.18] lg:block"
            fill="none"
          >
            <path
              d="M0 140 C 120 90 280 190 400 120"
              stroke="var(--azure-400)"
              strokeWidth="1.5"
            />
            <path
              d="M0 165 C 130 120 270 210 400 150"
              stroke="var(--periwinkle)"
              strokeWidth="1.5"
            />
          </svg>
        </>
      )}

      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-muted">
        {insight.label}
      </p>

      {insight.updating ? (
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-mist px-3 py-1.5 text-sm font-semibold text-azure-700">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-azure-500" />
          </span>
          Em atualização
        </span>
      ) : insight.tags ? (
        <div className="flex flex-wrap gap-1.5">
          {insight.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex w-fit shrink-0 items-center whitespace-nowrap rounded-full bg-iridescent font-semibold text-ink ring-1 ring-white/50 ${
                insight.tags!.length > 6
                  ? "px-2.5 py-0.5 text-[0.8rem] lg:px-3.5 lg:py-1 lg:text-sm"
                  : "px-4 py-1.5 text-sm"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : (
        <AnimatedCounter
          value={insight.value ?? ""}
          className={`font-display font-semibold tabular-nums text-gradient ${
            featured ? "text-6xl sm:text-7xl" : "text-4xl sm:text-[2.75rem]"
          }`}
        />
      )}

      {/* Card destacado (Seguidores): frase de apoio + mini indicadores.
          Só no desktop (lg:) — no mobile o card permanece limpo. */}
      {featured && (
        <>
          <p className="relative mt-3 hidden max-w-sm text-[0.95rem] leading-relaxed text-ink-soft lg:block">
            Uma audiência construída com presença, confiança e conexão diária.
          </p>
          <ul className="relative mt-5 hidden flex-col gap-2.5 lg:flex">
            {[
              "Público real",
              "Audiência local + regional",
              "Comunidade engajada",
            ].map((item) => (
              <li
                key={item}
                className="flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/65 px-3.5 py-1.5 text-sm font-medium text-azure-700 shadow-soft backdrop-blur transition-transform duration-500 ease-soft-out hover:translate-x-1"
              >
                <Butterfly
                  variant="filled"
                  fillIntensity={0.6}
                  className="h-3.5 w-3.5 shrink-0"
                />
                {item}
              </li>
            ))}
          </ul>
        </>
      )}

      <p className="relative mt-auto pt-1 text-sm leading-relaxed text-ink-muted">
        {insight.caption}
        {insight.info && (
          <InfoTooltip
            text={insight.info}
            label={`Ver observação sobre ${insight.label.toLowerCase()}`}
          />
        )}
      </p>
    </article>
  );
}

export function Insights() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-title"
      className="section relative overflow-hidden bg-offwhite"
    >
      <WingsBackdrop opacity={0.3} />
      <div className="container-px">
        <SectionHeading
          id="insights-title"
          index="01"
          eyebrow="Insights & Desempenho"
          title="Presença digital que gera impacto"
          description="Um retrato da audiência e do alcance que a sua marca acessa em cada campanha."
        />

        {/* Bento: métrica principal em destaque + demais ao redor */}
        <ul className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 md:auto-rows-[minmax(11rem,1fr)]">
          {INSIGHTS.map((insight, i) => {
            const span =
              i === 0
                ? "col-span-2 md:col-span-2 md:row-span-2"
                : insight.tags
                  ? "md:col-span-2"
                  : "";
            return (
              <Reveal
                as="li"
                key={insight.label}
                delay={(i % 4) * 60}
                className={span}
              >
                <InsightCard insight={insight} featured={i === 0} />
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-10 flex items-center justify-center gap-2.5 text-center">
          <Butterfly className="h-4 w-4 shrink-0 opacity-70" />
          <p className="text-sm text-ink-muted">{INSIGHTS_NOTE}</p>
        </Reveal>

        {/* Subseção: prints reais do Instagram (prova social) */}
        <InstagramProofs />
      </div>
    </section>
  );
}
