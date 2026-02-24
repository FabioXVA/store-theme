import type { CartItem } from "../../types/CartItem"

export function addItem(cartItems: CartItem[], prev: CartItem): CartItem[] {
  const exists = cartItems.find((item) => item.productId === prev.productId)

  if (exists) {
    return cartItems.map((item) =>
      item.productId === prev.productId ? { ...item, quantity: item.quantity + 1 } : item,
    )
  }

  return [...cartItems, prev]
}
