import Image from "next/image";
import Link from "next/link";
import { GALLERY_IMAGES, INSTAGRAM_URL } from "@/constants";

export function GallerySection() {
  return (
    <section className="py-24 bg-surface-container-low" id="galeria">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Portfólio Selecionado
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className={`
                overflow-hidden bg-surface hover:brightness-110 transition-all
                ${image.span === "row" ? "md:row-span-2 aspect-3/4" : "aspect-3/4"}
                ${image.id === 2 ? "aspect-square md:aspect-3/4" : ""}
                ${image.id === 4 || image.id === 5 ? "aspect-square" : ""}
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
            <span className="material-symbols-outlined" aria-hidden="true">open_in_new</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
