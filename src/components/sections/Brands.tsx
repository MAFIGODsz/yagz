import { BrandCard } from "@/components/ui/BrandCard";
import { ContactActions } from "@/components/ui/ContactActions";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURED_BRANDS, OTHER_BRANDS } from "@/data/brands";

export function Brands() {
  return (
    <section id="marcas" aria-labelledby="marcas-title" className="section">
      <div className="container-px">
        <SectionHeading
          id="marcas-title"
          index="02"
          eyebrow="Marcas atendidas"
          title="Marcas que confiaram — e voltaram"
          description="De grandes nomes a negócios que viraram referência local. Cada parceria, uma relação de confiança e resultado."
        />

        {/* 12 principais — vitrine premium de cards clicáveis (logo + nome),
            com entrada em cascata (fade + subida + blur) coluna a coluna */}
        <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-3">
          {FEATURED_BRANDS.map((brand, i) => (
            <Reveal as="li" key={brand.name} variant="blur" delay={(i % 4) * 90}>
              <BrandCard brand={brand} />
            </Reveal>
          ))}
        </ul>

        {/* Outras marcas — dentro de uma box, com chips */}
        <Reveal className="mt-16">
          <div className="ring-iridescent overflow-hidden rounded-3xl p-8 shadow-soft sm:p-10">
            <h3 className="text-center text-sm font-semibold uppercase tracking-eyebrow text-ink-muted">
              E muitas outras histórias de marca
            </h3>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {OTHER_BRANDS.map((name) => (
                <li
                  key={name}
                  className="rounded-full border border-azure-100 bg-white px-4 py-2 text-sm text-ink-soft shadow-soft transition-all duration-500 ease-soft-out hover:-translate-y-0.5 hover:border-azure-300 hover:text-ink"
                >
                  {name}
                </li>
              ))}
              <li className="rounded-full bg-iridescent px-4 py-2 text-sm font-semibold text-azure-700">
                + entre outras
              </li>
            </ul>
          </div>
        </Reveal>

        {/* CTA intermediário — convite à parceria */}
        <Reveal className="mt-14">
          <div className="relative overflow-hidden rounded-3xl border border-azure-200 bg-gradient-to-br from-white to-azure-50 p-8 text-center shadow-card sm:p-10">
            <h3 className="font-display text-2xl text-ink sm:text-3xl">
              Sua marca pode ser a próxima.
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-ink-soft">
              Vamos criar uma campanha juntos? Conte o seu objetivo e receba uma
              proposta sob medida.
            </p>
            <ContactActions align="center" className="mt-6 justify-center" email />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
