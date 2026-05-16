import HeroNew from "./components/HeroNew";
import ServicesNew from "./components/ServicesNew";
import Contact from "./components/Contact";
import Einsatzgebiet from "./components/einsatzgebiet";
import Refferenzen from "./components/Referenzen";
import WhyUs from "./components/WhyUs";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import SiteHeader from "./components/SiteHeader";
import StructuredData from "./components/StructuredData";
import LocalSeoSection from "./components/LocalSeoSection";
import SiteFooter from "./components/SiteFooter";

export const metadata = {
  title:
    "Trockenbau & Innenausbau in Bad Kissingen | BauProService Rhön",

  description:
    "BauProService Rhön ist Ihr Ansprechpartner für Trockenbau, Innenausbau, Spachtelarbeiten und Renovierung in Bad Kissingen, Bad Brückenau, Fulda und Umgebung.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Trockenbau & Innenausbau in Bad Kissingen | BauProService Rhön",

    description:
      "Professioneller Trockenbau, Innenausbau, Renovierung und Spachtelarbeiten in Bad Kissingen, Bad Brückenau, Fulda und Umgebung.",

    url: "/",

    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Trockenbau und Innenausbau in Bad Kissingen",
      },
    ],
  },
};

export default function Home() {
  return (
    <main className="bg-[#fbf8f2]">
      <StructuredData />
      <SiteHeader />

      <section id="home">
        <HeroNew />
      </section>

      <ServicesNew id="leistungen" />

      <WhyUs />

      <Refferenzen id="referenzen" />

      <ProcessSection />

      <TestimonialsSection />

      <Einsatzgebiet id="einsatzgebiet" />

      <LocalSeoSection />

      <Contact id="kontakt" />

      <SiteFooter />
    </main>
  );
}
