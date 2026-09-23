const CART_KEY = 'cart'

export function subscribeToCart(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

export function getCartSnapshot(): string {
  return localStorage.getItem(CART_KEY) ?? '[]'
}

export function getCartServerSnapshot(): string {
  return '[]'
}

export function persistCart(items: unknown[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
  window.dispatchEvent(new Event('storage'))
}
