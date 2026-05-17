import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title:
    "Trockenbau Handwerker Innenausbau Bad Kissingen | BauProService Rhön",
  description:
    "Handwerker für Trockenbau und Innenausbau in Bad Kissingen. BauProService Rhön für saubere Ausbauarbeiten, Spachtelarbeiten und Renovierung.",
  alternates: {
    canonical: "/trockenbau-handwerker-innenausbau-bad-kissingen",
  },
  openGraph: {
    title:
      "Trockenbau Handwerker Innenausbau Bad Kissingen | BauProService Rhön",
    description:
      "Handwerker für Trockenbau und Innenausbau in Bad Kissingen. BauProService Rhön für saubere Ausbauarbeiten und Renovierung.",
    url: "/trockenbau-handwerker-innenausbau-bad-kissingen",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Trockenbau Handwerker Innenausbau Bad Kissingen",
      },
    ],
  },
};

const focusPoints = [
  "Handwerker für Trockenbau in Bad Kissingen",
  "Innenausbau für Wohnungen, Häuser und kleinere Gewerbeobjekte",
  "Spachtelarbeiten, Verkleidungen und saubere Ausbauarbeiten",
  "Direkter Kontakt per Telefon oder WhatsApp",
];

export default function TrockenbauHandwerkerInnenausbauPage() {
  return (
    <main className="bg-[#fbf8f2]">
      <section className="bg-[linear-gradient(180deg,#fffdfa_0%,#f7f1e6_100%)] py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/"
            className="inline-flex rounded-full border border-[#e6dbc8] bg-white px-4 py-2 text-sm font-bold text-[#121212] transition hover:bg-[#f6efe1]"
          >
            Zurück zur Startseite
          </Link>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
            Trockenbau Handwerker Innenausbau Bad Kissingen
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#121212] sm:text-5xl lg:text-6xl">
            Handwerker für Trockenbau und Innenausbau in Bad Kissingen.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#655e55]">
            Wenn Sie einen Handwerker für Trockenbau in Bad Kissingen suchen,
            ist BauProService Rhön Ihr Ansprechpartner für Innenausbau,
            Spachtelarbeiten, Verkleidungen, Bodenverlegung und saubere
            Renovierungsarbeiten. Wir arbeiten strukturiert, ordentlich und mit
            klaren Absprachen für private und kleinere gewerbliche Projekte.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {focusPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[#e6dbc8] bg-white px-5 py-4 text-base font-bold text-[#27231d] shadow-[0_12px_30px_rgba(68,47,10,0.05)]"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-[#e6dbc8] bg-white p-8 shadow-[0_18px_60px_rgba(68,47,10,0.05)]">
            <h2 className="text-3xl font-black text-[#121212]">
              Was ein guter Trockenbau-Handwerker in Bad Kissingen leisten soll
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-[#655e55]">
              <p>
                Gute Trockenbauarbeiten beginnen nicht erst bei der Montage,
                sondern bei sauberer Abstimmung, klaren Massen und einem
                verständlichen Ablauf. Genau darauf legen wir Wert. Ob
                Verkleidungen, Decken, vorbereitete Oberflächen oder
                Innenausbau im Zuge einer Modernisierung: wichtig ist ein
                Ergebnis, das dauerhaft ordentlich aussieht und im Alltag
                funktioniert.
              </p>

              <p>
                Dazu gehören bei vielen Projekten auch Spachtelarbeiten,
                Anschlussdetails, vorbereitete Flächen für den weiteren Ausbau
                und ein sauberes Auftreten auf der Baustelle. So entsteht aus
                einer einzelnen Trockenbauleistung ein stimmiger Innenausbau.
              </p>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e6dbc8] bg-[#171717] p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
            <h2 className="text-3xl font-black">
              Schnell Kontakt aufnehmen
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/76">
              Für Trockenbau und Innenausbau in Bad Kissingen können Sie uns
              direkt kontaktieren. So lässt sich eine erste Einschätzung zum
              Projekt schnell abstimmen.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center justify-center rounded-2xl bg-[#ffbf12] px-6 py-4 text-lg font-black text-[#121212] transition hover:bg-[#f2b400]"
              >
                Jetzt anrufen
              </a>

              <a
                href={siteConfig.whatsappHref}
                className="inline-flex items-center justify-center rounded-2xl border border-green-400/18 bg-green-400/8 px-6 py-4 text-lg font-bold text-white transition hover:bg-green-400/14"
              >
                Per WhatsApp schreiben
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}