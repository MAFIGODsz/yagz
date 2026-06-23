"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/ui/Icon";
import { whatsappLink } from "@/data/socialLinks";
import { PROFILE } from "@/data/profile";
import { NAV_LINKS } from "@/data/site";

/* ── Variants ──────────────────────────────────────────────────────────── */

const EASE = [0.22, 1, 0.36, 1] as const;

/* ── Component ─────────────────────────────────────────────────────────── */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState<string>("");
  const shouldReduce            = useReducedMotion();

  /* Cápsula "materializada": ao rolar OU com o menu mobile aberto (para o
     painel não ficar destacado de uma barra transparente no topo). */
  const elevated = scrolled || open;

  /* No topo a cápsula é transparente (integrada ao hero); ao rolar ganha
     fundo, blur, borda e sombra. setState só dispara ao cruzar o limite. */
  useEffect(() => {
    let last = false;
    const onScroll = () => {
      const next = window.scrollY > 24;
      if (next !== last) {
        last = next;
        setScrolled(next);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Trava o scroll do corpo enquanto o menu mobile está aberto */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Scroll-spy — destaca o link da seção visível (atualiza só na troca de
     seção via IntersectionObserver, sem re-render a cada frame de scroll) */
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-3 sm:pt-5">
      <div className="mx-auto w-[92vw] max-w-5xl">
        {/* ── Cápsula flutuante ─────────────────────────────────────────── */}
        <nav
          aria-label="Navegação principal"
          style={{
            backdropFilter: elevated ? "blur(20px) saturate(1.5)" : "blur(0px) saturate(1)",
            WebkitBackdropFilter: elevated ? "blur(20px) saturate(1.5)" : "blur(0px) saturate(1)",
          }}
          className={`pointer-events-auto flex items-center justify-between gap-3 rounded-full border px-3 py-2 pl-4 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-[600ms] ease-soft-out sm:gap-4 sm:px-4 sm:py-2.5 sm:pl-6 ${
            elevated
              ? "border-azure-200 bg-white/85 shadow-card"
              : "border-transparent bg-transparent shadow-none"
          }`}
        >
          {/* Logo */}
          <a
            href="#topo"
            className="flex items-center"
            aria-label={`${PROFILE.name} — início`}
          >
            <Image
              src="/images/logo-yg.png"
              alt={PROFILE.name}
              width={535}
              height={522}
              priority
              className="h-10 w-auto sm:h-11"
            />
          </a>

          {/* Links desktop — pílula no hover/foco + estado ativo */}
          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ease-out
                      before:absolute before:inset-0 before:rounded-full before:bg-[#C7E8FA]/80
                      before:transition-[opacity,transform] before:duration-500 before:ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isActive
                        ? "before:opacity-100 before:scale-100 text-[#1E4E68]"
                        : "before:opacity-0 before:scale-95 text-ink-soft hover:before:opacity-100 hover:before:scale-100 hover:text-[#1E4E68] focus-visible:before:opacity-100 focus-visible:before:scale-100 focus-visible:text-[#1E4E68]"
                      }`}
                  >
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA desktop — compacto para a cápsula não ficar alta */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden text-sm lg:inline-flex lg:!min-h-0 lg:!px-5 lg:!py-2.5"
          >
            <span>Quero uma parceria</span>
            <Icon name="arrow-up-right" size={16} />
          </a>

          {/* Botão hambúrguer/fechar */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-azure-200 bg-white/70 text-ink transition-colors hover:bg-white lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </nav>

        {/* ── Menu mobile — card flutuante espelhando a cápsula ─────────── */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              role="dialog"
              aria-label="Menu de navegação"
              initial={{ opacity: 0, y: -14, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)",
                transition: { duration: shouldReduce ? 0.1 : 0.5, ease: EASE },
              }}
              exit={{ opacity: 0, y: -8,
                transition: { duration: shouldReduce ? 0.1 : 0.22, ease: [0.4, 0, 1, 1] },
              }}
              className="pointer-events-auto mt-2 overflow-hidden rounded-3xl border border-white/70 bg-white/85 shadow-card backdrop-blur-xl backdrop-saturate-150 lg:hidden"
            >
              <ul className="flex flex-col gap-1 p-3">
                {NAV_LINKS.map((link) => {
                  const isActive = active === link.href;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive
                            ? "bg-azure-50 text-azure-700"
                            : "text-ink-soft hover:bg-azure-50 hover:text-azure-700"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}

                <li className="px-1 pt-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="btn btn-primary w-full"
                  >
                    <span>Quero uma parceria</span>
                    <Icon name="arrow-up-right" size={18} />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
