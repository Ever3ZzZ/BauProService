import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title: "Trockenbau Bad Kissingen",
  description:
    "Trockenbau in Bad Kissingen fuer Wohnungen, Haeuser und kleinere Gewerbeobjekte. BauProService Rhoen fuer Innenausbau, Spachtelarbeiten und saubere Renovierung.",
  alternates: {
    canonical: "/trockenbau-bad-kissingen",
  },
  openGraph: {
    title: "Trockenbau Bad Kissingen | BauProService Rhoen",
    description:
      "Trockenbau in Bad Kissingen fuer Wohnungen, Haeuser und kleinere Gewerbeobjekte. Innenausbau, Spachtelarbeiten und Renovierung.",
    url: "/trockenbau-bad-kissingen",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Trockenbau Bad Kissingen",
      },
    ],
  },
};

const benefits = [
  "Trockenbau fuer Wohnraeume, Altbau und Modernisierung",
  "Saubere Spachtelarbeiten und vorbereitete Oberflaechen",
  "Innenausbau mit klaren Absprachen und direktem Kontakt",
  "Einsatz in Bad Kissingen, Bad Brueckenau und Umgebung",
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
            Zurueck zur Startseite
          </Link>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
            Trockenbau Bad Kissingen
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#121212] sm:text-5xl lg:text-6xl">
            Ihr Ansprechpartner fuer Trockenbau in Bad Kissingen.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#655e55]">
            BauProService Rhoen uebernimmt Trockenbau, Innenausbau,
            Spachtelarbeiten, Bodenverlegung und Renovierung fuer Projekte in
            Bad Kissingen. Ob einzelne Innenraeume, Modernisierung oder
            saubere Ausbauarbeiten: wichtig sind klare Absprachen, ein
            ordentliches Ergebnis und ein Ablauf, auf den Sie sich verlassen
            koennen.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-[#e6dbc8] bg-white px-5 py-4 text-base font-bold text-[#27231d] shadow-[0_12px_30px_rgba(68,47,10,0.05)]"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[30px] border border-[#e6dbc8] bg-white p-8 shadow-[0_18px_60px_rgba(68,47,10,0.05)]">
            <h2 className="text-3xl font-black text-[#121212]">
              Welche Trockenbauarbeiten wir in Bad Kissingen anbieten
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-[#655e55]">
              <p>
                Wir unterstuetzen bei klassischen Trockenbauarbeiten in
                Wohnungen, Einfamilienhaeusern und kleineren Gewerbeobjekten.
                Dazu gehoeren unter anderem abgehängte Decken, Verkleidungen,
                Trennwaende, Vorbereitungen fuer moderne Innenraeume und saubere
                Anschluesse fuer den weiteren Ausbau.
              </p>
              <p>
                Ebenso wichtig sind bei solchen Projekten die Oberflaechen:
                Spachtelarbeiten, Vorbereitung fuer Malerarbeiten, saubere
                Uebergaenge und ein Gesamtbild, das im Alltag hochwertig wirkt.
              </p>
            </div>
          </div>

          <div className="rounded-[30px] border border-[#e6dbc8] bg-[#171717] p-8 text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
            <h2 className="text-3xl font-black">
              Schnell Kontakt aufnehmen
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/76">
              Wenn Sie nach Trockenbau in Bad Kissingen suchen, koennen Sie uns
              direkt anrufen oder per WhatsApp schreiben. So laesst sich eine
              erste Einschaetzung schnell abstimmen.
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
