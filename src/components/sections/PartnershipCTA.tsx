import { Butterfly } from "@/components/ui/Butterfly";
import { ContactActions } from "@/components/ui/ContactActions";
import { Reveal } from "@/components/ui/Reveal";
import { ResponseBadge } from "@/components/ui/ResponseBadge";
import { WHATSAPP_MESSAGES } from "@/data/socialLinks";
import { CTA } from "@/data/site";

export function PartnershipCTA() {
  return (
    <section
      id="parceria"
      aria-labelledby="parceria-title"
      className="section relative overflow-hidden"
    >
      <div className="container-px">
        <Reveal className="mesh-deep grain relative overflow-hidden rounded-[2rem] px-8 py-20 text-center shadow-lift sm:px-12 sm:py-24">
          {/* brilho e borboletas decorativas */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_140%_at_50%_-10%,rgba(255,255,255,0.30),transparent_55%)]" />
          <Butterfly className="butterfly-anim pointer-events-none absolute left-8 top-10 h-16 w-16 opacity-25" />
          <Butterfly
            className="butterfly-anim pointer-events-none absolute bottom-8 right-10 hidden h-20 w-20 opacity-20 sm:block"
            style={{ animationDelay: "3.5s", animationDuration: "12s" }}
          />

          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <span className="inline-flex items-center gap-2 text-eyebrow font-sans font-semibold uppercase text-white/80">
              <Butterfly variant="filled" className="h-5 w-5" />
              {CTA.eyebrow}
            </span>

            <h2
              id="parceria-title"
              className="text-display-md text-white [text-wrap:balance]"
            >
              {CTA.title}
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-white sm:text-lg">
              {CTA.description}
            </p>

            <ContactActions
              variant="dark"
              align="center"
              className="mt-4 justify-center"
              whatsappMessage={WHATSAPP_MESSAGES.campaign}
              email
              instagram
            />

            <ResponseBadge variant="dark" className="mt-6" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
