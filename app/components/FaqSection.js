const faqItems = [
  {
    question: "Welche Leistungen übernehmen Sie?",
    answer:
      "Vor allem Trockenbau, Spachtelarbeiten, Innenausbau, Bodenverlegung, Türenmontage sowie Renovierungs- und Sanierungsarbeiten.",
  },
  {
    question: "Arbeiten Sie nur in großen Projekten?",
    answer:
      "Nein. Wir unterstützen sowohl bei kleineren Innenausbauarbeiten als auch bei größeren Modernisierungsprojekten.",
  },
  {
    question: "In welchen Regionen sind Sie unterwegs?",
    answer:
      "Vor allem in der Rhön, in Bad Kissingen, Bad Brückenau, Fulda, Würzburg und den umliegenden Orten.",
  },
  {
    question: "Wie schnell bekomme ich eine Rückmeldung?",
    answer:
      "In der Regel zeitnah nach Ihrer Anfrage. Ziel ist immer eine schnelle und unkomplizierte Erstabsprache.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#f6efe1_0%,#fbf8f2_100%)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
              FAQ
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-[#121212] sm:text-5xl">
              Häufige Fragen vor dem Start.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#655e55]">
              Dieser Bereich füllt die Seite nicht nur optisch, sondern nimmt
              Unsicherheit raus und macht die Kontaktaufnahme leichter.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-[24px] border border-[#e4d7c2] bg-white p-6 shadow-[0_18px_60px_rgba(63,44,10,0.06)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl font-black text-[#151515]">
                  <span>{item.question}</span>
                  <span className="text-[#b58b22] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-7 text-[#6b6459]">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
