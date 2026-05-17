import Link from "next/link";

export const metadata = {
  title: "Renovierung Bad Kissingen | BauProService Rhön",
  description:
    "Renovierung und Sanierung in Bad Kissingen. BauProService Rhön unterstützt private und gewerbliche Kunden bei Modernisierung, Innenausbau und Ausbauarbeiten.",
  alternates: {
    canonical: "/renovierung-bad-kissingen",
  },
};

export default function RenovierungBadKissingenPage() {
  return (
    <main className="bg-[#fbf8f2] min-h-screen py-24 px-6">
      <div className="mx-auto max-w-4xl rounded-[34px] bg-white p-10 shadow-[0_22px_80px_rgba(68,47,10,0.06)]">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
          RENOVIERUNG BAD KISSINGEN
        </p>

        <h1 className="mt-4 text-5xl font-black leading-tight tracking-[-0.04em] text-[#121212]">
          Renovierung und Sanierung in Bad Kissingen
        </h1>

        <div className="mt-8 space-y-8 text-lg leading-9 text-[#655e55]">
          <p>
            BauProService Rhön unterstützt Kunden bei Renovierung und
            Sanierungsarbeiten in Bad Kissingen und Umgebung. Wir begleiten
            Modernisierung, Umbau und Ausbauarbeiten für Wohnungen, Häuser und
            kleinere Gewerbeobjekte.
          </p>

          <p>
            Unsere Leistungen umfassen Trockenbau, Innenausbau,
            Spachtelarbeiten, Bodenverlegung und vorbereitende Arbeiten für
            Renovierungsprojekte. Wir achten auf saubere Ausführung,
            zuverlässige Abläufe und hochwertige Ergebnisse.
          </p>

          <p>
            Ob Teilrenovierung oder komplette Modernisierung – wir unterstützen
            private und gewerbliche Kunden bei Ausbau- und Sanierungsarbeiten.
          </p>

          <p>
            Wir arbeiten in Bad Kissingen, Bad Brückenau, Fulda, Würzburg und
            der gesamten Rhön.
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
    </main>
  );
}