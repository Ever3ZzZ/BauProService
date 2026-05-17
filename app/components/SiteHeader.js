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
    <span className="relative block h-[18px] w-[20px]">
      <span
        className={`absolute left-0 top-[2px] block h-0.5 w-5 rounded-full bg-[#161616] transition-all duration-300 ease-out ${
          open ? "top-[8px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[8px] block h-0.5 w-5 rounded-full bg-[#161616] transition-all duration-300 ease-out ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-[14px] block h-0.5 w-5 rounded-full bg-[#161616] transition-all duration-300 ease-out ${
          open ? "top-[8px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="hidden border-b border-[#eadfcb] bg-white/90 shadow-[0_12px_34px_rgba(51,35,7,0.05)] backdrop-blur-xl md:block">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="flex items-center justify-between gap-6 py-3">
            <a
              href="#home"
              className="text-base font-black tracking-[-0.03em] text-[#121212] lg:text-lg"
              aria-label="BauProService Rhön Startseite"
            >
              BauProService Rhön
            </a>

            <div className="flex items-center gap-1 rounded-full border border-[#eadfcb] bg-[#fffaf1] p-1.5 shadow-[0_10px_30px_rgba(74,53,14,0.05)]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-black text-[#5b554a] transition hover:bg-white hover:text-[#121212] hover:shadow-sm hover:ring-2 hover:ring-[#d59d00]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <div className="sticky top-0 z-50 md:hidden">
        <div className="mx-auto max-w-6xl px-4 py-2.5 sm:px-6">
          <div className="flex justify-end">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d59d00] bg-[rgba(255,255,255,0.92)] text-[#121212] shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur-md transition hover:bg-[#fff8ec]"
              onClick={() => setIsOpen((value) => !value)}
            >
              <MenuIcon open={isOpen} />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-[320px] pb-3 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="rounded-[22px] border border-[#e7dcc7] bg-white p-2.5 shadow-[0_12px_34px_rgba(69,47,11,0.08)]">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl px-4 py-2.5 text-sm font-bold text-[#26221d] transition hover:bg-[#f6efe1] hover:ring-2 hover:ring-[#d59d00]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
