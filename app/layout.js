import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "BauProService Rhön | Trockenbau & Innenausbau",
    template: "%s | BauProService Rhön",
  },

  icons: {
    icon: "/BPR.png",
  },


  description: siteConfig.description,

  applicationName: siteConfig.name,

  keywords: [
    "Trockenbau Bad Kissingen",
    "Innenausbau Bad Kissingen",
    "Trockenbauer Bad Kissingen",
    "Handwerker Bad Kissingen",
    "Spachtelarbeiten Bad Kissingen",
    "Renovierung Bad Kissingen",
    "Sanierung Bad Kissingen",
    "Bodenverlegung Bad Kissingen",
    "Trockenbau Fulda",
    "Innenausbau Fulda",
    "Trockenbau Rhön",
    "Innenausbau Rhön",
    "Bad Kissingen",
    "Bad Brückenau",
    "Fulda",
    "Würzburg",
    "Rhön",
  ],

  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/",
    },
  },

  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: siteConfig.name,

    title: "BauProService Rhön | Trockenbau & Innenausbau",

    description:
      "Professioneller Trockenbau, Innenausbau, Spachtelarbeiten und Renovierung in Bad Kissingen, Bad Brückenau, Fulda und Umgebung.",

    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "BauProService Rhön - Trockenbau und Innenausbau",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "BauProService Rhön | Trockenbau & Innenausbau",

    description:
      "Professioneller Trockenbau und Innenausbau in Bad Kissingen, Fulda und der Rhön.",

    images: ["/hero.png"],
  },

  category: "construction",

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}