import Link from "next/link";

export const metadata = {
  title:
    "Innenausbau Bad Kissingen | Handwerker für Renovierung & Ausbau",
  description:
    "BauProService Rhön ist Ihr Ansprechpartner für Innenausbau in Bad Kissingen. Saubere Renovierung, Trockenbau, Spachtelarbeiten und professionelle Ausbauarbeiten.",
  alternates: {
    canonical: "/innenausbau-bad-kissingen",
  },
};

export default function InnenausbauBadKissingenPage() {
  return (
    <main className="bg-[#fbf8f2] py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-[32px] bg-white p-10 shadow-[0_20px_70px_rgba(0,0,0,0.06)]">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8a7755]">
            Innenausbau Bad Kissingen
          </p>

          <h1 className="mt-4 text-5xl font-black leading-tight tracking-[-0.04em] text-[#121212]">
            Professioneller Innenausbau in Bad Kissingen
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-[#5f5a52]">
            <p>
              BauProService Rhön unterstützt private und gewerbliche Kunden
              beim professionellen Innenausbau in Bad Kissingen und Umgebung.
              Wir übernehmen saubere Ausbauarbeiten für Wohnungen, Häuser,
              Büros und kleinere Gewerbeobjekte.
            </p>

            <p>
              Unser Leistungsspektrum umfasst Trockenbau,
              Spachtelarbeiten, Bodenverlegung, Türenmontage,
              Renovierung und Sanierung. Dabei achten wir auf eine
              ordentliche Ausführung, klare Kommunikation und zuverlässige
              Termine.
            </p>

            <p>
              Wenn Sie einen zuverlässigen Handwerker für Innenausbau
              in Bad Kissingen suchen, begleiten wir Ihr Projekt von der
              Planung bis zur fertigen Umsetzung.
            </p>

            <p>
              BauProService Rhön arbeitet in Bad Kissingen,
              Bad Brückenau, Fulda, Würzburg und der gesamten Rhön.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="rounded-2xl bg-[#ffbf12] px-6 py-3 font-black text-[#121212] transition hover:bg-[#f0b400]"
            >
              Zur Startseite
            </Link>

            <Link
              href="/trockenbau-bad-kissingen"
              className="rounded-2xl border border-[#e5d9c4] px-6 py-3 font-black text-[#121212] transition hover:bg-[#faf6ee]"
            >
              Trockenbau ansehen
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}