import { ReactNode } from "react";
import { SwiperOptions } from "swiper/types";

export interface CarouselProps<T> {
    itens: T[];
    renderItem: (item: T) => ReactNode;
    slide_config: SwiperOptions
  }