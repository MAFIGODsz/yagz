import Image from "next/image";
import { Butterfly } from "./Butterfly";

type FigureProps = {
  /** caminho da imagem real; se null/undefined exibe placeholder elegante */
  src?: string | null;
  /** texto alternativo descritivo (obrigatório p/ acessibilidade) */
  alt: string;
  /** classes de aspect-ratio do Tailwind, ex.: "aspect-[4/5]" */
  aspect?: string;
  /** carregar com prioridade (use apenas na imagem do hero) */
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** rótulo opcional exibido no placeholder (orienta a troca da foto) */
  placeholderLabel?: string;
  /** posição do recorte (Tailwind), ex.: "object-center", "object-[50%_25%]" */
  objectPosition?: string;
};

/**
 * Exibe uma imagem otimizada (next/image, lazy por padrão) mantendo proporção
 * sem distorção (object-cover). Quando não há imagem, mostra um placeholder
 * premium com gradiente e borboleta — pronto para troca fácil.
 */
export function Figure({
  src,
  alt,
  aspect = "aspect-[4/5]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  placeholderLabel,
  objectPosition = "object-center",
}: FigureProps) {
  return (
    <div className={`relative isolate overflow-hidden ${aspect} ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${objectPosition}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full items-center justify-center bg-iridescent"
        >
          {/* brilho perolado sobreposto */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_30%_10%,rgba(255,255,255,0.75),transparent_60%)]" />
          <div className="relative flex flex-col items-center gap-4 px-6 text-center">
            <Butterfly variant="filled" className="h-20 w-20 opacity-90" />
            <span className="text-eyebrow font-sans font-semibold uppercase text-azure-700">
              {placeholderLabel ?? "Foto da Yá"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
