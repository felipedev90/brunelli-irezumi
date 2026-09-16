import type { Metadata } from 'next'
import { ProductForm } from '@/components/admin/products/ProductForm'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { formatCentsToBRL } from '@/lib/format-currency'
import { DeleteProductButton } from '@/components/admin/products/DeleteProductButton'

export const metadata: Metadata = {
  title: 'Produtos',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function ProductsPage() {
  const products = await prisma.product.findMany({
    include: {
      images: {
        orderBy: {
          order: 'asc',
        },
      },
    },
  })

  return (
    <div className="mt-5 flex flex-col gap-4">
      <h1 className="text-on-surface text-center text-2xl font-semibold tracking-widest uppercase">
        Loja
      </h1>
      <ProductForm />
      {products.length === 0 ? (
        <p className="text-on-surface-variant text-sm">
          Nenhum produto cadastrado.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="border-outline-variant bg-surface-container text-on-surface place-items-center rounded-sm border p-4"
            >
              {product.images[0] && (
                <Image
                  src={product.images[0].url}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="h-24 w-24 object-cover"
                />
              )}
              <h2 className="text-on-surface mt-2 mb-3 text-xl font-semibold tracking-wider">
                {product.title}
              </h2>
              <p className="text-on-surface-variant text-center text-sm">
                {product.description}
              </p>
              <div className="mt-2 flex gap-2">
                <span className="text-on-surface-variant text-sm">
                  {formatCentsToBRL(product.priceCents)}
                </span>
              </div>
              <div className="mt-2 flex w-full justify-end">
                <DeleteProductButton id={product.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
