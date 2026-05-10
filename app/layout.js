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
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "BauProService Rhoen | Trockenbau & Innenausbau",
    template: "%s | BauProService Rhoen",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Trockenbau",
    "Innenausbau",
    "Spachtelarbeiten",
    "Bodenverlegung",
    "Renovierung",
    "Sanierung",
    "Bad Kissingen",
    "Fulda",
    "Bad Brueckenau",
    "Wuerzburg",
    "Rhoen",
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
    title: "BauProService Rhoen | Trockenbau & Innenausbau",
    description: siteConfig.description,
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "BauProService Rhoen - Trockenbau und Innenausbau",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BauProService Rhoen | Trockenbau & Innenausbau",
    description: siteConfig.description,
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
