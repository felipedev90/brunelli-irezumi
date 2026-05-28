import Image from 'next/image'
import { ABOUT_IMG } from '@/data/projects'

export function AboutSection() {
  return (
    <section className="bg-surface overflow-hidden py-24" id="sobre">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-2">
        {/* Image column */}
        <div className="relative">
          <div className="font-headline absolute top-96 left-48 z-0 text-center text-[10rem] leading-none font-black text-orange-500/10 md:-top-20 md:left-72 lg:-left-7 lg:text-orange-500/60 xl:-top-5 xl:-left-10">
            ブ<br />ル<br />ネ<br />リ
          </div>
          <div className="relative z-10 aspect-square w-full overflow-hidden lg:ml-14">
            <Image
              src={ABOUT_IMG.src}
              alt={ABOUT_IMG.alt}
              fill
              quality={90}
              className="object-cover object-[center_20%] lg:object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Text column */}
        <div>
          <span className="font-headline text-sm font-bold tracking-[0.3em] text-orange-500 uppercase">
            O Artista
          </span>
          <h2 className="font-headline mt-4 mb-8 text-4xl font-black tracking-tighter uppercase md:text-6xl">
            Shokunin
          </h2>

          <div className="text-on-surface lg:text-on-surface-variant space-y-6 text-lg leading-relaxed">
            <p>
              Brunelli encarna o conceito do{' '}
              <strong className="text-orange-500">Shokunin</strong> - O artesão
              que dedica sua vida ao aperfeiçoamento constante de sua técnica.
            </p>
            <p>
              Com mais de uma década imerso na cultura e estética japonesa, seu
              trabalho é baseado em trazer a riqueza da tatuagem tradicional
              para seus clientes. Respeitando a tradição, seu principal objetivo
              é garantir um trabalho clássico, limpo, duradouro e significativo
            </p>
            <p>
              Cada projeto é iniciado do zero, respeitando a anatomia do corpo,
              a profundidade simbólica da arte e a estética tradicional da
              tatuagem japonesa.
            </p>
          </div>

          <blockquote className="bg-surface-container-high text-on-surface-variant mt-10 border-l-4 border-orange-500 p-6 italic">
            &ldquo;A tatuagem japonesa é um processo que exige paciência,
            persistência e dedicação. Tanto minha quanto do cliente.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
