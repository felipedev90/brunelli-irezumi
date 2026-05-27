import Link from "next/link";
import {
  INSTAGRAM_URL,
  MAPS_URL,
  NAV_LINKS,
  STUDIO_NAME,
  WHATSAPP_URL,
} from "@/constants";

const SOCIAL_LINKS = [
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "WhatsApp", href: WHATSAPP_URL },
  { label: "The garden", href: MAPS_URL },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant">
      {/* Container Principal: Usa Grid para distribuir o espaço */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Lado Esquerdo: Logo e Descrição (Ocupa 5 colunas no desktop) */}
        <div className="md:col-span-5 flex flex-col justify-center items-center md:items-start text-center md:text-left m-auto">
          <h2 className="font-headline text-2xl font-bold text-on-surface mb-2">
            {STUDIO_NAME}
          </h2>
          <p className="font-body text-sm leading-relaxed text-on-surface/60 max-w-xs">
            Eterno estudante da <strong>tatuagem japonesa</strong>
          </p>
        </div>

        {/* Divisor Vertical (Apenas Desktop) - Ocupa 1 coluna */}
        <div className="hidden md:flex md:col-span-1 justify-center">
          <div className="w-px bg-outline-variant/20 h-32"></div>
        </div>

        {/* Lado Direito: Links (Ocupa 6 colunas) */}
        <div className="md:col-span-6 grid grid-cols-2 gap-8 w-full">
          {/* Coluna Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-headline uppercase font-bold text-secondary mb-6 tracking-widest text-xs">
              Navegação
            </h3>
            <ul className="space-y-4 text-center md:text-left">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-on-surface/60 hover:text-secondary transition-all font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-headline uppercase font-bold text-secondary mb-6 tracking-widest text-xs">
              Social
            </h3>
            <ul className="space-y-4 text-center md:text-left">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-on-surface/60 hover:text-secondary transition-all font-body text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-8 border-t border-outline-variant/10 text-[10px] tracking-[0.2em] text-on-surface uppercase">
        © {new Date().getFullYear()} Criado e desenvolvido por{" "}
        <strong>
          <a
            href="https://felipe-silva90-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary-container transition-colors"
          >
            Felipe Augusto
          </a>
        </strong>{" "}
        🍃
      </div>
    </footer>
  );
}
