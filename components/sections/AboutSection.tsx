import Image from 'next/image'
import { ABOUT_IMG } from '@/constants'

export function AboutSection() {
  return (
    <section className="bg-surface overflow-hidden py-24" id="sobre">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
        {/* Image column */}
        <div className="relative">
          <div className="text-surface-container-high font-headline absolute -top-10 -left-10 z-0 text-[12rem] leading-none font-black select-none">
            匠
          </div>
          <div className="border-secondary relative z-10 aspect-square w-full overflow-hidden border-l-8">
            <Image
              src={ABOUT_IMG.src}
              alt={ABOUT_IMG.alt}
              fill
              quality={90}
              className="object-cover object-[center_20%] lg:object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="bg-secondary absolute -right-2 -bottom-20 z-20 p-8 md:-right-6 md:-bottom-6">
            <span className="font-headline text-on-secondary block text-2xl leading-none font-black md:text-5xl">
              10+
            </span>
            <span className="font-headline text-on-secondary mt-1 block text-sm font-bold tracking-widest uppercase">
              Anos de Maestria
            </span>
          </div>
        </div>

        {/* Text column */}
        <div>
          <span className="text-secondary font-headline text-sm font-bold tracking-[0.3em] uppercase">
            O Artista
          </span>
          <h2 className="font-headline mt-4 mb-8 text-4xl font-black tracking-tighter uppercase md:text-6xl">
            Shokunin
          </h2>

          <div className="text-on-surface-variant space-y-6 text-lg leading-relaxed">
            <p>
              Brunelli encarna o conceito do{' '}
              <strong className="text-on-surface">Shokunin</strong> - O artesão
              que dedica sua vida ao aperfeiçoamento constante de sua técnica.
            </p>
            <p>
              Com mais de uma década de imersão na cultura e estética japonesa,
              seu trabalho no The Garden Estudio em Jundiaí é referência em
              precisão técnica e fluidez.
            </p>
            <p>
              Cada projeto é iniciado do zero, respeitando as curvas do corpo do
              cliente e a profundidade simbólica da arte oriental tradicional.
            </p>
          </div>

          <blockquote className="bg-surface-container-high border-secondary text-on-surface-variant mt-10 border-l-4 p-6 italic">
            &ldquo;A tatuagem japonesa é uma jornada de permanência. Meu dever é
            garantir que cada traço conte uma história de força e
            tradição.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
