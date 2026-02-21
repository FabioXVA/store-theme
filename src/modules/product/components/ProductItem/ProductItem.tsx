import type { JSX } from "react"

import type { Product } from "@/modules/product/types/Product"
import { BuyButton } from "@/shered/components/BuyButton"
import { Price } from "@/shered/components/Price/Index"
import { Rating } from "@/shered/components/Rating"

export function ProductItem({ product }: { product: Product }): JSX.Element {
  return (
    <section
      className="py-8 bg-white md:py-16 dark:bg-gray-900 antialiased"
      data-testid="product-item"
    >
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
            <img
              className="w-full hidden dark:block"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.title}
            </h1>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <Price
                price={product.price}
                className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
              />
              <Rating {...product.rating} />
            </div>
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <BuyButton id={product.id} />
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <p className="mb-6 text-gray-500 dark:text-gray-400">{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
