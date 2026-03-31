import Image from "next/image";
import Link from "next/link";
import { STUDIO_RATING, WHATSAPP_URL } from "@/constants";
import { StarRating } from "@/components/ui/StarRating";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-surface">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#131313]/60 to-[#131313] z-10" />
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTqDxZ9gJR6xaOqougquNGqOqMooru49s_U5f5gNFCeSKI8lsMsncnASS4nG6m5YdMq1kOgcnr6wTEUlX84S2PlLmQCxC0cAhu60x3YuOBgb7MOVPJIF33NKmakgKO3JzyC_9lIRu6nCm09FmQu8a4ZpGxtKqmGLOjXKLROymfWRyF8QXjYIRgXVL29pWIdbGieN1v0DMPVgwyUzSTLajrPDbVUlj9Zj1Vr8WgHiws4AwVMTfxdaQ4hkzg_RjzcFA_X_wP3c7C6ms"
          alt="Tatuagem tradicional japonesa irezumi com escamas de dragão e flores de cerejeira"
          fill
          priority
          className="object-cover grayscale opacity-40 scale-110"
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-8 lg:col-span-7">
          <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] text-on-surface mb-6">
            Tatuagem Japonesa em Jundiaí:{" "}
            <span className="text-secondary">Tradição e Arte Milenar</span>
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-8 leading-relaxed">
            Mais de 10 anos de experiência criando obras únicas no corpo.
            Orçamento sem compromisso com o mestre do Irezumi moderno.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-secondary-container px-10 py-5 font-headline text-lg font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
            >
              Quero Agendar Agora
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>

            <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-high/50 backdrop-blur">
              <StarRating value={STUDIO_RATING.value} />
              <span className="font-bold text-on-surface">
                {STUDIO_RATING.value} no Google{" "}
                <span className="text-on-surface-variant font-normal">
                  ({STUDIO_RATING.count} avaliações)
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
