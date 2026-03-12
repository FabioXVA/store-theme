import type { CartItem } from "@/modules/cart/types/CartItem"

export interface CartProviderProps {
  cartItems: CartItem[]
  totalItems: number
  totalPrice: number
  openMinicart: boolean
  toggleMiniCart: () => void
  addToCart: (cartItem: CartItem) => void
  removeToCart: (cartItem: CartItem) => void
  updateQuantity: (cartItem: CartItem) => void
  clearCart: () => void
}
