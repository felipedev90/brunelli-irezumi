import Image from 'next/image'
import Link from 'next/link'
import { GALLERY_IMAGES, INSTAGRAM_URL } from '@/constants'

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export function GallerySection() {
  return (
    <section className="bg-surface py-12 md:py-24" id="galeria">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-black tracking-tighter uppercase md:text-6xl">
            Portfólio
          </h2>
          <span className="text-secondary font-headline mt-2 text-sm font-bold tracking-[0.3em] uppercase">
            por felipe brunelli
          </span>
          <div className="bg-secondary mx-auto mt-6 h-1 w-24" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className={`bg-surface overflow-hidden transition-all hover:scale-105 ${image.span === 'row' ? 'aspect-3/4 md:row-span-2' : 'aspect-3/4'} ${image.id === 0 ? 'aspect-square md:aspect-3/4' : ''} ${image.id === 0 || image.id === 0 ? 'aspect-square' : ''} `}
            >
              <div className="relative h-full w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface font-headline hover:text-secondary inline-flex items-center gap-3 font-bold tracking-widest uppercase transition-colors"
          >
            Ver mais no Instagram
            <InstagramIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
