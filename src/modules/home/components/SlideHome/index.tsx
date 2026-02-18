import { SlideItem } from './SlideItem';
import { SlideProps } from './types';
import { Carousel } from '../../../../shered/components/Carousel';
import { slide_config } from "./slide_config"


export default function Slider({slideProps}: SlideProps ) {
    return(
       <>
            <Carousel
                slide_config={slide_config}
                itens={slideProps}
                renderItem={(slideProp) => (
                <SlideItem {...slideProp} />
            )}
            />
       </>

    )
}