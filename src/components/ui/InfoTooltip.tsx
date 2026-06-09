"use client";

import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

export function InfoTooltip({ text, label }: { text: string; label: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // garante que o portal só renderiza no cliente
  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!open) return;
    function close(e: MouseEvent | TouchEvent) {
      if (!btnRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function closeKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    document.addEventListener("keydown", closeKey);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
      document.removeEventListener("keydown", closeKey);
    };
  }, [open]);

  function handleClick() {
    if (open) { setOpen(false); return; }
    if (btnRef.current) setRect(btnRef.current.getBoundingClientRect());
    setOpen(true);
  }

  const POPUP_W = 200;
  let popupLeft = 0;
  let popupTop = 0;
  if (rect) {
    popupLeft = rect.right - POPUP_W;
    if (popupLeft < 8) popupLeft = 8;
    if (popupLeft + POPUP_W > window.innerWidth - 8) popupLeft = window.innerWidth - POPUP_W - 8;
    popupTop = rect.top - 8;
  }

  return (
    <span className="relative ml-1.5 inline-flex align-middle">
      <button
        ref={btnRef}
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={handleClick}
        className="inline-grid h-[1.1rem] w-[1.1rem] place-items-center rounded-full border border-azure-200 bg-white/85 text-[0.66rem] font-bold leading-none text-azure-700 shadow-soft transition-all duration-300 ease-soft-out hover:-translate-y-px hover:border-azure-300 hover:bg-azure-50 hover:text-azure-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure-300"
      >
        !
      </button>

      {mounted && open && rect && createPortal(
        <span
          role="tooltip"
          style={{
            position: "fixed",
            top: popupTop,
            left: popupLeft,
            width: POPUP_W,
            transform: "translateY(-100%)",
            zIndex: 99999,
          }}
          className="rounded-xl border border-azure-100 bg-white px-3 py-2.5 text-left text-xs leading-relaxed text-ink-soft shadow-card"
        >
          {text}
        </span>,
        document.body
      )}
    </span>
  );
}
