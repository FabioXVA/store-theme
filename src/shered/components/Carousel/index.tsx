import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { baseConfig } from "./baseConfig";
import { CarouselProps } from "./types";
import { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Carousel = ({ slide_config, itens, renderItem}:  CarouselProps<T>) => {
  const config: SwiperOptions = {
    ...baseConfig,
    ...slide_config,
    breakpoints: {
      ...baseConfig.breakpoints,
      ...slide_config?.breakpoints,
    },
    modules: [Navigation, Pagination, Autoplay],
  };

  return (
        <Swiper  {...config}>
            {itens?.map((item, idx) => (
                <SwiperSlide key={idx}>
                    {renderItem(item)}
                </SwiperSlide>
            ))}

        </Swiper>
        );
};
