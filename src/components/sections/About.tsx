import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Butterfly } from "@/components/ui/Butterfly";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { ABOUT, IMAGES } from "@/data/profile";

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="section relative overflow-hidden">
      <div className="container-px grid items-center gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Imagem secundária */}
        <Reveal variant="scale" className="relative order-1 w-full lg:order-none lg:col-span-1 lg:row-span-2">
          <div className="absolute -inset-6 -z-10 rounded-[2.75rem] bg-iridescent opacity-55 blur-3xl" />
          <div className="rounded-[2rem] bg-gradient-to-tr from-white via-azure-100 to-periwinkle p-2 shadow-card">
            <Figure
              src={IMAGES.about}
              alt="Retrato de Yá Guayanaz com beleza natural e olhar marcante"
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 100vw"
              placeholderLabel="Foto sobre mim · ya-about.jpg"
              className="rounded-[1.6rem] border border-white/70 object-cover"
            />
          </div>
          <Butterfly className="butterfly-anim pointer-events-none absolute -right-4 -top-4 h-14 w-14 opacity-50" />
        </Reveal>

        {/* Texto */}
        <div className="flex flex-col gap-6">
          <Reveal as="span" className="eyebrow">
            <span className="h-px w-6 bg-azure-300" aria-hidden="true" />
            {ABOUT.eyebrow}
          </Reveal>

          <Reveal>
            <h2 id="sobre-title" className="text-display-md">
              {ABOUT.title}
            </h2>
          </Reveal>

          <div className="flex flex-col gap-4">
            {ABOUT.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <p className="text-base leading-relaxed text-ink-soft sm:text-[1.05rem]">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Cards de autoridade */}
          <Reveal delay={120}>
            <ul className="mt-2 grid grid-cols-2 gap-3 sm:gap-4">
              {ABOUT.highlights.map((h) => (
                <li key={h.label} className="card card-hover !p-5">
                  <AnimatedCounter
                    value={h.value}
                    className="font-display text-2xl font-semibold tabular-nums text-gradient"
                  />
                  <p className="mt-1 text-sm text-ink-muted">{h.label}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
