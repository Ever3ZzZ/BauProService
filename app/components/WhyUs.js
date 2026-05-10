import Reveal from "./Reveal";

const points = [
  {
    kicker: "01",
    title: "Saubere Baustelle",
    text: "Wir arbeiten ordentlich, strukturiert und mit Blick auf eine klare, stressfreie Übergabe.",
  },
  {
    kicker: "02",
    title: "Verlässliche Termine",
    text: "Klare Absprachen, realistische Zeitfenster und ein Ablauf, auf den man sich verlassen kann.",
  },
  {
    kicker: "03",
    title: "Regionale Nähe",
    text: "Kurze Wege in der Rhön, in Fulda, Bad Kissingen, Bad Brückenau und Umgebung.",
  },
  {
    kicker: "04",
    title: "Passende Lösungen",
    text: "Ob Wohnung, Haus oder Gewerbe: Wir richten die Ausführung nach Projekt, Budget und Zielbild aus.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#171717] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffbf12]">
              Warum BauProService
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              Mehr Vertrauen, mehr Klarheit, weniger Baustellenstress.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
              Gute Handwerkseiten wirken nicht nur schön, sie beantworten auch
              ungestellte Fragen. Genau dafür ist dieser Bereich da.
            </p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((point, index) => (
              <Reveal
                key={point.title}
                as="article"
                delay={90 + index * 80}
                className="rounded-[28px] border border-white/10 bg-white/6 p-7 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm"
              >
                <div className="mb-5 inline-flex rounded-full bg-[#ffbf12] px-3 py-1 text-sm font-black text-[#121212]">
                  {point.kicker}
                </div>
                <h3 className="text-2xl font-black text-white">
                  {point.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-white/72">
                  {point.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
