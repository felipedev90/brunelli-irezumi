import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, WHATSAPP_URL } from "@/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Brunelli Irezumi`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <Header />
      <main className="bg-surface min-h-dvh pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero do serviço */}
          <div className="relative aspect-16/6 overflow-hidden mb-16">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              quality={90}
              priority
              className="object-cover opacity-50"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent" />
            <div className="absolute bottom-0 w-full flex justify-center items-center p-8">
              <h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter">
                {service.title}
              </h1>
            </div>
          </div>

          {/* Grid de imagens */}
          {service.gallery.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {service.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden bg-surface-container-high"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-on-surface-variant text-center py-24">
              Em breve — novas imagens sendo adicionadas.
            </p>
          )}

          {/* CTA */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-outline-variant/20 pt-12">
            <Link
              href="/#servicos"
              className="text-on-surface-variant font-headline uppercase tracking-widest text-sm hover:text-secondary transition-colors"
            >
              ← Voltar
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-container text-on-surface px-10 py-5 font-headline font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
            >
              Solicitar Orçamento
              <MoveRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
