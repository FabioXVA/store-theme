import type { ReactElement } from "react"

import { Drawer } from "../../../../shered/components/Drawer"
import { useCart } from "../../domain/useCases/useCart"
import type { CartItem } from "../../types/CartItem"
import MiniCartItem from "./MiniCartItem"

const MiniCart = (): ReactElement => {
  const { addToCart, cartItems, removeToCart, totalPrice, openMinicart, toggleMiniCart } =
    useCart()
  return (
    <Drawer id={"MiniCart"} openMinicart={openMinicart} toggleMiniCart={toggleMiniCart}>
      {cartItems?.map((product: CartItem, idx: number) => (
        <MiniCartItem
          key={idx}
          product={product}
          addItem={addToCart}
          removeItem={removeToCart}
        />
      ))}
      <p>Total: {totalPrice}</p>
    </Drawer>
  )
}

export default MiniCart
