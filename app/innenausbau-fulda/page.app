import Link from "next/link";

export const metadata = {
  title: "Innenausbau Fulda | BauProService Rhön",
  description:
    "Innenausbau in Fulda. BauProService Rhön unterstützt bei Trockenbau, Renovierung, Spachtelarbeiten und Ausbauarbeiten.",
  alternates: {
    canonical: "/innenausbau-fulda",
  },
};

export default function InnenausbauFuldaPage() {
  return (
    <main className="bg-[#fbf8f2] min-h-screen py-24 px-6">
      <div className="mx-auto max-w-4xl rounded-[34px] bg-white p-10 shadow-[0_22px_80px_rgba(68,47,10,0.06)]">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
          INNENAUSBAU FULDA
        </p>

        <h1 className="mt-4 text-5xl font-black leading-tight tracking-[-0.04em] text-[#121212]">
          Innenausbau in Fulda und Umgebung
        </h1>

        <div className="mt-8 space-y-8 text-lg leading-9 text-[#655e55]">
          <p>
            BauProService Rhön unterstützt private und gewerbliche Kunden beim
            Innenausbau in Fulda. Wir begleiten Ausbauprojekte von der Planung
            bis zur Umsetzung.
          </p>

          <p>
            Unsere Leistungen umfassen Trockenbau, Spachtelarbeiten,
            Bodenverlegung, Türenmontage sowie Renovierung und Sanierung.
          </p>

          <p>
            Wir achten auf saubere Ausführung, hochwertige Ergebnisse und
            zuverlässige Abläufe bei Wohn- und Gewerbeobjekten.
          </p>

          <p>
            Wir arbeiten in Fulda, Bad Kissingen, Bad Brückenau, Würzburg und
            der gesamten Rhön.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/trockenbau-fulda"
            className="rounded-2xl bg-[#ffbf12] px-6 py-3 font-black text-[#121212]"
          >
            Trockenbau Fulda
          </Link>

          <Link
            href="/innenausbau-bad-kissingen"
            className="rounded-2xl border border-[#e5d9c4] px-6 py-3 font-black text-[#121212]"
          >
            Innenausbau Bad Kissingen
          </Link>
        </div>
      </div>
    </main>
  );
}