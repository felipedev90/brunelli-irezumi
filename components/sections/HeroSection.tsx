import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL, HERO_IMG_CONTENT } from "@/constants";
import { MoveRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-dvh flex items-center justify-center pt-20 pb-16 md:pb-0 overflow-hidden bg-surface">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-l from-transparent via-[#131313]/60 to-[#131313] z-10" />
        <Image
          src={HERO_IMG_CONTENT.src}
          alt={HERO_IMG_CONTENT.alt}
          fill
          priority
          className="object-cover object-[40%_90%] md:object-[50%_90%] grayscale opacity-60"
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 lg:col-span-7">
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[1.1] text-on-surface mb-6">
            Tatuagem Japonesa{" "}
            <span className="text-secondary">Tradição Milenar</span>
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-8 leading-relaxed">
            Há mais de 10 anos criando obras únicas no corpo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-surface px-10 py-5 font-headline text-lg font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
            >
              Solicitar Orçamento
              <MoveRight size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
