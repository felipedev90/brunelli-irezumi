import Image from 'next/image'
import { CTA_IMAGE } from '@/data/projects'

export function Cta() {
  return (
    <section
      id="cta"
      className="bg-surface border-on-surface/10 relative flex min-h-dvh items-center justify-center overflow-hidden border-t pt-20 pb-16 md:pb-0"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={CTA_IMAGE.src}
          alt={CTA_IMAGE.alt}
          fill
          priority
          quality={90}
          className="object-cover object-[40%_90%] opacity-75 grayscale md:object-[50%_90%]"
          sizes="(max-width: 768px) 200vw, 100vw"
        />
      </div>
    </section>
  )
}
