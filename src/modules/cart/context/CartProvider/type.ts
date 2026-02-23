import type { CartItem } from "@/modules/cart/types/CartItem"
import type { Product } from "@/modules/product/types/Product"

export interface CartProviderProps {
  cartItens: CartItem[]
  addToCart: (product: Product) => void
  removeToCart: () => void
  updateToCart: () => void
}
