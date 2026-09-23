'use client'

import { useState, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import { CartContext, type CartItem } from '@/contexts/CartContext'
import {
  subscribeToCart,
  getCartSnapshot,
  getCartServerSnapshot,
  persistCart,
} from '@/lib/cart-storage'

/**
 * CartProvider component that manages the shopping cart state and provides cart-related functionality to its children components.
 * It uses React's Context API to share cart data and methods across the application.
 */
export function CartProvider({ children }: { children: ReactNode }) {
  // Use useSyncExternalStore to subscribe to cart changes, with snapshot and server snapshot functions
  const rawItems = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot,
    getCartServerSnapshot,
  )
  // Parse the raw items from storage into CartItem objects
  const items: CartItem[] = JSON.parse(rawItems)

  // State to control the visibility of the cart drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  function toggleDrawer() {
    setIsDrawerOpen((prev) => !prev)
  }

  /**
   * Adds a new item to the cart or increases the quantity of an existing item
   * @param newItem - The cart item to add or update
   */
  function addItem(newItem: CartItem) {
    // Check if the item already exists in the cart
    const existing = items.find((item) => item.productId === newItem.productId)

    // Update quantity if item exists, otherwise add new item
    const newItems = existing
      ? items.map((item) =>
          item.productId === newItem.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      : [...items, newItem]

    // Persist the updated cart items
    persistCart(newItems)
  }

  function removeItem(productId: string) {
    persistCart(items.filter((item) => item.productId !== productId))
  }

  function increaseQuantity(productId: string) {
    persistCart(
      items.map((item) =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  function decreaseQuantity(productId: string) {
    persistCart(
      items.map((item) => {
        if (item.productId === productId && item.quantity === 1) {
          return { ...item, quantity: 1 }
        }
        return item.productId === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      }),
    )
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        isDrawerOpen,
        toggleDrawer,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
