import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_URL, HERO_IMG_CONTENT } from '@/data/projects'
import { MoveRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-surface relative flex min-h-dvh items-center justify-center overflow-hidden pt-20 pb-16 md:pb-0"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-linear-to-l from-transparent via-[#131313]/60 to-[#131313]" />
        <Image
          src={HERO_IMG_CONTENT.src}
          alt={HERO_IMG_CONTENT.alt}
          fill
          priority
          className="object-cover object-[40%_90%] opacity-60 grayscale md:object-[50%_90%]"
          sizes="100vw"
        />
      </div>

      <div className="relative z-20 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-12">
        <div className="md:col-span-8 lg:col-span-7">
          <h1 className="font-headline text-on-surface mb-6 text-5xl leading-[1.1] font-black tracking-tighter uppercase md:text-7xl">
            Tatuagem Japonesa{' '}
            <span className="text-secondary">Tradição Milenar</span>
          </h1>

          <p className="text-on-surface-variant mb-8 max-w-xl text-lg leading-relaxed md:text-xl">
            Há mais de 10 anos criando obras únicas no corpo.
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-surface font-headline flex items-center gap-3 px-10 py-5 text-lg font-black tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
