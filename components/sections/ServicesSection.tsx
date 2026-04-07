import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/constants";
import { MoveRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-12 md:py-24 bg-surface-container-low" id="servicos">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-4">
          <div>
            <span className="text-secondary font-headline uppercase tracking-[0.3em] text-sm font-bold">
              Especialidades
            </span>
            <h2 className="font-headline text-4xl md:text-6xl font-black uppercase tracking-tighter mt-2">
              Arte Irezumi
            </h2>
          </div>
          <div className="h-0.5 flex-1 bg-outline-variant/20 mx-8 hidden md:block" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-px md:bg-outline-variant/10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative aspect-3/2 overflow-hidden bg-surface"
            >
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                quality={90}
                className="object-cover opacity-40 md:opacity-50 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-transparent to-transparent" />

              <div className="absolute bottom-0 p-4 md:p-10">
                <h3 className="font-headline text-2xl md:text-3xl font-bold uppercase mb-4">
                  {service.title}
                </h3>
                <p className="text-on-surface md:text-on-surface-variant mb-6 max-w-sm">
                  {service.description}
                </p>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="text-secondary font-headline font-bold uppercase tracking-widest text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                >
                  {service.cta}
                  <MoveRight size={20} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
