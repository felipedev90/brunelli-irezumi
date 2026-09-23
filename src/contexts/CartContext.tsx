import { createContext } from 'react'

export type CartItem = {
  productId: string
  title: string
  priceCents: number
  promoPriceCents: number | null
  quantity: number
}

export type CartContextValue = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
)
