import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type { SwiperOptions } from "swiper/types"

import { baseConfig } from "./baseConfig"
import type { CarouselProps } from "./types"

export const Carousel = ({ slide_config, itens, renderItem }: CarouselProps<T>) => {
  const config: SwiperOptions = {
    ...baseConfig,
    ...slide_config,
    breakpoints: {
      ...baseConfig.breakpoints,
      ...slide_config?.breakpoints,
    },
    modules: [Navigation, Pagination, Autoplay],
  }

  return (
    <Swiper {...config}>
      {itens?.map((item, idx) => (
        <SwiperSlide key={idx}>{renderItem(item)}</SwiperSlide>
      ))}
    </Swiper>
  )
}
