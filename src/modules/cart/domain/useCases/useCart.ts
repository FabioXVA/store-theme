import { useContext } from "react"

import { MiniCartContext } from "../../context/CartProvider"
import type { CartProviderProps } from "../../context/CartProvider/type"

export const useCart = (): CartProviderProps => {
  const context = useContext(MiniCartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
