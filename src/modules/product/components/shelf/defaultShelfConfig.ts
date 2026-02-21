import type { SwiperOptions } from "swiper/types"

export const defaultShelfConfig: SwiperOptions = {
  slidesPerView: 4,
  spaceBetween: 16,
  breakpoints: {
    1080: { slidesPerView: 4, spaceBetween: 20 },
    600: { slidesPerView: 2, spaceBetween: 20 },
    320: { slidesPerView: 1, spaceBetween: 20 },
  },
}
