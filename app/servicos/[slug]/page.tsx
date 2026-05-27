import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SERVICES, WHATSAPP_URL } from '@/constants'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MoveRight } from 'lucide-react'
import type { Metadata } from 'next'

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
              <h1 className="font-headline text-5xl font-black tracking-tighter uppercase md:text-7xl">
                {service.title}
              </h1>
            </div>
          </div>

          {/* Grid de imagens */}
          {service.gallery.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {service.gallery.map((img, i) => (
                <div
                  key={i}
                  className="bg-surface-container-high relative aspect-square overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-on-surface-variant py-24 text-center">
              Em breve — novas imagens sendo adicionadas.
            </p>
          )}

          {/* CTA */}
          <div className="border-outline-variant/20 mt-16 flex flex-col items-center justify-between gap-6 border-t pt-12 sm:flex-row">
            <Link
              href="/#servicos"
              className="text-on-surface-variant font-headline hover:text-secondary text-sm tracking-widest uppercase transition-colors"
            >
              ← Voltar
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-surface font-headline flex items-center gap-3 px-10 py-5 font-black tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
            >
              Solicitar Orçamento
              <MoveRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
