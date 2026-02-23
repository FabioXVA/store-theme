import type { ReactElement, ReactNode } from "react"
import { createContext, useState } from "react"

import productToCartItem from "@/modules/cart/services/mappers/productToCartItem"
import type { CartItem } from "@/modules/cart/types/CartItem"
import type { Product } from "@/modules/product/types/Product"

import type { CartProviderProps } from "./type"

export const MiniCartContext = createContext<CartProviderProps | null>(null)

export function CartProvider({ children }: { children: ReactNode }): ReactElement {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (product: Product): void => {
    const cartItem = productToCartItem(product)

    setCartItems((prev) => {
      const exists = prev.find((item) => {
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
    })
  }

  const removeFromCart = (product: Product): void => {
    const cartItem = productToCartItem(product)
    setCartItems((prev) => {
      return prev.filter((item: CartItem) => {
        return item.productId !== cartItem.productId
      })
    })
  }

  const updateQuantity = (product: Product): void => {
    const cartItem = productToCartItem(product)
    setCartItems((prev) => {
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

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const clearCart = (): void => {
    setCartItems([])
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <MiniCartContext.Provider
      value={{
        cartItems,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      <>{children}</>
    </MiniCartContext.Provider>
  )
}
