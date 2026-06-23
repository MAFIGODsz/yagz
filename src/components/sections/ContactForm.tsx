"use client";

import { useRef, useState } from "react";
import { Butterfly } from "@/components/ui/Butterfly";
import { ContactActions } from "@/components/ui/ContactActions";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ResponseBadge } from "@/components/ui/ResponseBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WingsBackdrop } from "@/components/ui/WingsBackdrop";
import { buildMailto, buildWhatsappLink } from "@/data/socialLinks";
import { FORM } from "@/data/site";

type Channel = "whatsapp" | "email";
type Errors = { name?: string; message?: string };

export function ContactForm() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Channel | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validate = () => {
    const e: Errors = {};
    if (!name.trim()) e.name = "Conte o seu nome.";
    if (!message.trim()) e.message = "Escreva uma mensagem.";
    setErrors(e);
    if (e.name) nameRef.current?.focus();
    else if (e.message) messageRef.current?.focus();
    return Object.keys(e).length === 0;
  };

  const composeBody = () => {
    const lines = [
      `Olá, Yá! Sou ${name.trim()}${brand.trim() ? ` da ${brand.trim()}` : ""}.`,
      "",
      message.trim(),
    ];
    if (contact.trim()) lines.push("", `Meu contato: ${contact.trim()}`);
    return lines.join("\n");
  };

  const handleSubmit = (channel: Channel) => {
    if (!validate()) return;
    const body = composeBody();
    if (channel === "whatsapp") {
      window.open(buildWhatsappLink(body), "_blank", "noopener,noreferrer");
    } else {
      const mailtoUrl = buildMailto(
        `Contato de ${name.trim()}${brand.trim() ? ` — ${brand.trim()}` : ""}`,
        body,
      );
      window.location.href = mailtoUrl;
    }
    setSent(channel);
  };

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="section relative overflow-hidden"
    >
      <WingsBackdrop opacity={0.25} />
      <div className="container-px">
        <SectionHeading
          id="contato-title"
          eyebrow={FORM.eyebrow}
          title={FORM.title}
          description={FORM.description}
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Coluna de reforço / confiança */}
          <Reveal className="flex flex-col gap-6">
            <ResponseBadge className="w-fit" />
            <p className="font-display text-2xl leading-snug text-ink sm:text-[1.75rem]">
              {FORM.reassurance}
            </p>
            <ContactActions instagram />
            <Butterfly className="mt-2 hidden h-16 w-16 opacity-50 lg:block" />
          </Reveal>

          {/* Formulário */}
          <Reveal delay={80}>
            <form
              noValidate
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit("whatsapp");
              }}
              className="card !p-7 sm:!p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className="field-label">
                    Nome <span className="text-danger">*</span>
                  </label>
                  <input
                    id="cf-name"
                    ref={nameRef}
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-required="true"
                    aria-invalid={errors.name ? "true" : undefined}
                    aria-describedby={errors.name ? "cf-name-error" : undefined}
                    className="field-input"
                    placeholder="Seu nome"
                  />
                  {errors.name && (
                    <p id="cf-name-error" role="alert" className="field-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="cf-brand" className="field-label">
                    Marca / Empresa
                  </label>
                  <input
                    id="cf-brand"
                    type="text"
                    autoComplete="organization"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="field-input"
                    placeholder="Nome da marca"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="cf-contact" className="field-label">
                  E-mail ou WhatsApp
                </label>
                <input
                  id="cf-contact"
                  type="text"
                  inputMode="email"
                  autoComplete="email"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="field-input"
                  placeholder="Como prefere que eu te responda?"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="cf-message" className="field-label">
                  Mensagem <span className="text-danger">*</span>
                </label>
                <textarea
                  id="cf-message"
                  ref={messageRef}
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-required="true"
                  aria-invalid={errors.message ? "true" : undefined}
                  aria-describedby={errors.message ? "cf-message-error" : undefined}
                  className="field-input resize-y"
                  placeholder="Conte o seu objetivo, o formato desejado e prazos, se já tiver."
                />
                {errors.message && (
                  <p id="cf-message-error" role="alert" className="field-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="submit" className="btn btn-primary">
                  <Icon name="whatsapp" size={18} />
                  <span>Enviar pelo WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSubmit("email")}
                  className="btn btn-secondary"
                >
                  <Icon name="mail" size={18} />
                  <span>Enviar por e-mail</span>
                </button>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <ResponseBadge />
                <p
                  role="status"
                  aria-live="polite"
                  className="text-sm text-ink-muted"
                >
                  {sent === "whatsapp"
                    ? "Abri o WhatsApp com a sua mensagem. É só enviar!"
                    : sent === "email"
                      ? "Abri o seu e-mail com a mensagem pronta. É só enviar!"
                      : "Seus dados não são armazenados — abrem direto no app escolhido."}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
