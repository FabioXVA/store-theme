import type { CartItem } from "@/modules/cart/types/CartItem"

export interface CartProviderProps {
  cartItems: CartItem[]
  totalItems: number
  totalPrice: number
  addToCart: (cartItem: CartItem) => void
  removeToCart: (cartItem: CartItem) => void
  updateQuantity: (cartItem: CartItem) => void
  clearCart: () => void
}
