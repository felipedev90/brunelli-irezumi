import Image from "next/image";
import { ABOUT_IMG } from "@/constants";

export function AboutSection() {
  return (
    <section className="py-24 bg-surface overflow-hidden" id="sobre">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* Image column */}
        <div className="relative">
          <div className="absolute -top-10 -left-10 text-[12rem] font-black text-surface-container-high leading-none z-0 select-none font-headline">
            匠
          </div>
          <div className="relative z-10 w-full aspect-square border-l-8 border-secondary overflow-hidden">
            <Image
              src={ABOUT_IMG.src}
              alt={ABOUT_IMG.alt}
              fill
              quality={90}
              className="object-cover object-[center_20%] md:object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -bottom-12 -right-4 md:-bottom-6 md:-right-6 bg-secondary p-8 z-20">
            <span className="block font-headline text-2xl md:text-5xl font-black text-on-secondary leading-none">
              10+
            </span>
            <span className="block font-headline text-sm font-bold uppercase tracking-widest text-on-secondary mt-1">
              Anos de Maestria
            </span>
          </div>
        </div>

        {/* Text column */}
        <div>
          <span className="text-secondary font-headline uppercase tracking-[0.3em] text-sm font-bold">
            O Artista
          </span>
          <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mt-4 mb-8">
            Shokunin
          </h2>

          <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
            <p>
              Brunelli encarna o conceito do{" "}
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

          <blockquote className="mt-10 p-6 bg-surface-container-high border-l-4 border-secondary italic text-on-surface-variant">
            &ldquo;A tatuagem japonesa é uma jornada de permanência. Meu dever é
            garantir que cada traço conte uma história de força e
            tradição.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
