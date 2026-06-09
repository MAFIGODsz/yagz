import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { Brand } from "@/data/brands";

/**
 * Card de marca premium da vitrine principal.
 * - Logo dentro de um tile quadrado padronizado (object-contain → sem corte,
 *   sem distorção). Como os logos têm fundo próprio, preenchem o tile.
 * - Nome da marca abaixo, em tipografia refinada e discreta.
 * - Card inteiro clicável quando há `instagramUrl` real (abre em nova aba,
 *   com aria-label e ícone de Instagram surgindo no hover).
 * - Hover delicado (elevação ~4px, borda azul, halo perolado) via `.brand-card`.
 */
export function BrandCard({ brand }: { brand: Brand }) {
  const hasLink = Boolean(brand.instagramUrl && brand.instagramUrl !== "#");

  const content = (
    <>
      {/* position inline garante `relative` desde o 1º render (next/image fill) */}
      <div className="brand-tile" style={{ position: "relative" }}>
        {brand.logo ? (
          <Image
            src={brand.logo}
            alt={`Logo ${brand.name}`}
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
            className="object-contain"
          />
        ) : (
          <span className="grid h-full w-full place-items-center px-4 text-center font-display text-lg font-medium leading-tight text-ink">
            {brand.name}
          </span>
        )}

        {hasLink && (
          <span className="brand-ig" aria-hidden="true">
            <Icon name="instagram" size={16} />
          </span>
        )}
      </div>

      <p className="brand-name">{brand.name}</p>
    </>
  );

  if (hasLink) {
    return (
      <a
        href={brand.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir Instagram da marca ${brand.name}`}
        className="brand-card group"
      >
        {content}
      </a>
    );
  }

  return <div className="brand-card group">{content}</div>;
}
