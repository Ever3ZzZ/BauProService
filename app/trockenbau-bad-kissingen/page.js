import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  keywords: [
  "Trockenbau Bad Kissingen",
  "Trockenbau",
  "Innenausbau Bad Kissingen",
  "Spachtelarbeiten Bad Kissingen",
  "Renovierung Bad Kissingen",
  "Trockenbau Fulda",
  "Innenausbau",
],
  title: "Trockenbau Bad Kissingen | BauProService Rhön",
  description:
    "Trockenbau in Bad Kissingen für Wohnungen, Häuser und kleinere Gewerbeobjekte. BauProService Rhön für Innenausbau, Spachtelarbeiten und Renovierung.",
  alternates: {
    canonical: "/trockenbau-bad-kissingen",
  },
  openGraph: {
    title: "Trockenbau Bad Kissingen | BauProService Rhön",
    description:
      "Trockenbau in Bad Kissingen für Wohnungen, Häuser und kleinere Gewerbeobjekte. Innenausbau, Spachtelarbeiten und Renovierung.",
    url: "/trockenbau-bad-kissingen",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Trockenbau und Innenausbau in Bad Kissingen",
      },
    ],
  },
};

const benefits = [
  "Trockenbau für Wohnräume, Altbau und Modernisierung",
  "Saubere Spachtelarbeiten und vorbereitete Oberflächen",
  "Innenausbau mit klaren Absprachen und direktem Kontakt",
  "Einsatz in Bad Kissingen, Bad Brückenau und Umgebung",
];

export default function TrockenbauBadKissingenPage() {
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
            Trockenbau Bad Kissingen
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#121212] sm:text-5xl lg:text-6xl">
            Ihr Ansprechpartner für Trockenbau in Bad Kissingen.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#655e55]">
            BauProService Rhön übernimmt Trockenbau, Innenausbau,
            Spachtelarbeiten, Bodenverlegung und Renovierung
            in Bad Kissingen und Umgebung.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-[#e6dbc8] bg-white px-5 py-4 text-base font-bold text-[#27231d]"
              >
                {benefit}
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="py-20">

        <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr]">

          <div className="rounded-[30px] border border-[#e6dbc8] bg-white p-8">

            <h2 className="text-3xl font-black text-[#121212]">
              Welche Trockenbauarbeiten wir in Bad Kissingen anbieten
            </h2>

            <div className="mt-5 space-y-4 text-lg leading-8 text-[#655e55]">

              <p>
                Wir unterstützen bei klassischen
                Trockenbauarbeiten in Wohnungen,
                Häusern und Gewerbeobjekten.
              </p>

              <p>
                Dazu gehören Trennwände,
                abgehängte Decken,
                Innenausbau sowie
                vorbereitende Spachtelarbeiten.
              </p>

            </div>

          </div>

          <div className="rounded-[30px] bg-[#171717] p-8 text-white">

            <h2 className="text-3xl font-black">
              Schnell Kontakt aufnehmen
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/80">
              Direkt telefonisch oder per WhatsApp.
            </p>

            <div className="mt-8 flex flex-col gap-4">

              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="rounded-2xl bg-[#ffbf12] px-6 py-4 text-center text-lg font-black text-[#121212]"
              >
                Jetzt anrufen
              </a>

              <a
                href={siteConfig.whatsappHref}
                className="rounded-2xl border border-green-400/20 bg-green-400/10 px-6 py-4 text-center"
              >
                Per WhatsApp schreiben
              </a>

            </div>

          </div>

        </div>

      </section>

      <section className="pb-20 px-6">

        <div className="mx-auto max-w-5xl rounded-[30px] border border-[#e6dbc8] bg-white p-8">

          <h2 className="text-3xl font-black text-[#121212]">
            Professionelle Trockenbau Leistungen in Bad Kissingen
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#655e55]">
          Wir arbeiten sauber, zuverlässig und termingerecht.
         Unser Einsatzgebiet umfasst Bad Kissingen,
          Bad Brückenau, Fulda und die Rhön.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#655e55]">
            BauProService Rhön bietet professionelle
            Trockenbauarbeiten in Bad Kissingen,
            Bad Brückenau und Fulda an.
            Wir unterstützen private und gewerbliche
            Kunden bei Innenausbau,
            Spachtelarbeiten und Renovierung.
          </p>

          <h2 className="mt-14 text-3xl font-black text-[#121212]">
          Warum BauProService Rhön für Trockenbau in Bad Kissingen?
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#655e55]">
          Wir arbeiten sauber, termingerecht und zuverlässig.
          Unser Team betreut Projekte für Wohnungen,
          Häuser und kleinere Gewerbeobjekte in der Region.
</p>

<div className="mt-10 rounded-3xl border border-[#e5d9c4] bg-[#fbf6ed] p-8">

  <h2 className="text-3xl font-black text-[#121212]">
    Trockenbau Leistungen in Bad Kissingen
  </h2>

  <ul className="mt-6 space-y-4 text-lg leading-8 text-[#655e55]">
    <li>• Trockenbau Wände und Deckensysteme</li>
    <li>• Gipskartonmontage</li>
    <li>• Spachtelarbeiten Q1–Q4</li>
    <li>• Innenausbau für Wohnungen und Häuser</li>
    <li>• Renovierungsarbeiten</li>
    <li>• Deckenabhängungen</li>
    <li>• Trennwandsysteme</li>
  </ul>

</div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">

            <div className="rounded-2xl border border-[#e5d9c4] p-5">
              <h3 className="font-black text-xl">
                Trockenbauwände
              </h3>

              <p className="mt-3 text-[#655e55]">
                Montage moderner Trennwände.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e5d9c4] p-5">
              <h3 className="font-black text-xl">
                Abgehängte Decken
              </h3>

              <p className="mt-3 text-[#655e55]">
                Deckensysteme für Innenräume.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e5d9c4] p-5">
              <h3 className="font-black text-xl">
                Spachtelarbeiten Q1–Q4
              </h3>

              <p className="mt-3 text-[#655e55]">
                Glatte Oberflächen und Vorbereitung.
              </p>
            </div>

            <div className="rounded-2xl border border-[#e5d9c4] p-5">
              <h3 className="font-black text-xl">
                Innenausbau & Renovierung
              </h3>

              <p className="mt-3 text-[#655e55]">
                Ausbau und Modernisierung.
              </p>
            </div>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/innenausbau-bad-kissingen"
              className="rounded-2xl border border-[#e5d9c4] px-5 py-3 font-black hover:bg-[#fbf6ed]"
            >
              Innenausbau Bad Kissingen
            </Link>

            <Link
              href="/spachtelarbeiten-bad-kissingen"
              className="rounded-2xl border border-[#e5d9c4] px-5 py-3 font-black hover:bg-[#fbf6ed]"
            >
              Spachtelarbeiten Bad Kissingen
            </Link>

            <Link
              href="/renovierung-bad-kissingen"
              className="rounded-2xl border border-[#e5d9c4] px-5 py-3 font-black hover:bg-[#fbf6ed]"
            >
              Renovierung Bad Kissingen
            </Link>

            <Link
              href="/trockenbau-fulda"
              className="rounded-2xl border border-[#e5d9c4] px-5 py-3 font-black hover:bg-[#fbf6ed]"
            >
              Trockenbau Fulda
            </Link>

            <Link
            href="/innenausbau-fulda"
            className="rounded-2xl border border-[#e5d9c4] px-5 py-3 font-black hover:bg-[#fbf6ed]"
>
            Innenausbau Fulda
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}