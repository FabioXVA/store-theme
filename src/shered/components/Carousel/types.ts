import type { ReactNode } from "react"
import type { SwiperOptions } from "swiper/types"

export interface CarouselProps<T> {
  itens: T[]
  renderItem: (item: T) => ReactNode
  slide_config: SwiperOptions
}
