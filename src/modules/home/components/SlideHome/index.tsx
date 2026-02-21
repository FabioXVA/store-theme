import type { ReactNode } from "react"

import { Carousel } from "../../../../shered/components/Carousel"
import { slide_config } from "./slide_config"
import { SlideItem } from "./SlideItem"
import type { SlideProps } from "./types"

export default function Slider({ slideProps }: SlideProps): ReactNode {
  return (
    <>
      <Carousel
        slide_config={slide_config}
        itens={slideProps}
        renderItem={(slideProp) => <SlideItem {...slideProp} />}
      />
    </>
  )
}
