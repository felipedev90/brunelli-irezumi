import Link from 'next/link'
import {
  INSTAGRAM_URL,
  MAPS_URL,
  NAV_LINKS,
  STUDIO_NAME,
  STUDIO_TAGLINE,
  WHATSAPP_URL,
} from '@/constants'

const SOCIAL_LINKS = [
  { label: 'Instagram', href: INSTAGRAM_URL },
  { label: 'Facebook', href: '#' },
  { label: 'WhatsApp', href: WHATSAPP_URL },
]

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/15">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 py-20 max-w-7xl mx-auto">
        <div>
          <p className="font-headline text-2xl font-bold text-on-surface mb-4">
            {STUDIO_NAME}
          </p>
          <p className="font-body text-sm leading-relaxed text-on-surface/60">
            Especialista em tatuagem japonesa e coberturas. Elevando a arte milenar
            ao status de luxo contemporâneo em Jundiaí.
          </p>
        </div>

        <div>
          <h4 className="font-headline uppercase font-bold text-secondary mb-6 tracking-widest text-xs">
            Menu
          </h4>
          <ul className="space-y-4">
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
            <li>
              <Link
                href="#servicos"
                className="text-on-surface/60 hover:text-secondary transition-all font-body text-sm"
              >
                Serviços
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline uppercase font-bold text-secondary mb-6 tracking-widest text-xs">
            Social
          </h4>
          <ul className="space-y-4">
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

      <div className="text-center py-8 border-t border-outline-variant/10 text-xs tracking-widest text-on-surface/30">
        © {STUDIO_NAME.toUpperCase()} - {STUDIO_TAGLINE.toUpperCase()}
      </div>
    </footer>
  )
}