"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

function ArrowHandle() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 7l-5 5 5 5" />
      <path d="M14 7l5 5-5 5" />
    </svg>
  );
}

function BeforeAfter({ before, after, title, subtitle }) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const isBeforeActive = position >= 95;
  const isCompareActive = position > 5 && position < 95;
  const isAfterActive = position <= 5;
  const motionClass = isDragging
    ? ""
    : "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]";

  const updatePosition = (clientX) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;

    setPosition(Math.max(0, Math.min(100, percent)));
  };

  const handlePointerDown = (event) => {
    event.preventDefault();
    setIsDragging(true);
    handleRef.current?.setPointerCapture?.(event.pointerId);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;
    updatePosition(event.clientX);
  };

  const handlePointerUp = (event) => {
    handleRef.current?.releasePointerCapture?.(event.pointerId);
    setIsDragging(false);
  };

  return (
    <article className="overflow-hidden rounded-[18px] border border-[#e5d7bd] bg-white shadow-[0_18px_48px_rgba(66,40,0,0.08)]">
      <div
        ref={containerRef}
        className="relative h-[360px] w-full overflow-hidden bg-[#e8e1d3] select-none sm:h-[380px]"
      >
        <img
          src={after}
          alt={`${title} nachher`}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out ${
            isDragging ? "scale-100" : "scale-[1.015]"
          }`}
          draggable="false"
        />

        <div
          className={`absolute inset-y-0 left-0 overflow-hidden ${motionClass}`}
          style={{ width: `${position}%` }}
        >
          <img
            src={before}
            alt={`${title} vorher`}
            className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
              isDragging ? "scale-100" : "scale-[1.015]"
            }`}
            draggable="false"
          />
        </div>

        <div
          className={`absolute inset-y-0 w-[3px] bg-[#ffbf12] shadow-[0_0_0_1px_rgba(255,255,255,0.45)] ${motionClass}`}
          style={{ left: `calc(${position}% - 1.5px)` }}
        />

        <div
          ref={handleRef}
          className={`${isDragging ? "cursor-grabbing" : "cursor-ew-resize"} absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#ffbf12] text-black shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition-[left,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] touch-none ${
            isDragging ? "scale-110 shadow-[0_16px_30px_rgba(0,0,0,0.28)]" : ""
          }`}
          style={{ left: `${position}%` }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <ArrowHandle />
        </div>

        <div className="absolute left-3 top-3 rounded-[10px] bg-[#2d2b28] px-4 py-2 text-sm font-extrabold uppercase tracking-[0.12em] text-white">
          Vorher
        </div>

        <div className="absolute right-3 top-3 rounded-[10px] bg-[#ffbf12] px-4 py-2 text-sm font-extrabold uppercase tracking-[0.12em] text-black">
          Nachher
        </div>

        <div
          className={`absolute bottom-4 left-1/2 rounded-xl bg-[#2d2b28] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-out ${
            isDragging
              ? "-translate-x-1/2 translate-y-0 scale-95 opacity-0"
              : "-translate-x-1/2 translate-y-0 scale-100 opacity-100"
          }`}
        >
          Zieh nach links/rechts
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div className="space-y-2">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#1e7c57]">
            {subtitle}
          </p>
          <h3 className="text-[1.85rem] font-black leading-tight text-[#121212]">
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-3 overflow-hidden rounded-[14px] border border-[#e3d4bb] bg-[#f6efe1]">
          <button
            type="button"
            onClick={() => setPosition(100)}
            className={`px-3 py-4 text-base font-bold transition duration-300 ${
              isBeforeActive
                ? "bg-[#ffbf12] text-[#121212]"
                : "text-[#171717] hover:bg-[#efe3ca]"
            }`}
          >
            Vorher
          </button>
          <button
            type="button"
            onClick={() => setPosition(50)}
            className={`border-x border-[#e3d4bb] px-3 py-4 text-base font-bold transition duration-300 ${
              isCompareActive
                ? "bg-[#ffbf12] text-[#121212]"
                : "text-[#171717] hover:bg-[#efe3ca]"
            }`}
          >
            Vergleich
          </button>
          <button
            type="button"
            onClick={() => setPosition(0)}
            className={`px-3 py-4 text-base font-bold transition duration-300 ${
              isAfterActive
                ? "bg-[#ffbf12] text-[#121212]"
                : "text-[#171717] hover:bg-[#efe3ca]"
            }`}
          >
            Nachher
          </button>
        </div>
      </div>
    </article>
  );
}

const stepSlides = [
  {
    image: "/firstStep.jpg",
    label: "Schritt 1",
    title: "Rohbau & Tragwerksmontage",
    subtitle:
      "Montage der Holzkonstruktion und Vorbereitung der Gebäudehülle",
  },
  {
    image: "/step3.png",
    label: "Schritt 2",
    title: "Innenausbau & Lichtinstallation",
    subtitle:
      "Ausbau der Innenräume mit Beleuchtung und Deckenverkleidung",
  },
  {
    image: "/LastStep.jpg",
    label: "Schritt 3",
    title: "Finalisierung & Oberflächenarbeiten",
    subtitle:
      "Letzte Ausbauarbeiten, Verglasung und Fertigstellung des Innenbereichs",
  },
];

const badsanierungSlides = [
  {
    image: "/referenzen/badsanierung/badsanierung-01.jpg",
    title: "Waschtisch & Lichtakzente",
  },
  {
    image: "/referenzen/badsanierung/badsanierung-02.jpg",
    title: "Wellnessbereich mit Becken",
  },
  {
    image: "/referenzen/badsanierung/badsanierung-03.jpg",
    title: "Duschbereich mit Dekorfliesen",
  },
  {
    image: "/referenzen/badsanierung/badsanierung-04.jpg",
    title: "Holzoptik & Innenausbau",
  },
  {
    image: "/referenzen/badsanierung/badsanierung-05.jpg",
    title: "Fliesenbild & Poolbereich",
  },
  {
    image: "/referenzen/badsanierung/badsanierung-06.jpg",
    title: "Moderner Innenausbau",
  },
  {
    image: "/referenzen/badsanierung/badsanierung-07.jpg",
    title: "Badezimmer mit Waschtisch",
  },
  {
    image: "/referenzen/badsanierung/badsanierung-08.jpg",
    title: "Bodengleiche Dusche",
  },
  {
    image: "/referenzen/badsanierung/badsanierung-09.jpg",
    title: "Walk-in-Dusche",
  },
];

function StepShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStep = stepSlides[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? stepSlides.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === stepSlides.length - 1 ? 0 : current + 1
    );
  };

  return (
    <article className="overflow-hidden rounded-[22px] border border-[#e5d7bd] bg-white shadow-[0_18px_48px_rgba(66,40,0,0.08)]">
      <div className="border-b border-[#eadfcd] bg-[linear-gradient(180deg,#fffdfa_0%,#fff7ea_100%)] px-5 py-6 sm:px-7">
        <div className="inline-flex rounded-full bg-[#ffbf12] px-4 py-2 text-sm font-black uppercase tracking-[0.14em] text-[#121212]">
          {currentStep.label}
        </div>
        <h3 className="mt-4 text-3xl font-black leading-tight text-[#121212] sm:text-[2.2rem]">
          {currentStep.title}
        </h3>
        <p className="mt-3 max-w-3xl text-base leading-7 text-[#655e55] sm:text-lg sm:leading-8">
          {currentStep.subtitle}
        </p>
      </div>

      <div className="relative h-[380px] w-full overflow-hidden bg-[#e9dfcf] sm:h-[460px]">
        {stepSlides.map((step, index) => (
          <img
            key={step.label}
            src={step.image}
            alt={`${step.label} ${step.title}`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              index === activeIndex
                ? "translate-x-0 opacity-100 scale-100"
                : index < activeIndex
                  ? "-translate-x-[8%] opacity-0 scale-[1.02]"
                  : "translate-x-[8%] opacity-0 scale-[1.02]"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,16,0.02)_0%,rgba(16,16,16,0.16)_100%)]" />

        <button
          type="button"
          onClick={goPrevious}
          aria-label="Vorheriger Schritt"
          className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#ffbf12] text-[#121212] shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition hover:scale-105"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Naechster Schritt"
          className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#ffbf12] text-[#121212] shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition hover:scale-105"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4 border-t border-[#eadfcd] bg-[#fff9ef] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="flex items-center gap-2">
          {stepSlides.map((step, index) => (
            <button
              key={step.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={step.label}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-10 bg-[#ffbf12]"
                  : "w-3 bg-[#d7ccb5] hover:bg-[#c8b78d]"
              }`}
            />
          ))}
        </div>

        <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a7755]">
          {activeIndex + 1} / {stepSlides.length}
        </div>
      </div>
    </article>
  );
}

function WorkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentSlide = badsanierungSlides[activeIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % badsanierungSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? badsanierungSlides.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % badsanierungSlides.length);
  };

  return (
    <article className="overflow-hidden rounded-[22px] border border-[#e5d7bd] bg-white shadow-[0_18px_48px_rgba(66,40,0,0.08)]">
      <div className="border-b border-[#eadfcd] bg-[linear-gradient(180deg,#fffdfa_0%,#fff7ea_100%)] px-5 py-6 sm:px-7">
        <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#1e7c57]">
          Galerie der Arbeiten
        </p>
        <h3 className="mt-3 text-3xl font-black leading-tight text-[#121212] sm:text-[2.2rem]">
          Badsanierung & Innenausbau
        </h3>
        <p className="mt-3 max-w-4xl text-base leading-7 text-[#655e55] sm:text-lg sm:leading-8">
          Hochwertige Fliesenarbeiten, moderne Badezimmer, bodengleiche Duschen
          und individueller Innenausbau - sauber, präzise und langlebig
          ausgeführt.
        </p>
      </div>

      <div className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-[#171717] sm:h-[82vh] sm:min-h-[680px]">
        {badsanierungSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.title}
            className={`absolute inset-0 h-full w-full object-contain transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              index === activeIndex
                ? "translate-x-0 opacity-100 scale-100"
                : index < activeIndex
                  ? "-translate-x-[6%] opacity-0 scale-100"
                  : "translate-x-[6%] opacity-0 scale-100"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,16,0)_0%,rgba(16,16,16,0.26)_100%)]" />

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <div className="max-w-md rounded-[12px] border border-white/20 bg-[#121212]/72 p-4 text-white shadow-[0_14px_30px_rgba(0,0,0,0.22)] backdrop-blur sm:p-5">
            <p className="text-[0.7rem] font-black uppercase tracking-[0.16em] text-[#ffbf12]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(badsanierungSlides.length).padStart(2, "0")}
            </p>
            <h4 className="mt-2 text-lg font-black leading-tight sm:text-xl">
              {currentSlide.title}
            </h4>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/24">
              <div
                key={activeIndex}
                className="h-full rounded-full bg-[#ffbf12] work-carousel-progress"
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={goPrevious}
          aria-label="Vorheriges Foto"
          className="absolute left-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#ffbf12] text-[#121212] shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition hover:scale-105"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Naechstes Foto"
          className="absolute right-4 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#ffbf12] text-[#121212] shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition hover:scale-105"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4 border-t border-[#eadfcd] bg-[#fff9ef] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div className="flex flex-wrap items-center gap-2">
          {badsanierungSlides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={slide.title}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-10 bg-[#ffbf12]"
                  : "w-3 bg-[#d7ccb5] hover:bg-[#c8b78d]"
              }`}
            />
          ))}
        </div>

        <div className="text-sm font-bold uppercase tracking-[0.16em] text-[#8a7755]">
          Wechsel alle 3 Sekunden
        </div>
      </div>
    </article>
  );
}

export default function Referenzen({ id }) {
  return (
    <section id={id} className="bg-[#f5f1e8] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <p className="mb-2 text-sm uppercase tracking-[0.18em] text-gray-500">
            Referenzen
          </p>

          <h2 className="mb-10 max-w-4xl text-4xl font-bold leading-tight text-[#121212]">
            Vorher und nachher: sichtbare Ergebnisse im Innenausbau.
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal delay={40}>
            <BeforeAfter
              before="/before1.jpg"
              after="/after1.jpg"
              subtitle="Innenausbau & Bodenverlegung"
              title="Wohnraum modernisiert"
            />
          </Reveal>

          <Reveal delay={140}>
            <BeforeAfter
              before="/before2.jpg"
              after="/after2.jpg"
              subtitle="Spachtelarbeiten & Malervorbereitung"
              title="Waende sauber gespachtelt"
            />
          </Reveal>
        </div>

        <Reveal delay={160} className="mt-8">
          <StepShowcase />
        </Reveal>

        <Reveal delay={220} className="mt-8">
          <WorkCarousel />
        </Reveal>
      </div>
    </section>
  );
}
