import type { CartItem } from "../../types/CartItem"

export function updateFromCart(prev: CartItem[], cartItem: CartItem): CartItem[] {
  const exists = prev.find((item: CartItem) => {
    return item.productId === cartItem.productId
  })

  if (exists) {
    return prev.map((item) =>
      item.productId === cartItem.productId
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    )
  }

  return [...prev, { ...cartItem, quantity: 1 }]
}
