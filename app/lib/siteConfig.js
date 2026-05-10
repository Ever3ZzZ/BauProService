export const siteConfig = {
  name: "BauProService Rhön",
  legalName: "BauProService Rhön",
  ownerName: "Serhii Kovalchuk",
  description:
    "Trockenbau, Innenausbau, Spachtelarbeiten, Bodenverlegung, Türenmontage sowie Renovierung und Sanierung in Bad Kissingen, Bad Brückenau, Fulda, Würzburg und Umgebung.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`
      : null) ||
    "http://localhost:3000",
  phoneDisplay: "+49-152-244-169-07",
  phoneHref: "+4915224416907",
  whatsappHref:
    "https://wa.me/4915224416907?text=Hallo%2C%20ich%20m%C3%B6chte%20gerne%20ein%20Angebot%20anfragen.",
  email: "info@bauproservice-rhoen.de",
  address: {
    streetAddress: "Babrükenau Alexanderweg 27",
    postalCode: "97769",
    addressLocality: "Babrükenau",
    addressRegion: "Bayern",
    addressCountry: "DE",
  },
  vatId: "USt-IdNr. DE123456789",
  responsibleForContent: "Serhii Kovalchuk, Babrükenau Alexanderweg 27, 97769 Babrükenau",
  locale: "de_DE",
  country: "DE",
  region: "Bayern",
  serviceAreas: [
    "Rhön",
    "Bad Kissingen",
    "Babrükenau",
    "Fulda",
    "Würzburg",
  ],
  services: [
    "Trockenbau",
    "Innenausbau",
    "Spachtelarbeiten",
    "Bodenverlegung",
    "Türenmontage",
    "Renovierung",
    "Sanierung",
  ],
};
