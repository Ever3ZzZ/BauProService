"use client";

import { useEffect, useState } from "react";

const serviceOptions = [
  "Trockenbau",
  "Innenausbau",
  "Spachtelarbeiten",
  "Bodenverlegung",
  "Türenmontage",
  "Renovierung / Sanierung",
  "Sonstiges",
];

const periodOptions = [
  "So schnell wie möglich",
  "Innerhalb von 2-4 Wochen",
  "In 1-3 Monaten",
  "Noch offen / flexible Planung",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service: serviceOptions[0],
  period: periodOptions[0],
  description: "",
};

function FieldLabel({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-black uppercase tracking-[0.12em] text-[#6f644d]"
    >
      {children}
    </label>
  );
}

export default function QuoteRequestModal({ open, onClose }) {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const frameId = window.requestAnimationFrame(() => {
        setIsSubmitted(false);
        setFormData(initialForm);
      });

      return () => window.cancelAnimationFrame(frameId);
    }
  }, [open]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="quote-modal-backdrop fixed inset-0 z-[90] flex items-end justify-center bg-[#120f0a]/58 p-3 backdrop-blur-sm sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Modal schließen"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
      />

      <div className="quote-modal-panel relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[30px] border border-[#eadfcd] bg-[#fffdfa] shadow-[0_28px_90px_rgba(0,0,0,0.24)]">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-[#eee4d5] bg-[#fffdfa]/95 px-5 py-4 backdrop-blur sm:px-8 sm:py-5">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#b58b22]">
              Angebot
            </p>
            <h2 className="mt-2 text-[1.45rem] font-black tracking-[-0.03em] text-[#121212] sm:text-3xl">
              Unverbindliches Angebot anfragen
            </h2>
            <p className="mt-3 hidden max-w-2xl text-sm leading-7 text-[#655e55] sm:block sm:text-base">
              Senden Sie uns kurz die wichtigsten Informationen zu Ihrem
              Projekt. Die Formularbasis ist bereits vorbereitet; als nächster
              Schritt wird der Versand mit Telegram verbunden.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e7dcc7] bg-white text-xl font-bold text-[#121212] transition hover:bg-[#f6efe1] sm:h-11 sm:w-11"
          >
            ×
          </button>
        </div>

        <div className="px-5 py-5 sm:px-8 sm:py-8">
          {isSubmitted ? (
            <div className="rounded-[26px] border border-[#d8ebcf] bg-[#f3fbef] p-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3f7c32]">
                Formular vorbereitet
              </p>
              <h3 className="mt-2 text-2xl font-black text-[#152411]">
                Vielen Dank für Ihre Anfrage.
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#496044]">
                Die Eingabemaske funktioniert bereits. Im nächsten Schritt
                verbinden wir den Versand mit Ihrer Telegram-Gruppe, damit neue
                Anfragen direkt dort ankommen.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center justify-center rounded-2xl bg-[#ffbf12] px-6 py-3.5 text-base font-black text-[#121212] transition hover:bg-[#f2b400]"
                >
                  Neue Anfrage bearbeiten
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-2xl border border-[#d7decf] bg-white px-6 py-3.5 text-base font-bold text-[#1e2d18] transition hover:bg-[#f7fbf3]"
                >
                  Fenster schließen
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#ddd0b8] bg-white px-4 py-3 text-base text-[#121212] outline-none transition placeholder:text-[#9d927d] focus:border-[#d59d00] focus:ring-4 focus:ring-[#ffbf12]/15 sm:py-3.5"
                    placeholder="Ihr Name"
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="phone">Telefonnummer</FieldLabel>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#ddd0b8] bg-white px-4 py-3 text-base text-[#121212] outline-none transition placeholder:text-[#9d927d] focus:border-[#d59d00] focus:ring-4 focus:ring-[#ffbf12]/15 sm:py-3.5"
                    placeholder="+49 ..."
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="email">E-Mail</FieldLabel>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#ddd0b8] bg-white px-4 py-3 text-base text-[#121212] outline-none transition placeholder:text-[#9d927d] focus:border-[#d59d00] focus:ring-4 focus:ring-[#ffbf12]/15 sm:py-3.5"
                    placeholder="ihre@email.de"
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="city">Ort des Projekts</FieldLabel>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#ddd0b8] bg-white px-4 py-3 text-base text-[#121212] outline-none transition placeholder:text-[#9d927d] focus:border-[#d59d00] focus:ring-4 focus:ring-[#ffbf12]/15 sm:py-3.5"
                    placeholder="z. B. Bad Kissingen"
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="service">Leistung</FieldLabel>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#ddd0b8] bg-white px-4 py-3 text-base text-[#121212] outline-none transition focus:border-[#d59d00] focus:ring-4 focus:ring-[#ffbf12]/15 sm:py-3.5"
                  >
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <FieldLabel htmlFor="period">Gewünschter Zeitraum</FieldLabel>
                  <select
                    id="period"
                    name="period"
                    value={formData.period}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-[#ddd0b8] bg-white px-4 py-3 text-base text-[#121212] outline-none transition focus:border-[#d59d00] focus:ring-4 focus:ring-[#ffbf12]/15 sm:py-3.5"
                  >
                    {periodOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <FieldLabel htmlFor="description">Projektbeschreibung</FieldLabel>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  required
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full rounded-[24px] border border-[#ddd0b8] bg-white px-4 py-3 text-base text-[#121212] outline-none transition placeholder:text-[#9d927d] focus:border-[#d59d00] focus:ring-4 focus:ring-[#ffbf12]/15 sm:py-3.5"
                  placeholder="Beschreiben Sie kurz, welche Arbeiten benötigt werden."
                />
              </div>

              <div className="hidden rounded-[22px] border border-[#eadfcd] bg-[#f8f2e6] px-5 py-4 text-sm leading-7 text-[#655e55] sm:block">
                Die Anfrage ist unverbindlich. Ihre Angaben werden nur zur
                Bearbeitung Ihres Anliegens verwendet.
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#ffbf12] px-6 py-3.5 text-base font-black text-[#121212] shadow-[0_16px_34px_rgba(255,191,18,0.22)] transition hover:bg-[#f2b400] sm:py-4"
                >
                  Anfrage senden
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-2xl border border-[#ddd0b8] bg-white px-6 py-3.5 text-base font-bold text-[#3a352d] transition hover:bg-[#fbf7ef] sm:py-4"
                >
                  Abbrechen
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
