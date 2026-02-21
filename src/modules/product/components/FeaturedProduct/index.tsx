import { Carousel } from "../../../../shered/components/Carousel"
import { FeaturedProductItem } from "./FeaturedProductItem"
import { slide_config } from "./slide_config"
import type { FeaturedProductProps } from "./types"

export function FeaturedProduct({ products }: FeaturedProductProps) {
  return (
    <div>
      <p className="text-2xl font-open-sans text-gray-900 text-center mb-[1rem">
        Produtos em destaque
      </p>
      <div className="flex items-center gap-4 m-auto">
        <Carousel
          slide_config={slide_config}
          itens={products}
          renderItem={(product) => <FeaturedProductItem {...product} />}
        />
      </div>
    </div>
  )
}
