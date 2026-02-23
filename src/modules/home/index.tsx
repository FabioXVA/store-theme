import type { JSX } from "react"

import Slider from "../home/components/SlideHome"
import { FeaturedProduct } from "../product/components/FeaturedProduct"
import Shelf from "../product/components/Shelf"
import { useProducts } from "../product/hooks/useProducts/useProducts"
import type { Product } from "../product/types/Product"
import { bannerProducts, slideProps } from "./props"
import MiniCart from "../cart/components/MiniCart"

export default function Home(): JSX.Element {
  const { products, load, error } = useProducts()

  if (load) return <p>Loading...</p>
  if (error) return <p>{error.toString()}</p>
  if (!products.length) return <p>No Product found</p>

  const filterProducts = products.filter((c: Product) => {
    return c.category === "electronics"
  })

  const filterProductsCategory = products.filter((c: Product) => {
    return c.category === "women's clothing"
  })

  return (
    <div>
      <div className="max-w-[1345px]  m-auto">
        <MiniCart />
      </div>
      <div className="max-w-[1345px]  m-auto">
        <Slider slideProps={slideProps} />
      </div>
      <div className="bg-gray-100 p-4  max-w-full mx-auto pt-[32px]">
        <div className="max-w-[1345px] m-auto">
          <FeaturedProduct products={bannerProducts} />
        </div>
      </div>
      <div className=" p-4  max-w-full mx-auto pt-[32px]">
        <div className="max-w-[1345px] m-auto">
          <Shelf products={filterProducts} />
        </div>
      </div>
      <div className=" p-4  max-w-full mx-auto pt-[32px]">
        <div className="max-w-[1345px] m-auto">
          <Shelf products={filterProductsCategory} />
        </div>
      </div>
      <div className=" p-4  max-w-full mx-auto pt-[32px]">
        <div className="max-w-[1345px] m-auto">
          <Shelf products={products} />
        </div>
      </div>
    </div>
  )
}
