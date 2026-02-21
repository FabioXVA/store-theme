import type { JSX } from "react"

import { ArrowRight } from "../../../../../assets/ArrowRight"
import { Card } from "../../../../../shered/components/Card"
import type { FeaturedProductItemProps } from "../types"

export const FeaturedProductItem = (props: FeaturedProductItemProps): JSX.Element => {
  const { title, image, link, featuredProductClass } = props

  return (
    <div
      data-testid="FeaturedProduct"
      className={`${featuredProductClass} h-[420px] w-full mx-w-[400px] p-8 max-w-md mx-auto flex flex-col content-center items-center  justify-end rounded-md shadow-md`}
    >
      <Card imgAlt={title} imgSrc={image} class_card_image="h-2/3 ">
        <div className="banner-info mt-4 flex flex-col ">
          <h2 className="font-open-sans text-2xl font-bold tracking-tight dark:text-white overflow-hidden line-clamp-1">
            {title}
          </h2>
          <a
            href={link}
            className="text-white mt-4  text-sm hover:text-gray-300  flex items-center gap-2"
          >
            Mais informações <ArrowRight />
          </a>
        </div>
      </Card>
    </div>
  )
}
