import { siteConfig } from "../lib/siteConfig";

export default function StructuredData() {
  const websiteUrl = siteConfig.siteUrl;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${websiteUrl}/#localbusiness`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: websiteUrl,
    image: [`${websiteUrl}/hero.png`, `${websiteUrl}/after1.png`],
    telephone: siteConfig.phoneHref,
    email: siteConfig.email,
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: siteConfig.phoneHref,
        email: siteConfig.email,
        areaServed: siteConfig.country,
        availableLanguage: ["de", "en"],
      },
    ],
    sameAs: [],
    makesOffer: siteConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${websiteUrl}/#website`,
    url: websiteUrl,
    name: siteConfig.name,
    inLanguage: "de-DE",
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${websiteUrl}/#organization`,
    name: siteConfig.name,
    url: websiteUrl,
    logo: `${websiteUrl}/favicon.ico`,
    contactPoint: localBusiness.contactPoint,
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: siteConfig.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service,
        areaServed: siteConfig.serviceAreas,
        provider: {
          "@id": `${websiteUrl}/#localbusiness`,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
    </>
  );
}
