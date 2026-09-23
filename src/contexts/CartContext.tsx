import { createContext } from 'react'

export type CartItem = {
  productId: string
  title: string
  priceCents: number
  promoPriceCents: number | null
  quantity: number
  imageUrl: string | null
}

export type CartContextValue = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  increaseQuantity: (productId: string) => void
  decreaseQuantity: (productId: string) => void
  isDrawerOpen: boolean
  toggleDrawer: () => void
}

export const CartContext = createContext<CartContextValue | undefined>(
  undefined,
)
