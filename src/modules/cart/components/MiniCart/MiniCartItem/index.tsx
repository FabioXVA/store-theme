import type { JSX } from "react"

import type { Product } from "@/modules/product/types/Product"
import { Price } from "@/shered/components/Price/Index"
import { Rating } from "@/shered/components/Rating"

import { Card } from "../../../../../shered/components/Card"

const MiniCartItem = (product: Product): JSX.Element => {
  return (
    <div>
      <div className="bg-slate-900 p-3 pr-8 pl-8 w-full h-[150px] rounded-xl max-w-md mx-auto flex justify-start">
        <Card
          imgSrc={product.image}
          imgAlt="imac-front"
          class_card_image="w-[70px] pr-[16px]"
        >
          <>
            <a
              href={`/product/${product.id}`}
              className="text-xs font-semibold   text-white hover:underline dark:text-white "
            >
              {product.title}
              <div className="mt-1 flex justify-between flex-col">
                <div className="flex">
                  <Rating {...product.rating} />
                  <Price
                    price={product.price}
                    className="text-[18px] font-extrabold text-white  dark:text-white pr-1 "
                  />
                </div>
                <div className="flex justify-start bg-white rounded-xl w-[90px] pr-4 pl-4">
                  <button className="text-xs text-black font-bold pr-[16px]">x</button>
                  <input
                    type="text"
                    className="text-xs text-black font-bold w-[10px]"
                    value="2"
                  />
                  <button className="text-xs text-black font-bold pl-[16px]">+</button>
                </div>
              </div>
            </a>
          </>
        </Card>
      </div>
    </div>
  )
}

export default MiniCartItem
