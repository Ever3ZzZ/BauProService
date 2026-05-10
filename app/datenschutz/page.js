import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export const metadata = {
  title: "Datenschutz",
  description: `Datenschutzhinweise von ${siteConfig.name}.`,
  alternates: {
    canonical: "/datenschutz",
  },
};

function PrivacyCard({ title, children }) {
  return (
    <section className="rounded-[28px] border border-[#e6dbc8] bg-white p-8 shadow-[0_18px_60px_rgba(63,44,10,0.05)]">
      <h2 className="text-2xl font-black text-[#121212]">{title}</h2>
      <div className="mt-4 space-y-3 text-base leading-8 text-[#4f4a41]">
        {children}
      </div>
    </section>
  );
}

export default function DatenschutzPage() {
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
            Datenschutz
          </h1>
          <p className="mt-5 rounded-2xl border border-[#f0d89f] bg-[#fff7df] px-5 py-4 text-sm leading-7 text-[#6f5a25]">
            Diese Datenschutzerklärung ist als solide Ausgangsbasis für die aktuelle Website gedacht.
Vor Livegang sollten Hosting, Tracking, eingebundene Dienste und Unternehmensdaten final geprüft werden.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <PrivacyCard title="1. Verantwortlicher">
            <p>{siteConfig.legalName}</p>
            <p>Inhaber: {siteConfig.ownerName}</p>
            <p>{siteConfig.address.streetAddress}</p>
            <p>
              {siteConfig.address.postalCode} {siteConfig.address.addressLocality}
            </p>
            <p>E-Mail: {siteConfig.email}</p>
            <p>Telefon: {siteConfig.phoneDisplay}</p>
          </PrivacyCard>

          <PrivacyCard title="2. Allgemeine Hinweise zur Datenverarbeitung">
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist.
            </p>
            <p>
              Die Verarbeitung erfolgt nach den gesetzlichen Vorgaben, insbesondere der Datenschutz-Grundverordnung (DSGVO).
            </p>
          </PrivacyCard>

          <PrivacyCard title="3. Hosting und Server-Logfiles">
            <p>
              Beim Aufruf dieser Website können durch den Hosting-Provider technisch notwendige Daten in Server-Logfiles verarbeitet werden, zum Beispiel IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer, Browsertyp und Betriebssystem.

              Diese Verarbeitung erfolgt zur technischen Bereitstellung, Stabilität und Sicherheit der Website.
            </p>
            <p>
              Diese Verarbeitung erfolgt zur technischen Bereitstellung,
              Stabilitaet und Sicherheit der Website.
            </p>
          </PrivacyCard>

          <PrivacyCard title="4. Kontaktaufnahme per Telefon, E-Mail oder WhatsApp">
            <p>
              Wenn Sie uns per Telefon, E-Mail oder WhatsApp kontaktieren, verarbeiten wir die von Ihnen übermittelten Daten zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen.
            </p>
            <p>
              Bei einer Kontaktaufnahme über WhatsApp erfolgt die Kommunikation über WhatsApp Ireland Limited beziehungsweise verbundene Unternehmen von Meta.
              Dabei können personenbezogene Daten auch außerhalb der EU verarbeitet werden.
            </p>
          </PrivacyCard>

          <PrivacyCard title="5. Cookies und Tracking">
            <p>
              Nach aktuellem Stand verwendet diese Website keine einwilligungspflichtigen Analyse- oder Marketing-Cookies.
            </p>
            <p>
              Falls später Tracking-, Analyse- oder Drittanbieter-Tools eingebunden werden, muss diese Datenschutzerklärung entsprechend erweitert und gegebenenfalls ein Consent-Banner ergänzt werden.
            </p>
          </PrivacyCard>

          <PrivacyCard title="6. Ihre Rechte">
            <p>
              Sie haben im Rahmen der gesetzlichen Vorschriften insbesondere das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.

              Zudem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.
            </p>
            <p>
              Zudem besteht ein Beschwerderecht bei einer zustaendigen
              Datenschutzaufsichtsbehoerde.
            </p>
          </PrivacyCard>

          <PrivacyCard title="7. SSL- beziehungsweise TLS-Verschlüsselung">
            <p>
              Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- beziehungsweise TLS-Verschlüsselung.
            </p>
          </PrivacyCard>

          <PrivacyCard title="8. Stand dieser Datenschutzerklärung">
            <p>Stand: Mai 2026</p>
          </PrivacyCard>
        </div>
      </div>
    </main>
  );
}
