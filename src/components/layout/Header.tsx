'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { NAV_LINKS, STUDIO_NAME, WHATSAPP_URL } from '@/data/projects'
import { MobileNav } from './MobileNav'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus()
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full items-center justify-between bg-[#131313]/80 px-6 py-4 backdrop-blur-xl">
        <Link
          href="#hero"
          className="text-on-surface font-headline text-xl font-black tracking-widest uppercase"
        >
          {STUDIO_NAME}
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-headline text-on-surface hover:text-secondary font-bold tracking-wide uppercase transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface font-headline bg-orange-500/80 px-6 py-2 text-sm font-bold tracking-wide uppercase transition-all hover:scale-105 active:scale-95"
          >
            Agendamento
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="text-orange-500 md:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      <div className={`md:block ${isOpen ? 'hidden' : 'block'}`}>
        <WhatsAppButton />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!isOpen}
        className={`bg-background fixed inset-0 z-40 transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <MobileNav />

        <nav
          aria-label="Navegação mobile"
          className="flex h-full flex-col items-center justify-center gap-8"
        >
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              ref={index === 0 ? firstLinkRef : undefined}
              onClick={() => setIsOpen(false)}
              className="font-headline text-on-surface hover:text-on-secondary text-2xl font-bold uppercase transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
