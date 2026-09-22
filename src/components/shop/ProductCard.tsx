'use client'

import Image from 'next/image'
import { formatCentsToBRL } from '@/lib/format-currency'
import { CATEGORY_LABELS, TAG_LABELS } from '@/data/product-labels'

type Product = {
  id: string
  title: string
  description: string
  priceCents: number
  promoPriceCents: number | null
  category: string
  tags: string[]
  images: { id: string; url: string }[]
}

type ProductCardProps = {
  product: Product
  onOpenImage: (index: number) => void
}

export function ProductCard({ product, onOpenImage }: ProductCardProps) {
  const coverImage = product.images[0]
  const firstTag = product.tags[0]

  return (
    <div className="group border-accent/20 flex min-w-0 flex-col gap-1 self-stretch border">
      <button
        onClick={() => onOpenImage(0)}
        aria-label={`Ver imagens de ${product.title}`}
        className="bg-surface group relative aspect-square w-full overflow-hidden"
      >
        {coverImage && (
          <Image
            src={coverImage.url}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        )}
        <span className="text-on-surface-variant border-accent/30 bg-surface/80 absolute top-2 left-2 rounded-full border px-3 py-1 text-xs backdrop-blur-sm">
          {product.category && CATEGORY_LABELS[product.category]}
        </span>
        {firstTag && (
          <div className="absolute top-2 right-2 flex items-center gap-1.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-accent relative inline-flex h-2.5 w-2.5 rounded-full" />
            </span>
            <span className="text-on-surface bg-surface/80 rounded-full px-3 py-1 text-xs backdrop-blur-sm">
              {TAG_LABELS[firstTag]}
            </span>
          </div>
        )}
      </button>

      {product.images.length > 1 && (
        <div className="grid grid-cols-4 gap-1 px-2">
          {product.images.map((img, index) => (
            <button
              key={img.id}
              onClick={() => onOpenImage(index)}
              aria-label={`Ver imagem ${index + 1} de ${product.title}`}
              className="relative aspect-square overflow-hidden"
            >
              <Image
                src={img.url}
                alt={product.title}
                fill
                className="object-cover"
                sizes="100px"
              />
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-2">
        <h2 className="font-headline mt-2 text-2xl leading-relaxed font-semibold tracking-widest text-white">
          {product.title}
        </h2>
        <p className="text-on-surface-variant text-sm leading-relaxed break-words">
          {product.description}
        </p>
        {product.tags.includes('MADE_TO_ORDER') ? (
          <p className="text-accent font-headline mt-auto text-end text-sm tracking-wide uppercase">
            Valor a consultar
          </p>
        ) : product.promoPriceCents ? (
          <div className="mt-auto flex flex-col items-end gap-3">
            <p className="text-on-surface-variant/40 text-sm line-through">
              {formatCentsToBRL(product.priceCents)}
            </p>
            <p className="text-accent font-headline text-lg font-bold">
              {formatCentsToBRL(product.promoPriceCents)}
            </p>
          </div>
        ) : (
          <p className="text-accent font-headline mt-auto text-end text-lg font-bold">
            {formatCentsToBRL(product.priceCents)}
          </p>
        )}
        <button className="bg-accent text-on-accent hover:bg-accent-hover mb-2 rounded-full px-4 py-2 text-sm font-bold transition-colors">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
