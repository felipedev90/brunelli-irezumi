'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import { CartContext, type CartItem } from '@/contexts/CartContext'

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(newItem: CartItem) {
    setItems((prev) => [...prev, newItem])
  }

  function removeItem(productId: string) {
    setItems((prev) => prev.filter((item) => item.productId !== productId))
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
