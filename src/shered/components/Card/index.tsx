import type { JSX } from "react"

import type { CardProps } from "./types"

export const Card = ({
  imgAlt,
  imgSrc,
  class_card,
  class_card_image,
  children,
}: CardProps): JSX.Element => {
  return (
    <div className={`h-full max-w-67.5 ${class_card}`}>
      <img
        src={imgSrc}
        alt={imgAlt}
        className={`${class_card_image} object-contain w-full`}
      />
      <div className="mt-4 flex flex-col">{children}</div>
    </div>
  )
}
