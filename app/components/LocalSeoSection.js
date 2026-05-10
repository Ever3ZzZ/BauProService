import Reveal from "./Reveal";

export default function LocalSeoSection() {
  return (
    <section className="bg-[#fffdfa] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="rounded-[34px] border border-[#e5d9c4] bg-white px-8 py-10 shadow-[0_22px_80px_rgba(68,47,10,0.06)] sm:px-12">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
            Trockenbau in der Region
          </p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] text-[#121212] sm:text-5xl">
            Innenausbau, Trockenbau und Renovierung in Bad Kissingen, Fulda und
            Umgebung.
          </h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <p className="text-lg leading-8 text-[#655e55]">
              BauProService Rhön unterstützt private und gewerbliche Kunden
              bei Trockenbau, Spachtelarbeiten, Bodenverlegung,
              Türenmontage, Renovierung und Sanierung. Wir arbeiten sauber,
              strukturiert und mit klaren Absprachen, damit Projekte in
              Wohnungen, Häusern und kleineren Gewerbeobjekten verlässlich
              umgesetzt werden.
            </p>
            <p className="text-lg leading-8 text-[#655e55]">
              Unser Einsatzgebiet umfasst die Rhön sowie Bad Kissingen, Bad
              Brückenau, Fulda, Würzburg und umliegende Orte. Wenn Sie einen
              Handwerksbetrieb für Innenausbau, Modernisierung oder saubere
              Oberflächen suchen, ist eine schnelle und unverbindliche Anfrage
              direkt über Telefon oder WhatsApp möglich.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
