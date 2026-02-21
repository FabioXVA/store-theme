import type { SwiperOptions } from "swiper/types"

import type { Product } from "../../types/Product"

export interface ShelfProps {
  slide_config?: SwiperOptions
  products: Product[]
}
