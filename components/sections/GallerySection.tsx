import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES, INSTAGRAM_URL } from "@/constants";

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
);

export function GallerySection() {
  return (
    <section className="py-12 md:py-24 bg-surface" id="galeria">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Portfólio
          </h2>
          <span className="text-secondary font-headline uppercase tracking-[0.3em] text-sm font-bold mt-2">
            por felipe brunelli
          </span>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className={`
                overflow-hidden bg-surface hover:scale-105 transition-all
                ${image.span === "row" ? "md:row-span-2 aspect-3/4" : "aspect-3/4"}
                ${image.id === 0 ? "aspect-square md:aspect-3/4" : ""}
                ${image.id === 0 || image.id === 0 ? "aspect-square" : ""}
              `}
            >
              <div className="relative w-full h-full">
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
            className="inline-flex items-center gap-3 text-on-surface font-headline font-bold uppercase tracking-widest hover:text-secondary transition-colors"
          >
            Ver mais no Instagram
            <InstagramIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
