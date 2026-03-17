import type { ReactElement } from "react"

import { Drawer } from "../../../../shered/components/Drawer"
import { useCart } from "../../domain/useCases/useCart"
import type { CartItem } from "../../types/CartItem"
import MiniCartItem from "./MiniCartItem"

const MiniCart = (): ReactElement => {
  const { addToCart, cartItems, removeToCart } = useCart()
  return (
    <Drawer id={"MiniCart"}>
      {cartItems?.map((product: CartItem, idx: number) => (
        <MiniCartItem
          key={idx}
          product={product}
          addItem={addToCart(product)}
          removeItem={removeToCart(product)}
        />
      ))}
    </Drawer>
  )
}

export default MiniCart
