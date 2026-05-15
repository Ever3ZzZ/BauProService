import Image from "next/image";
import Reveal from "./Reveal";

const services = [
  {
    title: "Trockenbau",
    description:
      "Wände, Decken und Trennsysteme sauber geplant und fachgerecht ausgeführt.",
    image: "/Trockenbau.jpg",
    imagePosition: "object-[58%_center]",
  },
  {
    title: "Spachtelarbeiten Q1-Q4",
    description:
      "Von der soliden Grundverspachtelung bis zur hochwertigen Oberfläche für moderne Innenräume.",
    image: "/Spachtelarbeiten.jpg",
    imagePosition: "object-[45%_center]",
  },
  {
    title: "Kabelverlegung im Hochbau",
    description:
      "Zuverlässige Verlegearbeiten im Rahmen von Neubau, Umbau und Sanierung.",
    image: "/Kabel.png",
    imagePosition: "object-[62%_center]",
  },
  {
    title: "Türenmontage",
    description:
      "Fachgerechte Montage von Innentüren mit sauberen Anschlüssen und präzisem Abschluss.",
    image: "/TureMontag.jpg",
    imagePosition: "object-[30%_center]",
  },
  {
    title: "Bodenverlegung",
    description:
      "Präzise Bodenarbeiten für Wohnräume, Büroräume und modernisierte Flächen.",
    image: "/Bodenverlegung.jpg",
    imagePosition: "object-[40%_center]",
  },
  {
    title: "Renovierung & Sanierung",
    description:
      "Komplette Unterstützung bei Modernisierung, Umbau und Instandsetzung aus einer Hand.",
    image: "/renovierung and sanierung.png",
    imagePosition: "object-[72%_center]",
  },
];

export default function ServicesNew({ id }) {
  return (
    <section
      id={id}
      className="bg-[linear-gradient(180deg,#f7f1e6_0%,#fbf8f2_100%)] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
            Leistungen
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.04em] text-[#121212] sm:text-5xl lg:text-6xl">
            Alles Wichtige fuer Trockenbau, Ausbau und Modernisierung.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655e55]">
            Klar strukturierte Leistungen, saubere Abwicklung und ein Ergebnis,
            das im Alltag genauso gut funktioniert, wie es aussieht.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              as="article"
              delay={index * 90}
              className="group relative min-h-[310px] overflow-hidden rounded-[30px] border border-[#eadfcd] bg-[#161616] p-8 shadow-[0_24px_70px_rgba(63,44,10,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_80px_rgba(63,44,10,0.14)]"
            >
              <Image
                src={service.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className={`absolute inset-0 object-cover opacity-38 transition duration-500 group-hover:scale-105 group-hover:opacity-46 ${service.imagePosition}`}
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,20,20,0.22)_0%,rgba(20,20,20,0.58)_44%,rgba(20,20,20,0.88)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,191,18,0.18),transparent_36%)]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffbf12] text-xl font-black text-[#121212] shadow-[0_8px_20px_rgba(255,191,18,0.2)]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="max-w-[12ch] text-2xl font-black leading-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-[28ch] text-[1.02rem] leading-7 text-white/82">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
