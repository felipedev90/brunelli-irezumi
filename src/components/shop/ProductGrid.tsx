'use client'

import { useState } from 'react'
import { Sliders } from 'lucide-react'
import { formatCentsToBRL } from '@/lib/format-currency'
import Image from 'next/image'

const CATEGORY_LABELS: Record<string, string> = {
  DRAWING: 'Pintura',
  PRINT: 'Print',
  TENUGUI: 'Tenugui',
  SOCKS: 'Meia',
  ECOBAG: 'Ecobag',
  CUSTOM: 'Personalização',
}

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

export function ProductGrid({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState('TODOS')
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'TODOS') {
      return true
    }
    return product.category === selectedCategory
  })

  return (
    <div>
      <div className="mb-8 flex flex-col items-end gap-4">
        <button
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="text-on-surface hover:text-accent flex items-center gap-2 text-sm tracking-widest uppercase transition-colors"
        >
          <Sliders size={18} />
          Filtrar
        </button>

        {isFilterOpen && (
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('TODOS')}
              className={`font-headline rounded-full border px-4 py-1.5 text-xs tracking-widest uppercase transition-colors ${
                selectedCategory === 'TODOS'
                  ? 'border-accent text-accent'
                  : 'border-outline-variant text-on-surface-variant hover:border-accent hover:text-accent'
              }`}
            >
              Todos
            </button>
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`font-headline rounded-full border px-4 py-1.5 text-xs tracking-widest uppercase transition-colors ${
                  selectedCategory === key
                    ? 'border-accent text-accent'
                    : 'border-outline-variant text-on-surface-variant hover:border-accent hover:text-accent'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => {
          const coverImage = product.images[0]
          return (
            <div
              key={product.id}
              className="group border-accent/10 flex min-w-0 flex-col gap-2 self-stretch border"
            >
              <div className="bg-surface border-accent/10 relative aspect-square overflow-hidden border-b">
                {coverImage && (
                  <Image
                    src={coverImage.url}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-4 p-2">
                <p className="text-on-surface-variant border-accent/30 self-end rounded-full border px-4 text-center text-sm leading-relaxed">
                  {product.category && CATEGORY_LABELS[product.category]}
                </p>
                <h2 className="font-headline mt-2 text-2xl leading-relaxed tracking-widest text-white">
                  {product.title}
                </h2>
                <p className="text-on-surface-variant text-sm leading-relaxed break-words">
                  {product.description}
                </p>
                {product.promoPriceCents ? (
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
                <button className="text-on-accent hover:bg-accent-hover border-accent/80 mb-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors">
                  Adicionar ao carrinho
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
