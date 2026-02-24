import type { CartItem } from "../../types/CartItem"

export function removeFromCart(prev: CartItem[], cartItem: CartItem): CartItem[] {
    return prev.filter((item: CartItem) => {
        return item.productId !== cartItem.productId
    })
}
