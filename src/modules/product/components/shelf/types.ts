import { Product } from "../../types/Product";
import { SwiperOptions } from "swiper/types";

export interface ShelfProps {
  slide_config?: SwiperOptions;
  products: Product[];
}