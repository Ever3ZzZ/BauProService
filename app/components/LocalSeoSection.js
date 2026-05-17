import Link from "next/link";
import Reveal from "./Reveal";

export default function LocalSeoSection() {
  return (
    <section className="bg-[#fffdfa] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="rounded-[34px] border border-[#e5d9c4] bg-white px-8 py-10 shadow-[0_22px_80px_rgba(68,47,10,0.06)] sm:px-12">

          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
            Trockenbau · Innenausbau · Handwerker in Bad Kissingen
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#121212] sm:text-5xl">
            Professioneller Trockenbau und Innenausbau in Bad Kissingen.
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <p className="text-lg leading-8 text-[#655e55]">
              BauProService Rhön ist Ihr zuverlässiger Ansprechpartner für
              Trockenbau, Innenausbau, Spachtelarbeiten und Renovierung in Bad
              Kissingen. Wir übernehmen saubere Ausbauarbeiten für Wohnungen,
              Häuser, Büros und kleinere Gewerbeobjekte. Dabei legen wir großen
              Wert auf Qualität, termingerechte Ausführung und eine saubere
              Arbeitsweise.
            </p>

            <p className="text-lg leading-8 text-[#655e55]">
              Unser Einsatzgebiet umfasst Bad Kissingen, Bad Brückenau, Fulda,
              Würzburg und die gesamte Rhön. Wenn Sie einen erfahrenen
              Handwerker für Trockenbau oder Innenausbau suchen, können Sie uns
              direkt telefonisch oder per WhatsApp kontaktieren und ein
              unverbindliches Angebot anfragen.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-black text-[#121212]">
              Unsere Leistungen in der Region
            </h3>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

              <Link
                href="/trockenbau-bad-kissingen"
                className="rounded-2xl border border-[#e5d9c4] p-5 font-black text-[#121212] transition hover:bg-[#fbf6ed]"
              >
                Trockenbau Bad Kissingen
              </Link>

              <Link
                href="/innenausbau-bad-kissingen"
                className="rounded-2xl border border-[#e5d9c4] p-5 font-black text-[#121212] transition hover:bg-[#fbf6ed]"
              >
                Innenausbau Bad Kissingen
              </Link>

              <Link
                href="/spachtelarbeiten-bad-kissingen"
                className="rounded-2xl border border-[#e5d9c4] p-5 font-black text-[#121212] transition hover:bg-[#fbf6ed]"
              >
                Spachtelarbeiten Bad Kissingen
              </Link>

              <Link
                href="/renovierung-bad-kissingen"
                className="rounded-2xl border border-[#e5d9c4] p-5 font-black text-[#121212] transition hover:bg-[#fbf6ed]"
              >
                Renovierung Bad Kissingen
              </Link>

              <Link
                href="/trockenbau-fulda"
                className="rounded-2xl border border-[#e5d9c4] p-5 font-black text-[#121212] transition hover:bg-[#fbf6ed]"
              >
                Trockenbau Fulda
              </Link>

              <Link
                href="/innenausbau-fulda"
                className="rounded-2xl border border-[#e5d9c4] p-5 font-black text-[#121212] transition hover:bg-[#fbf6ed]"
              >
                Innenausbau Fulda
              </Link>

            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/trockenbau-bad-kissingen"
              className="inline-flex items-center rounded-2xl bg-[#ffbf12] px-6 py-3.5 text-base font-black text-[#121212] shadow-[0_14px_34px_rgba(255,191,18,0.18)] transition hover:bg-[#f2b400]"
            >
              Trockenbau in Bad Kissingen
            </Link>

            <Link
              href="/trockenbau-handwerker-innenausbau-bad-kissingen"
              className="inline-flex items-center rounded-2xl border border-[#e2d4ba] bg-white px-6 py-3.5 text-base font-black text-[#121212] transition hover:bg-[#fbf6ed]"
            >
              Innenausbau & Handwerker ansehen
            </Link>

          </div>

        </Reveal>
      </div>
    </section>
  );
}