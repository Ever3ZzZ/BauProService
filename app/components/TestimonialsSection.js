import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Familie Wagner",
    location: "Bad Kissingen",
    work: "Trockenbau im Dachgeschoss",
    text: "Von der ersten Besichtigung bis zur Fertigstellung lief alles unkompliziert. Die Arbeiten wurden sauber ausgeführt und die Baustelle jeden Tag ordentlich hinterlassen. Mit dem Ergebnis sind wir sehr zufrieden.",
  },
  {
    name: "Herr Becker",
    location: "Fulda",
    work: "Spachtelarbeiten Q3–Q4 vor Malerarbeiten",
    text: "Die Wände und Decken sind absolut gleichmäßig geworden und direkt bereit für den nächsten Arbeitsschritt. Termine wurden eingehalten und die Kommunikation war jederzeit klar.",
  },
  {
    name: "Familie Hofmann",
    location: "Bad Brückenau",
    work: "Bodenverlegung im Wohnbereich",
    text: "Sehr saubere Arbeit und ein hochwertiges Endergebnis. Der neue Boden wirkt modern und wurde präzise verlegt. Wir würden die Firma jederzeit wieder beauftragen.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-[#ffbf12]" aria-label="5 von 5 Sternen">
      <span>{"\u2605"}</span>
      <span>{"\u2605"}</span>
      <span>{"\u2605"}</span>
      <span>{"\u2605"}</span>
      <span>{"\u2605"}</span>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#fbf8f2_0%,#f6efe1_100%)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
            Kundenstimmen
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#121212] sm:text-5xl">
            Das sagen unsere Kunden.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655e55]">
            Echte Rückmeldungen unserer Kunden aus der Region – ehrlich, direkt und aus abgeschlossenen Projekten.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal
              key={`${item.name}-${item.work}`}
              as="article"
              delay={index * 110}
              className="rounded-[30px] border border-[#e4d7c2] bg-white p-7 shadow-[0_20px_70px_rgba(63,44,10,0.07)]"
            >
              <Stars />
              <p className="mt-5 text-lg leading-8 text-[#2a2722]">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="mt-6 border-t border-[#eee4d5] pt-5">
                <div className="text-lg font-black text-[#121212]">
                  {item.name}
                </div>
                <div className="mt-1 text-sm font-bold uppercase tracking-[0.12em] text-[#8a7755]">
                  {item.location}
                </div>
                <div className="mt-3 text-sm leading-6 text-[#6b6459]">
                  Arbeit: {item.work}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
