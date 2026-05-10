import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title: "Impressum",
  description: `Impressum von ${siteConfig.name}.`,
  alternates: {
    canonical: "/impressum",
  },
};

function LegalCard({ title, children }) {
  return (
    <section className="rounded-[28px] border border-[#e6dbc8] bg-white p-8 shadow-[0_18px_60px_rgba(63,44,10,0.05)]">
      <h2 className="text-2xl font-black text-[#121212]">{title}</h2>
      <div className="mt-4 space-y-3 text-base leading-8 text-[#4f4a41]">
        {children}
      </div>
    </section>
  );
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f2]">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/"
          className="inline-flex rounded-full border border-[#e6dbc8] bg-white px-4 py-2 text-sm font-bold text-[#121212] transition hover:bg-[#f6efe1]"
        >
          Zurück zur StartSeite
        </Link>

        <div className="mt-8">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8a7755]">
            Rechtliches
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#121212] sm:text-5xl">
            Impressum
          </h1>
          <p className="mt-5 rounded-2xl border border-[#f0d89f] bg-[#fff7df] px-5 py-4 text-sm leading-7 text-[#6f5a25]">
            Alle Angaben wurden sorgfältig geprüft und entsprechen dem aktuellen Stand des Unternehmens.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <LegalCard title="Angaben gemäß § 5 DDG">
            <p>{siteConfig.legalName}</p>
            <p>Inhaber: {siteConfig.ownerName}</p>
            <p>{siteConfig.address.streetAddress}</p>
            <p>
              {siteConfig.address.postalCode} {siteConfig.address.addressLocality}
            </p>
            <p>Deutschland</p>
          </LegalCard>

          <LegalCard title="Kontakt">
            <p>Telefon: {siteConfig.phoneDisplay}</p>
            <p>E-Mail: {siteConfig.email}</p>
          </LegalCard>

          <LegalCard title="Umsatzsteuer">
            <p>{siteConfig.vatId}</p>
          </LegalCard>

          <LegalCard title="Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV">
            <p>{siteConfig.responsibleForContent}</p>
          </LegalCard>

          <LegalCard title="Haftung für Inhalte">
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              önnen wir jedoch keine Gewähr übernehmen.
            </p>
          </LegalCard>

          <LegalCard title="Haftung für Links">
            <p>
              Diese Website kann Links zu externen Websites enthalten. Für die
              Inhalte der verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </LegalCard>

          <LegalCard title="Urheberrecht">
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              dieser Website unterliegen dem deutschen Urheberrecht.
            </p>
          </LegalCard>
        </div>
      </div>
    </main>
  );
}
