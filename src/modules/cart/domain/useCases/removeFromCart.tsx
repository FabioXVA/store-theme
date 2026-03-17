import type { CartItem } from "../../types/CartItem"

export function removeFromCart(cartItems: CartItem[], cartItem: CartItem): CartItem[] {
  return cartItems.flatMap((item) => {
    if (item.productId !== cartItem.productId) return item
    if (item.quantity <= 1) return []
    return { ...item, quantity: item.quantity - 1 }
  })
}
