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
  const shouldReduce            = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-soft-out ${
        scrolled ? "glass shadow-soft" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="container-px flex h-16 items-center justify-between sm:h-20"
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
            className="h-14 w-auto sm:h-16"
          />
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-sm font-medium text-ink-soft transition-colors duration-200 hover:text-azure-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary hidden lg:inline-flex"
        >
          <span>Quero uma parceria</span>
          <Icon name="arrow-up-right" size={18} />
        </a>

        {/* Botão hambúrguer/fechar */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-azure-200 bg-white/70 text-ink backdrop-blur transition-colors hover:bg-white lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </nav>

      {/* Menu mobile animado — só o container se move, conteúdo sempre visível */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            role="dialog"
            aria-label="Menu de navegação"
            initial={{ opacity: 0, y: -14, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, y: 0,   clipPath: "inset(0 0 0% 0)",
              transition: { duration: shouldReduce ? 0.1 : 0.5, ease: EASE },
            }}
            exit={{ opacity: 0, y: -8,
              transition: { duration: shouldReduce ? 0.1 : 0.22, ease: [0.4, 0, 1, 1] },
            }}
            className="glass border-t border-hairline lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-white/70 hover:text-azure-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="px-1 pt-3">
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
    </header>
  );
}
