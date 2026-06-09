import { Butterfly } from "@/components/ui/Butterfly";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { IMAGES } from "@/data/profile";
import { GLOSS } from "@/data/gloss";

export function GlossProject() {
  return (
    <section id="gloss" aria-labelledby="gloss-title" className="section">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-iridescent shadow-card">
          {/* brilho perolado */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_0%,rgba(255,255,255,0.7),transparent_55%)]" />
          <Butterfly
            className="butterfly-anim pointer-events-none absolute right-8 top-8 h-16 w-16 opacity-40"
            style={{ animationDelay: "2s", animationDuration: "11s" }}
          />

          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-14 lg:p-16">
            {/* Texto */}
            <div className="flex flex-col gap-5">
              <span className="eyebrow !text-ink">
                <Butterfly variant="filled" className="h-5 w-5" />
                {GLOSS.eyebrow}
              </span>

              <Reveal>
                <p className="font-display text-lg italic text-azure-700">
                  {GLOSS.brandName}
                </p>
                <h2 id="gloss-title" className="mt-1 text-display-md">
                  {GLOSS.title}
                </h2>
              </Reveal>

              <Reveal delay={80}>
                <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                  {GLOSS.description}
                </p>
              </Reveal>

              <Reveal delay={140}>
                <ul className="mt-2 flex flex-col gap-3">
                  {GLOSS.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-ink-soft">
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white/80 text-azure-600 shadow-soft">
                        <Icon name="check" size={16} />
                      </span>
                      <span className="text-sm sm:text-base">{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Imagem do produto */}
            <Reveal delay={100} variant="scale" className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="rounded-[2rem] bg-gradient-to-br from-white via-azure-50 to-azure-100 p-2 shadow-lift">
                <Figure
                  src={IMAGES.gloss}
                  alt="Yá Guayanaz segurando o gloss labial KÊMI, sua marca autoral de beleza"
                  aspect="aspect-[3/4]"
                  sizes="(max-width: 1024px) 80vw, 40vw"
                  placeholderLabel="Foto do gloss · ya-gloss.jpg"
                  className="rounded-[1.6rem] border border-white/80"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
