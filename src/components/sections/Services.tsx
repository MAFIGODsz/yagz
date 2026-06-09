import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { WingsBackdrop } from "@/components/ui/WingsBackdrop";
import { PARTNERSHIP_FORMATS, SERVICES } from "@/data/services";

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-title"
      className="section relative overflow-hidden bg-offwhite"
    >
      <WingsBackdrop opacity={0.3} />
      <div className="container-px">
        <SectionHeading
          id="servicos-title"
          index="03"
          eyebrow="Serviços & Parcerias"
          title="Como eu impulsiono a sua marca"
          description="Do conteúdo pontual à estratégia completa. Formatos que se adaptam ao seu objetivo — e ao seu momento."
        />

        {/* Grid de serviços (cards editoriais numerados) */}
        <ul className="mt-16 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 3) * 70}>
              <TiltCard className="h-full" max={5}>
                <article className="card card-hover group relative h-full overflow-hidden">
                  {/* faixa gradiente que cresce no hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-azure-300 via-periwinkle to-azure-400 transition-transform duration-500 ease-soft-out group-hover:scale-x-100"
                  />

                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-iridescent text-ink ring-1 ring-white/60 transition-transform duration-500 ease-soft-out group-hover:scale-105">
                      <Icon name={service.icon} size={24} />
                    </span>
                    <span className="font-display text-3xl italic text-azure-200 transition-colors duration-500 ease-soft-out group-hover:text-azure-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-medium text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </ul>

        {/* Formatos & entregáveis */}
        <Reveal className="mt-12 flex flex-col items-center gap-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-eyebrow text-ink-muted">
            Formatos &amp; entregáveis
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {PARTNERSHIP_FORMATS.map((format) => (
              <li
                key={format}
                className="rounded-full border border-azure-200 bg-white/70 px-5 py-2.5 text-sm text-ink-soft shadow-soft backdrop-blur transition-all duration-500 ease-soft-out hover:-translate-y-0.5 hover:border-azure-300 hover:text-ink"
              >
                {format}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
