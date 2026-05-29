import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SERVICES, WHATSAPP_URL } from '@/data/projects'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import type { Metadata } from 'next'
import { GalleryGrid } from '@/components/ui/GalleryGrid'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: `${service.title} | Brunelli Irezumi`,
    description: service.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) notFound()

  return (
    <>
      <Header />
      <main className="bg-surface min-h-dvh pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Hero do serviço */}
          <div className="relative mb-16 aspect-16/6 overflow-hidden">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              quality={90}
              priority
              className="object-cover opacity-50"
              sizes="100vw"
            />
            <div className="from-surface absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
            <div className="absolute bottom-0 flex w-full items-center justify-center p-8">
              <h1 className="font-headline border-b border-orange-500/60 text-4xl font-black tracking-widest uppercase md:text-7xl">
                {service.title}
              </h1>
            </div>
          </div>

          {/* Grid de imagens */}
          <GalleryGrid images={service.gallery} />

          {/* CTA */}
          <div className="border-outline-variant/20 mt-16 flex flex-col justify-between gap-6 border-t pt-12 sm:flex-row md:items-center">
            <Link
              href="/#servicos"
              className="font-headline hover:text-secondary text-sm tracking-widest text-orange-500 uppercase transition-colors"
            >
              ← Voltar
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-headline text-primary gap-3 border border-orange-500/80 px-8 py-5 text-center text-lg font-black tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
