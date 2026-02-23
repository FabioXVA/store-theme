import { type JSX } from "react"

import type { Product } from "@/modules/product/types/Product"
import { BuyButton } from "@/shered/components/BuyButton"
import { Card } from "@/shered/components/Card"
import { Rating } from "@/shered/components/Rating"

export const ProductCard = (product: Product): JSX.Element => {
  return (
    <div className="bg-slate-900 p-8 h-[450px] rounded-xl max-w-md mx-auto flex justify-center box-content">
      <Card imgSrc={product.image} imgAlt="imac-front" class_card_image="h-1/2 m-auto">
        <>
          <a
            href={`/product/${product.id}`}
            className="text-lg font-semibold  text-gray-900 hover:underline dark:text-white overflow-hidden line-clamp-2"
          >
            {product.title}
          </a>
          <Rating {...product.rating} />
          <div className="mt-4 flex items-center justify-between flex-col">
            <p className="text-xl font-extrabold  text-gray-900 dark:text-white ">
              R${product.price} <span>no Pix</span>
            </p>
            <p className="text-xs font-extrabold  text-gray-900 dark:text-white mb-2">
              ou 10x {product.price / 10} sem juros
            </p>
          </div>
          <BuyButton {...product} />
        </>
      </Card>
    </div>
  )
}
