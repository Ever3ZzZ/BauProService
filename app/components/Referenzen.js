"use client";

import { useRef, useState } from "react";
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
    setIsDragging(true);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;
    updatePosition(event.clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <article className="overflow-hidden rounded-[18px] border border-[#e5d7bd] bg-white shadow-[0_18px_48px_rgba(66,40,0,0.08)]">
      <div
        ref={containerRef}
        className="relative h-[360px] w-full cursor-ew-resize overflow-hidden bg-[#e8e1d3] select-none touch-none sm:h-[380px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
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
          className={`absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[#ffbf12] text-black shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition-[left,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isDragging ? "scale-110 shadow-[0_16px_30px_rgba(0,0,0,0.28)]" : ""
          }`}
          style={{ left: `${position}%` }}
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
              before="/before1.png"
              after="/after1.png"
              subtitle="Innenausbau & Bodenverlegung"
              title="Wohnraum modernisiert"
            />
          </Reveal>

          <Reveal delay={140}>
            <BeforeAfter
              before="/before2.png"
              after="/after2.png"
              subtitle="Spachtelarbeiten & Malervorbereitung"
              title="Wände sauber gespachtelt"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
