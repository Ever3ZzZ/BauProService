from pathlib import Path
content = '''export default function Services({ id }) {
  const services = [
    {
      title: "Trockenbau",
      description: "Wände, Decken und Trennwände sauber geplant und fachgerecht ausgeführt.",
    },
    {
      title: "Spachtelarbeiten Q1–Q4",
      description: "Von der soliden Grundverspachtelung bis zur hochwertigen Oberfläche.",
    },
    {
      title: "Kabelverlegung im Hochbau",
      description: "Zuverlässige Verlegearbeiten im Rahmen von Neubau, Umbau und Sanierung.",
    },
    {
      title: "Türenmontage",
      description: "Fachgerechte Montage von Innentüren mit sauberem Abschluss.",
    },
    {
      title: "Bodenverlegung",
      description: "Präzise Bodenarbeiten für Wohnräume, Büros und modernisierte Flächen.",
    },
    {
      title: "Renovierung & Sanierung",
      description: "Komplette Unterstützung bei Modernisierung, Umbau und Instandsetzung.",
    },
  ];

  return (
    <section id={id} className="py-24 bg-[#f8f1e6]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.25em] uppercase text-[#5c533f] mb-4">
            Leistungen
          </p>
          <h2 className="text-5xl font-bold leading-tight text-black sm:text-6xl">
            Alles Wichtige für Trockenbau, Ausbau und Modernisierung.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[30px] border border-white/80 bg-white/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9eedf] text-2xl text-[#3a4d3c]">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              <p className="text-sm leading-6 text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'''
Path('app/components/Services.js').write_text(content, encoding='utf-8')
print('updated Services.js')
