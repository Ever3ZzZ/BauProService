import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#e6dbc8] bg-[#f8f3ea]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <p className="text-lg font-black text-[#121212]">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-[#655e55]">
            Trockenbau, Innenausbau, Spachtelarbeiten, Bodenverlegung und
            Renovierung in Bad Kissingen, Bad Brückenau, Fulda, Würzburg und
            Umgebung.
          </p>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a7755]">
            Kontakt
          </p>
          <div className="mt-3 space-y-2 text-sm text-[#3b3832]">
            <p>{siteConfig.phoneDisplay}</p>
            <p>{siteConfig.email}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8a7755]">
            Rechtliches
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm font-bold text-[#3b3832]">
            <Link href="/impressum" className="transition hover:text-[#121212]">
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition hover:text-[#121212]"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
