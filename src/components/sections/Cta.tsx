import Image from 'next/image'
import { CTA_IMAGE } from '@/data/projects'

export function Cta() {
  return (
    <section
      id="cta"
      className="bg-surface border-on-surface/10 relative flex min-h-dvh items-center justify-center overflow-hidden border-t pt-20 pb-16 md:pb-0"
    >
      <div className="absolute inset-0 z-0">
        <div className="via-surface-container-low/60 to-background/60 absolute inset-0 z-10 bg-linear-to-t from-transparent" />
        <Image
          src={CTA_IMAGE.src}
          alt={CTA_IMAGE.alt}
          fill
          priority
          className="object-cover object-[40%_90%] md:object-[50%_90%]"
          sizes="100vw"
        />
      </div>
    </section>
  )
}
