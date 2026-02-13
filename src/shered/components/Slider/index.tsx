
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { SlideProps, SlideItemProps } from './types';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Slider({slideProps}: SlideProps) {
    

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
                {slideProps && slideProps.map((slide: SlideItemProps) => (
                 <SwiperSlide>
                    <div className='relative' key={slide.title}>
                        {slide.image && 
                            <img src={`/images/slide/${slide.image}`} />
                        }
                        <div className="absolute bottom-[60px] right-[60px] flex flex-col">
                            {slide.title &&
                                <h5 className="text-white text-4xl">{slide.title}</h5>
                            }
                            {slide.subtitle && 
                                <span className="text-white mb-[16px]">{slide.subtitle}</span>
                            }
                           {slide.link && slide.buttonText && 
                                <a  className="bg-yellow-400 pt-2 pb-2 rounded-sm font-bold shadow-sm/20 font-sans w-[170px] text-center item self-end" href={slide.link}>
                                    {slide.buttonText}
                                </a>
                            }
                        </div>
                    </div>
                 </SwiperSlide>
                ))}
                
                
        </Swiper>
       </>

    )
}