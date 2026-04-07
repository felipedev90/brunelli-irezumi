import Link from "next/link";
import { MAPS_URL, WHATSAPP_URL } from "@/constants";
import { MapPinned, Phone, MessageCircleCheck } from "lucide-react";

export function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center py-3 px-4 bg-surface-container-low/90 backdrop-blur-md z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <Link
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-on-surface transition-all hover:text-secondary  duration-300"
      >
        <MessageCircleCheck size={24} />
        <span className="font-body text-[10px] uppercase tracking-widest mt-1 pt-2">
          WhatsApp
        </span>
      </Link>

      <Link
        href="tel:11976624286"
        className="flex flex-col items-center justify-center text-on-surface transition-all hover:text-secondary  duration-300"
      >
        <Phone size={24} />
        <span className="font-body text-[10px] uppercase tracking-widest mt-1 pt-2">
          Ligar
        </span>
      </Link>

      <Link
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-on-surface transition-all hover:text-secondary  duration-300"
      >
        <MapPinned size={24} />
        <span className="font-body text-[10px] uppercase tracking-widest mt-1 pt-2">
          Localização
        </span>
      </Link>
    </nav>
  );
}
