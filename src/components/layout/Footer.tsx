import Image from "next/image";
import { Butterfly } from "@/components/ui/Butterfly";
import { Icon } from "@/components/ui/Icon";
import { CONTACT, whatsappLink } from "@/data/socialLinks";
import { PROFILE } from "@/data/profile";
import { NAV_LINKS } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-offwhite">
      <div className="container-px pb-24 pt-16 lg:py-16">
        {/* Colunas */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center">
              <Image
                src="/images/logo-yg.png"
                alt={PROFILE.name}
                width={535}
                height={522}
                className="h-14 w-auto"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {PROFILE.role}. {PROFILE.tagline}
            </p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3">
            <span className="text-eyebrow font-semibold uppercase text-ink-muted">
              Navegação
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-azure-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-eyebrow font-semibold uppercase text-ink-muted">
              Contato
            </span>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-azure-600"
            >
              <Icon name="whatsapp" size={18} className="text-azure-500" />
              WhatsApp
            </a>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-azure-600"
            >
              <Icon name="instagram" size={18} className="text-azure-500" />
              {CONTACT.instagramHandle}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-azure-600"
            >
              <Icon name="mail" size={18} className="text-azure-500" />
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-ink-muted sm:flex-row">
          <p>
            © {year} {PROFILE.name}. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="http://instagram.com/thepixeloo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink-soft transition-colors hover:text-azure-600"
            >
              Pixeloo
            </a>
          </p>
          <p className="flex items-center gap-1.5">
            Feito com estratégia e delicadeza
            <Butterfly className="h-4 w-4" />
          </p>
        </div>
      </div>
    </footer>
  );
}
