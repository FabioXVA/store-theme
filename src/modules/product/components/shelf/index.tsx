import { ProductCard } from "../ProductCard"
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from "../../types/Product";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SWIPER_CONFIG = {
    modules: [Navigation, Pagination, Autoplay],
    navigation: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: { clickable: true },
}
;
interface ShelfProps {
    slide_config?: typeof SWIPER_CONFIG;
    products: Product[];
}

export const Shelf = ({ slide_config = SWIPER_CONFIG, products }: ShelfProps) => {

    return(
        <Swiper 
                modules={slide_config.modules}
                navigation={slide_config.navigation}
                loop={slide_config.loop}
                autoplay={slide_config.autoplay}
                pagination={slide_config.pagination}
                slidesPerView={4}
                spaceBetween={16}
            >
          {products?.map((product: Product, idx: number) => {
                return(
                    <SwiperSlide  key={idx}>
                        <ProductCard {...product} />
                    </SwiperSlide>
                )
            })}
        
        </Swiper>
    )

}
export default Shelf;
