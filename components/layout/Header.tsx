import Link from "next/link";
import { NAV_LINKS, STUDIO_NAME, WHATSAPP_URL } from "@/constants";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl flex justify-between items-center px-6 py-4">
      <Link
        href="/"
        className="text-xl font-black tracking-widest text-on-surface font-headline uppercase"
      >
        {STUDIO_NAME}
      </Link>

      <nav className="hidden md:flex gap-8 items-center">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-headline tracking-tighter uppercase font-bold text-on-surface hover:text-secondary transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-on-secondary text-on-secondary-container px-6 py-2 font-headline uppercase font-bold text-sm hover:scale-105 active:scale-95 transition-all"
        >
          Agendamento
        </Link>
      </nav>

      {/* Mobile menu icon - purely visual; controlled via MobileNav */}
      <button
        className="md:hidden text-secondary"
        aria-label="Abrir menu"
        type="button"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  );
}
