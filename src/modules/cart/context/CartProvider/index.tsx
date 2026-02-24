import type { ReactElement, ReactNode } from "react"
import { createContext, useState } from "react"

import { addItem } from "@/modules/cart/domain/useCases/addItem"
import { removeFromCart } from "@/modules/cart/domain/useCases/removeFromCart"
import { updateFromCart } from "@/modules/cart/domain/useCases/updateFromCart"
import type { CartItem } from "@/modules/cart/types/CartItem"

import type { CartProviderProps } from "./type"

export const MiniCartContext = createContext<CartProviderProps | null>(null)

export function CartProvider({ children }: { children: ReactNode }): ReactElement {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const addToCart = (cartItem: CartItem): void => {
    setCartItems((prev) => addItem(prev, cartItem))
  }

  const removeToCart = (cartItem: CartItem): void => {
    setCartItems((prev) => removeFromCart(prev, cartItem))
  }

  const updateQuantity = (cartItem: CartItem): void => {
    setCartItems((prev) => updateFromCart(prev, cartItem))
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
        removeToCart,
        updateQuantity,
        clearCart,
      }}
    >
      <>{children}</>
    </MiniCartContext.Provider>
  )
}
