"use client";

import { useState } from "react";

const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#einsatzgebiet", label: "Einsatzgebiet" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

function MenuIcon({ open }) {
  return (
    <span className="relative block h-4 w-5">
      <span
        className={`absolute left-0 top-[1px] block h-0.5 w-5 rounded-full bg-[#161616] transition-all duration-300 ease-out ${
          open ? "top-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] block h-0.5 w-5 rounded-full bg-[#161616] transition-all duration-300 ease-out ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[13px] block h-0.5 w-5 rounded-full bg-[#161616] transition-all duration-300 ease-out ${
          open ? "top-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`z-50 border-b border-[#e7dcc7] bg-white/92 backdrop-blur-xl ${
        isOpen ? "relative" : "sticky top-0 lg:sticky"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="flex items-center justify-between py-2.5 sm:py-3">
          <a
            href="#home"
            className="text-base font-black tracking-[-0.03em] text-[#121212] sm:text-lg"
            onClick={closeMenu}
          >
            BauProService Rhön
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-[#5b554a] transition hover:bg-[#f6efe1] hover:text-[#121212]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="ml-2 inline-flex items-center rounded-full bg-[#ffbf12] px-5 py-2.5 text-sm font-black text-[#121212] shadow-[0_10px_24px_rgba(255,191,18,0.24)] transition hover:bg-[#f2b400]"
            >
              Kontakt
            </a>
          </div>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d59d00] bg-white text-[#121212] shadow-sm transition hover:bg-[#f8f2e6] lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            <MenuIcon open={isOpen} />
          </button>
        </nav>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out lg:hidden ${
            isOpen ? "max-h-[360px] pb-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-[22px] border border-[#e7dcc7] bg-white p-2.5 shadow-[0_12px_34px_rgba(69,47,11,0.08)]">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-2.5 text-sm font-bold text-[#26221d] transition hover:bg-[#f6efe1]"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href="#kontakt"
              onClick={closeMenu}
              className="mt-2.5 inline-flex w-full items-center justify-center rounded-2xl bg-[#ffbf12] px-5 py-3 text-sm font-black text-[#121212] transition hover:bg-[#f2b400]"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
