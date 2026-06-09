"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { whatsappLink } from "@/data/socialLinks";
import { CTA_TEXT } from "@/data/site";

/**
 * Barra de contato fixa no rodapé — apenas no mobile.
 * Aparece após o usuário rolar para além do hero, deixando o contato
 * principal (WhatsApp) sempre a um toque de distância.
 */
export function MobileCtaBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-4 pt-2 transition-transform duration-300 ease-soft-out lg:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-[160%]"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!show}
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary w-full shadow-lift"
        tabIndex={show ? 0 : -1}
      >
        <Icon name="whatsapp" size={20} />
        <span>{CTA_TEXT.partnership}</span>
      </a>
    </div>
  );
}
