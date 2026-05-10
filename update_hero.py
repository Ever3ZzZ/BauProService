from pathlib import Path
content = '''import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <Image
        src="/hero.jpg"
        alt="Trockenbau und Innenausbau"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 text-white">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-300 mb-6">
          Trockenbau & Innenausbau in der Rhön
        </p>
        <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
          BauProService Rhön
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/85 sm:text-xl">
          Schnell, sauber und zuverlässig: Ihr Partner für Innenausbau, Renovierung und Sanierung im Raum Bad Kissingen, Bad Brückenau, Fulda und Würzburg.
        </p>
      </div>
    </section>
  );
}
'''
Path('app/components/Hero.js').write_text(content, encoding='utf-8')
print('updated Hero.js')
