const areas = [
  "Rhön",
  "Bad Kissingen",
  "Bad Brückenau",
  "Fulda",
  "Würzburg",
  "Umgebung",
];

export default function Einsatzgebiet({ id }) {
  return (
    <section id={id} className="bg-[#f7f4ee] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[34px] border border-[#e6dbc8] bg-white px-8 py-12 shadow-[0_24px_80px_rgba(70,47,10,0.08)] sm:px-12">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
            Einsatzgebiet
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#121212] sm:text-5xl">
                Einsatzorte in der Region.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655e55]">
                Wir sind in der Rhön, in Bad Kissingen, Bad Brückenau, Fulda,
                Würzburg und Umgebung tätig. Unsere Projekte reichen von
                privaten Wohnungen bis zu gewerblichen Innenausbauten.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {areas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl bg-[#f6efe1] px-4 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-[#2c2a26]"
                >
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
