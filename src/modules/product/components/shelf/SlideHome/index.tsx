import { SlideItem } from './SlideItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SlideProps, SlideItemProps } from './types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Slider({slideProps}: SlideProps ) {
    
    return(
       <>
         <Swiper 
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false, 
            }}
            pagination={{ clickable: true }}
            >
                {slideProps && slideProps.map((slide: SlideItemProps, idx: number) => (
                    <SwiperSlide key={idx}>
                        <SlideItem {...slide}  key={idx}/>
                    </SwiperSlide>
                ))}
        </Swiper>
       </>

    )
}