import { SlideItem } from './SlideItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SlideProps, SlideItemProps } from './types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Carousel } from '../../../../shered/components/Carousel';

const finalConfig = {
    navigation: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000
    },
    breakpoints:{ },
    pagination: { clickable: true },
};

export default function Slider({slideProps}: SlideProps ) {
    return(
       <>
            <Carousel
                slide_config={ finalConfig}
                itens={slideProps}
                renderItem={(slideProp) => (
                <SlideItem {...slideProp} />
            )}
            />
       </>

    )
}