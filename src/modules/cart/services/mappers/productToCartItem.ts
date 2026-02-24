import type { CartItem } from "@/modules/cart/types/CartItem"
import type { Product } from "@/modules/product/types/Product"

export const productToCartItem = (product: Product): CartItem => {
  const CartItem = {
    productId: product.id,
    title: product.title,
    price: product.price,
    quantity: 1,
  }

  return CartItem
}
