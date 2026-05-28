import Image from 'next/image'
import Link from 'next/link'
import { GALLERY_IMAGES, INSTAGRAM_URL } from '@/data/projects'

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
        <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="bg-outline-variant/20 mx-8 hidden h-0.5 flex-1 lg:block" />
          <div>
            <span className="font-headline text-sm font-bold tracking-[0.3em] text-orange-500 uppercase">
              By Felipe Brunelli
            </span>
            <h2 className="font-headline mt-2 text-4xl font-black tracking-wide uppercase md:text-6xl">
              Portfólio
            </h2>
          </div>
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

        <div className="mt-12 flex items-center justify-center text-center">
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-on-surface font-headline inline-flex items-center gap-2 text-lg font-bold tracking-widest uppercase"
          >
            Ver mais no <span className="text-orange-500">Instagram</span>
            <InstagramIcon className="mb-1 h-5 w-5 text-orange-500" />
          </Link>
        </div>
      </div>
    </section>
  )
}
