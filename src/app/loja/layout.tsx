import type { ReactNode } from 'react'
import { CartProvider } from '@/components/shop/CartProvider'

export default function LojaLayout({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>
}
