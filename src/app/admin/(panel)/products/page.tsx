import type { Metadata } from 'next'
import { ProductForm } from '@/components/admin/products/ProductForm'

export const metadata: Metadata = {
  title: 'Produtos',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ProductsPage() {
  return (
    <div className="mt-5 flex flex-col gap-4">
      <h1 className="text-on-surface text-center text-2xl font-semibold tracking-widest uppercase">
        Loja
      </h1>
      <ProductForm />
    </div>
  )
}
