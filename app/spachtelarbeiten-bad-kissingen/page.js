import Link from "next/link";

export const metadata = {
  title:
    "Spachtelarbeiten Bad Kissingen | Professionelle Wand- und Deckenarbeiten",
  description:
    "BauProService Rhön bietet professionelle Spachtelarbeiten in Bad Kissingen. Saubere Oberflächen, Wand- und Deckenbearbeitung sowie Vorbereitung für Malerarbeiten und Innenausbau.",
  alternates: {
    canonical: "/spachtelarbeiten-bad-kissingen",
  },
};

export default function SpachtelarbeitenBadKissingenPage() {
  return (
    <main className="bg-[#fbf8f2] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[32px] bg-white p-10 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">

          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a7755]">
            Spachtelarbeiten Bad Kissingen
          </p>

          <h1 className="mt-4 text-5xl font-black leading-tight tracking-[-0.04em] text-[#121212]">
            Professionelle Spachtelarbeiten in Bad Kissingen
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-[#5f5a52]">

            <p>
              BauProService Rhön führt professionelle Spachtelarbeiten
              in Bad Kissingen und Umgebung durch. Wir sorgen für glatte
              Oberflächen und eine saubere Vorbereitung von Wänden und
              Decken für weitere Ausbauarbeiten.
            </p>

            <p>
              Unsere Leistungen umfassen Spachtelarbeiten im Rahmen von
              Trockenbau, Innenausbau, Renovierung und Sanierung.
              Dabei achten wir auf präzise Ausführung und hochwertige
              Ergebnisse.
            </p>

            <p>
              Ob Neubau, Renovierung oder Modernisierung – wir unterstützen
              private und gewerbliche Kunden bei Wand- und Deckenarbeiten
              im gesamten Raum Bad Kissingen.
            </p>

            <p>
              Wir arbeiten in Bad Kissingen, Bad Brückenau, Fulda,
              Würzburg und der gesamten Rhön.
            </p>

          </div>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/innenausbau-bad-kissingen"
              className="rounded-2xl bg-[#ffbf12] px-6 py-3 font-black text-[#121212]"
            >
              Innenausbau ansehen
            </Link>

            <Link
              href="/trockenbau-bad-kissingen"
              className="rounded-2xl border border-[#e5d9c4] px-6 py-3 font-black text-[#121212]"
            >
              Trockenbau ansehen
            </Link>

          </div>

        </div>
      </div>
    </main>
  );
}