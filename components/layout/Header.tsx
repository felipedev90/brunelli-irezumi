"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, STUDIO_NAME, WHATSAPP_URL } from "@/constants";
import { MobileNav } from "./MobileNav";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl flex justify-between items-center px-6 py-4">
        <Link
          href="/"
          className="text-xl font-black tracking-widest text-on-surface font-headline uppercase"
        >
          {STUDIO_NAME}
        </Link>

        {/* Desktop Nav */}
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
            className="bg-secondary-container text-on-surface px-6 py-2 font-headline uppercase font-bold text-sm hover:scale-105 active:scale-95 transition-all"
          >
            Agendamento
          </Link>
        </nav>

        {/* Mobile menu icon - AGORA COM CLICK */}
        <button
          className="md:hidden text-secondary"
          aria-label="Abrir menu"
          type="button"
          onClick={() => setIsOpen(!isOpen)} // Alterna entre true/false
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Menu Mobile Lateral (Overlay) */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MobileNav />

        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-headline uppercase font-bold text-on-surface hover:text-on-secondary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
