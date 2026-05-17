import Link from "next/link";

export const metadata = {
  title: "Trockenbau Fulda | BauProService Rhön",
  description:
    "Trockenbau in Fulda und Umgebung. BauProService Rhön unterstützt bei Innenausbau, Spachtelarbeiten, Renovierung und Ausbauarbeiten.",
  alternates: {
    canonical: "/trockenbau-fulda",
  },
};

export default function TrockenbauFuldaPage() {
  return (
    <main className="bg-[#fbf8f2] min-h-screen py-24 px-6">
      <div className="mx-auto max-w-4xl rounded-[34px] bg-white p-10 shadow-[0_22px_80px_rgba(68,47,10,0.06)]">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
          TROCKENBAU FULDA
        </p>

        <h1 className="mt-4 text-5xl font-black leading-tight tracking-[-0.04em] text-[#121212]">
          Trockenbau in Fulda und Umgebung
        </h1>

        <div className="mt-8 space-y-8 text-lg leading-9 text-[#655e55]">
          <p>
            BauProService Rhön bietet Trockenbauarbeiten in Fulda für private
            und gewerbliche Kunden an. Wir unterstützen bei Ausbauprojekten,
            Innenausbau und Modernisierung.
          </p>

          <p>
            Unsere Leistungen umfassen Trockenbau, Spachtelarbeiten,
            Bodenverlegung, Türenmontage sowie Renovierung und Sanierung.
          </p>

          <p>
            Wir achten auf saubere Ausführung, zuverlässige Abläufe und
            hochwertige Ergebnisse für Wohnungen, Häuser und kleinere
            Gewerbeobjekte.
          </p>

          <p>
            Unser Einsatzgebiet umfasst Fulda, Bad Kissingen, Bad Brückenau,
            Würzburg und die gesamte Rhön.
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
            Trockenbau Bad Kissingen
          </Link>
        </div>
      </div>
    </main>
  );
}