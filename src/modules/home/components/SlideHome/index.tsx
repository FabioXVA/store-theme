import { SlideItem } from './SlideItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SlideProps, SlideItemProps } from './types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SWIPER_MODULES = [Navigation, Pagination, Autoplay];

const swiperOptions = {
    navigation: true,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: { clickable: true },
} as const;

export default function Slider({slideProps}: SlideProps ) {
    return(
       <>
         <Swiper
            modules={SWIPER_MODULES}
            navigation={swiperOptions.navigation}
            loop={swiperOptions.loop}
            autoplay={swiperOptions.autoplay}
            pagination={swiperOptions.pagination}
         >
                {slideProps?.map((slide: SlideItemProps, idx: number) => (
                    <SwiperSlide key={idx}>
                        <SlideItem {...slide} />
                    </SwiperSlide>
                ))}
        </Swiper>
       </>

    )
}