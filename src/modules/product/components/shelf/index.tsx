import type { JSX } from "react"

import { Carousel } from "../../../../shered/components/Carousel"
import { ProductCard } from "../ProductCard"
import { defaultShelfConfig } from "./defaultShelfConfig"
import type { ShelfProps } from "./types"

const Shelf = ({ slide_config, products }: ShelfProps): JSX.Element => {
  const finalConfig = {
    ...defaultShelfConfig,
    ...slide_config,
    breakpoints: {
      ...defaultShelfConfig.breakpoints,
      ...slide_config?.breakpoints,
    },
  }

  return (
    <Carousel
      slide_config={finalConfig}
      itens={products}
      renderItem={(product) => <ProductCard {...product} />}
    />
  )
}

export default Shelf
