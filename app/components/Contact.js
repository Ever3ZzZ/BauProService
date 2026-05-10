import { siteConfig } from "../lib/siteConfig";

export default function Contact({ id }) {
  return (
    <section id={id} className="bg-[#171717] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffbf12]">
              Kontakt
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">
              Jetzt unverbindlich anfragen und Ihr Projekt sauber starten.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              Raum Bad Kissingen, Bad Brückenau, Fulda und Würzburg. Wir
              melden uns schnell zurück und besprechen das passende Vorgehen
              für Ihr Vorhaben.
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-[28px] bg-white/6 p-6 ring-1 ring-white/10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/55">
                Direktkontakt
              </p>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="mt-3 block text-3xl font-black text-white"
              >
                {siteConfig.phoneDisplay}
              </a>
              <p className="mt-4 text-base leading-7 text-white/72">
                Kostenlose Erstabsprache, klares Angebot und verlässliche
                Terminabstimmung.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex items-center justify-center rounded-2xl bg-[#ffbf12] px-6 py-4 text-lg font-black text-[#121212] transition hover:bg-[#f2b400]"
              >
                Jetzt anrufen
              </a>
              <a
                href={siteConfig.whatsappHref}
                className="inline-flex items-center justify-center rounded-2xl border border-green-400/18 bg-green-400/8 px-6 py-4 text-lg font-bold text-white transition hover:bg-green-400/14"
              >
                Per WhatsApp schreiben
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
