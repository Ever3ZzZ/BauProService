import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Anfrage senden",
    text: "Sie melden sich kurz mit Projekt, Ort und Wunschzeitraum. Wir reagieren schnell und klar.",
  },
  {
    number: "02",
    title: "Projekt abstimmen",
    text: "Wir besprechen Umfang, Materialien, Prioritäten und den sinnvollsten Ablauf für Ihr Vorhaben.",
  },
  {
    number: "03",
    title: "Angebot erhalten",
    text: "Sie bekommen eine verständliche Grundlage für Entscheidung, Budget und Zeitplanung.",
  },
  {
    number: "04",
    title: "Sauber ausführen",
    text: "Danach folgt die strukturierte Umsetzung mit Fokus auf Qualität, Tempo und ordentliche Details.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#fbf8f2] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
            So läuft Ihr Projekt ab
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#121212] sm:text-5xl">
            Klarer Ablauf von der ersten Anfrage bis zur sauberen Übergabe.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.number}
              as="article"
              delay={index * 90}
              className="rounded-[28px] border border-[#eadfcd] bg-white p-7 shadow-[0_20px_70px_rgba(63,44,10,0.07)]"
            >
              <div className="text-sm font-black uppercase tracking-[0.18em] text-[#b58b22]">
                Schritt {step.number}
              </div>
              <h3 className="mt-4 text-2xl font-black text-[#151515]">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#6b6459]">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
