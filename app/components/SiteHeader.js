"use client";

const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#einsatzgebiet", label: "Einsatzgebiet" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function SiteHeader() {
  return (
    <>
      <header className="hidden border-b border-[#eadfcb] bg-white/90 shadow-[0_12px_34px_rgba(51,35,7,0.05)] backdrop-blur-xl md:block">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="flex items-center justify-between gap-6 py-3">
            <a
              href="#home"
              className="text-base font-black tracking-[-0.03em] text-[#121212] lg:text-lg"
              aria-label="BauProService Rhoen Startseite"
            >
              BauProService Rhoen
            </a>

            <div className="flex items-center gap-1 rounded-full border border-[#eadfcb] bg-[#fffaf1] p-1.5 shadow-[0_10px_30px_rgba(74,53,14,0.05)]">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-black text-[#5b554a] transition hover:bg-white hover:text-[#121212] hover:shadow-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <div className="fixed inset-x-0 top-3 z-50 px-3 md:hidden">
        <nav className="mx-auto flex max-w-[560px] items-center justify-between rounded-full border border-[#d7c6a8] bg-[rgba(255,250,241,0.94)] px-3 py-1.5 shadow-[0_16px_34px_rgba(51,35,7,0.14),0_2px_0_rgba(255,255,255,0.55)_inset] backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex-1 px-2 py-2.5 text-center text-[0.82rem] font-black leading-none text-[#4f4a41] transition hover:text-[#121212]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
