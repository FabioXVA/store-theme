import { type ReactElement } from "react"

import type { CartItem } from "@/modules/cart/types/CartItem"
import { Price } from "@/shered/components/Price/Index"

import { Card } from "../../../../../shered/components/Card"
type Props = {
  product: CartItem
  addItem?: (cartItem: CartItem) => void
  removeItem?: (cartItem: CartItem) => void
}

const MiniCartItem = (props: Props): ReactElement => {
  const { product, addItem, removeItem } = props
  return (
    <div>
      <div className="bg-slate-900 p-3 pr-8 pl-8 w-full h-[150px] rounded-xl max-w-md mx-auto flex justify-start">
        <Card
          imgSrc={product.image}
          imgAlt="imac-front"
          class_card_image="w-[70px] pr-[16px] mr-5"
          class_card="flex w-100"
        >
          <div className="w-50 mt-1">
            <a
              href={`/product/${product.productId}`}
              className="text-xs font-semibold   text-white hover:underline dark:text-white overflow-hidden line-clamp-1"
            >
              {product.title}
            </a>
            <div className="flex">
              <Price
                price={product.price * product.quantity}
                className="text-[18px] font-extrabold text-white  dark:text-white pr-1 "
              />
            </div>
            <div className="flex justify-between  rounded-xl w-20 mt-2">
              <button
                className="flex justify-center items-center w-5 h-5 rounded-full text-white focus:outline-none bg-gray-400  hover:bg-amber-600"
                onClick={() => addItem?.(product)}
              >
                +
              </button>
              <input
                type="text"
                className="text-xs text-white font-bold w-[10px]"
                value={product.quantity}
              />
              <button
                className="flex justify-center items-center w-5 h-5 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-amber-600"
                onClick={() => removeItem?.(product)}
              >
                -
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MiniCartItem
