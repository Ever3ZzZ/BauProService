"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import QuoteRequestModal from "./QuoteRequestModal";
import { siteConfig } from "../lib/siteConfig";

const highlights = [
  {
    title: "Kurzfristige Termine",
    description: "Flexible Planung nach Absprache",
  },
  {
    title: "Saubere Ausführung",
    description: "Ordentliche Baustelle und klare Übergabe",
  },
  {
    title: "Regionale Nähe",
    description: "Rhön, Fulda, Würzburg und Umgebung",
  },
];

export default function HeroNew() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[#121212]">
        <Image
          src="/hero.png"
          alt="Trockenbau und Innenausbau"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,18,18,0.9)_0%,rgba(18,18,18,0.78)_34%,rgba(18,18,18,0.4)_62%,rgba(18,18,18,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,18,0.54)_0%,rgba(18,18,18,0.16)_16%,rgba(18,18,18,0.38)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-5 py-14 sm:px-8 sm:py-16 lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="motion-enter mb-5 text-sm font-black uppercase tracking-[0.24em] text-[#ffbf12] sm:text-base">
              Trockenbau & Innenausbau in der Rhön
            </p>

            <h1 className="motion-enter motion-delay-1 max-w-[10ch] text-[3rem] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-[4.4rem] lg:text-[7.2rem]">
              BauProService Rhön
            </h1>

            <p className="motion-enter motion-delay-2 mt-6 max-w-2xl text-base leading-7 text-white/90 sm:text-xl sm:leading-9 lg:text-2xl lg:leading-10">
              Schnell, sauber und zuverlässig: Ihr Partner für Innenausbau,
              Renovierung und Sanierung im Raum Bad Kissingen, Bad Brückenau,
              Fulda und Würzburg.
            </p>

            <div className="motion-enter motion-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(true)}
                className="inline-flex items-center justify-center rounded-2xl bg-[#ffbf12] px-7 py-4 text-base font-black text-[#121212] shadow-[0_18px_40px_rgba(255,191,18,0.28)] transition hover:bg-[#f2b400] sm:px-8 sm:text-lg"
              >
                Angebot anfragen {"\u2692\uFE0F"}
              </button>

              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/8 px-7 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/14 sm:px-8 sm:text-lg"
              >
                Anrufen {"\uD83D\uDCDE"}
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto -mt-6 max-w-6xl px-5 pb-8 sm:-mt-8 sm:px-8 lg:px-10">
          <div className="grid overflow-hidden rounded-[26px] border border-white/45 bg-white shadow-[0_28px_70px_rgba(33,24,7,0.16)] md:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal
                key={item.title}
                as="div"
                delay={140 + index * 90}
                className={`px-6 py-6 sm:px-8 ${
                  index !== highlights.length - 1
                    ? "border-b border-[#ece3d4] md:border-b-0 md:border-r"
                    : ""
                } border-[#ece3d4]`}
              >
                <h3 className="text-xl font-black text-[#151515] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-[#6c655b] sm:text-lg sm:leading-8">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteRequestModal
        open={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}
