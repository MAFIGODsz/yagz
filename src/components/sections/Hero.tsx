import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Butterfly } from "@/components/ui/Butterfly";
import { ContactActions } from "@/components/ui/ContactActions";
import { Figure } from "@/components/ui/Figure";
import { Reveal } from "@/components/ui/Reveal";
import { ResponseBadge } from "@/components/ui/ResponseBadge";
import { TiltCard } from "@/components/ui/TiltCard";
import { Typewriter } from "@/components/ui/Typewriter";
import { WingsBackdrop } from "@/components/ui/WingsBackdrop";
import { HeroParallax } from "./HeroParallax";
import { IMAGES, PROFILE } from "@/data/profile";

export function Hero() {
  return (
    <HeroParallax
      id="topo"
      aria-label="Apresentação"
      className="mesh-bg grain relative overflow-hidden pt-28 sm:pt-32 lg:pt-40"
    >
      {/* Fundo abstrato de asas de borboleta */}
      <WingsBackdrop opacity={0.6} />

      {/* Borboletas decorativas flutuantes (movimento orgânico + parallax) */}
      <span className="parallax parallax-3 pointer-events-none absolute left-[5%] top-[24%] hidden sm:block">
        <Butterfly className="butterfly-anim h-14 w-14 opacity-40" />
      </span>
      <span className="parallax parallax-2 pointer-events-none absolute right-[8%] top-[14%] hidden lg:block">
        <Butterfly
          className="butterfly-anim h-10 w-10 opacity-30"
          style={{ animationDelay: "2.4s", animationDuration: "11s" }}
        />
      </span>
      <span className="parallax parallax-2 pointer-events-none absolute bottom-[14%] left-[44%] hidden lg:block">
        <Butterfly
          className="butterfly-anim h-8 w-8 opacity-25"
          style={{ animationDelay: "4.6s", animationDuration: "13s" }}
        />
      </span>

      <div className="container-px relative grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-32">
        {/* Coluna de texto */}
        <div className="flex flex-col items-start gap-6">
          <Reveal as="span" variant="fade" className="eyebrow glass rounded-full px-4 py-2">
            <Butterfly variant="filled" fillIntensity={0.9} className="h-5 w-5" />
            {PROFILE.heroEyebrow}
          </Reveal>

          {/* Nome com efeito de escrita real (Y → Yá → Yá G → … → Yá Guayanaz) */}
          <h1 className="text-display-xl font-medium leading-[1.02]">
            <Typewriter
              text="Yá Guayanaz"
              className="text-gradient italic"
              speed={105}
              startDelay={350}
              caret
            />
          </h1>

          <Reveal variant="fade" delay={520}>
            <p className="text-sm font-semibold uppercase tracking-eyebrow text-ink-muted">
              {PROFILE.role}
            </p>
          </Reveal>

          <Reveal delay={600}>
            <p className="max-w-xl font-display text-[1.6rem] leading-[1.25] text-ink sm:text-3xl">
              {PROFILE.impactPhrase}
            </p>
          </Reveal>

          <Reveal delay={680}>
            <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {PROFILE.heroDescription}
            </p>
          </Reveal>

          <Reveal delay={760} className="flex flex-col gap-4 pt-2">
            <ContactActions instagram />
            <ResponseBadge className="w-fit" />
          </Reveal>
        </div>

        {/* Coluna da imagem principal */}
        <Reveal delay={200} variant="scale" className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Halo iridescente atrás da foto */}
          <div className="absolute -inset-10 -z-10 bg-iridescent opacity-60 blur-3xl" />

          {/* Moldura arqueada + borda gradiente + tilt 3D (hover suave, sem zoom) */}
          <TiltCard max={6}>
            <div className="arch-frame img-soft bg-gradient-to-br from-white via-azure-100 to-periwinkle p-2 shadow-lift">
              <Figure
                src={IMAGES.hero}
                alt="Yá Guayanaz em ensaio editorial, transmitindo elegância e profissionalismo"
                aspect="aspect-[4/5]"
                priority
                sizes="(max-width: 1024px) 90vw, 45vw"
                placeholderLabel="Foto principal · ya-hero.jpg"
                className="arch-inner border border-white/70"
                objectPosition="object-[50%_12%]"
              />
            </div>
          </TiltCard>

          {/* Chip flutuante — marcas atendidas (contagem animada) */}
          <div className="glass-card parallax parallax-1 absolute -bottom-5 -left-3 flex items-center gap-3 !p-4 sm:-left-7">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-iridescent">
              <Butterfly variant="filled" className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-2xl font-semibold text-ink">
                <AnimatedCounter value="+350" />
              </p>
              <p className="text-xs text-ink-muted">marcas atendidas</p>
            </div>
          </div>

          {/* Chip secundário — anos de mercado (contagem animada) */}
          <div className="glass-card parallax parallax-1 absolute -right-3 top-10 hidden !px-4 !py-3 sm:block">
            <p className="font-display text-xl font-semibold text-ink">
              <AnimatedCounter value="+6 anos" />
            </p>
            <p className="text-xs text-ink-muted">de mercado</p>
          </div>
        </Reveal>
      </div>

      {/* Transição suave para a próxima seção */}
      <div className="hairline" />
    </HeroParallax>
  );
}
