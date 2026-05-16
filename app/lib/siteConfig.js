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
    "https://www.bauproservice-rhoen.de",

  phoneDisplay: "+49 1522 4416907",
  phoneHref: "+4915224416907",

  whatsappHref:
    "https://wa.me/4915224416907?text=Hallo%2C%20ich%20möchte%20gerne%20ein%20Angebot%20anfragen.",

  email: "info@bauproservice-rhoen.de",

  address: {
    streetAddress: "Alexanderweg 27",
    postalCode: "97769",
    addressLocality: "Bad Brückenau",
    addressRegion: "Bayern",
    addressCountry: "DE",
  },

  responsibleForContent:
    "Serhii Kovalchuk, Alexanderweg 27, 97769 Bad Brückenau",

  locale: "de_DE",
  country: "DE",
  region: "Bayern",

  serviceAreas: [
    "Bad Kissingen",
    "Bad Brückenau",
    "Rhön",
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