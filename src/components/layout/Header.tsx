'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { NAV_LINKS, WHATSAPP_URL } from '@/data/projects'
import { MobileNav } from './MobileNav'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { Menu, X } from 'lucide-react'
import { CartIcon } from '@/components/shop/CartIcon'
import { CartDrawer } from '@/components/shop/CartDrawer'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      firstLinkRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <header className="bg-surface/80 fixed top-0 z-50 flex w-full items-center justify-between px-3 py-2 backdrop-blur-xl lg:px-6 lg:py-4">
        <Link
          href="/#hero"
          className="text-on-surface font-headline mt-2 text-xl font-black tracking-widest uppercase lg:mt-0"
        >
          <span className="text-accent">Brunelli </span>Irezumi
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-headline text-on-surface hover:text-secondary-container font-bold tracking-wide uppercase transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <CartIcon />
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-on-surface font-headline bg-accent/90 px-6 py-2 text-sm font-bold tracking-wide uppercase transition-all hover:scale-105 active:scale-95"
          >
            Agendamento
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 lg:hidden">
          <CartIcon />
          <button
            className="text-accent"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>
      <CartDrawer />

      <div className={`${isOpen ? 'hidden' : 'block'} lg:block`}>
        <WhatsAppButton />
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        aria-hidden={!isOpen}
        className={`bg-surface fixed inset-0 z-40 transition-transform duration-300 lg:hidden ${
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
