import type { JSX } from "react"

import type { SlideItemProps } from "../types"

export const SlideItem = (slideItemProps: SlideItemProps): JSX.Element => {
  const { title, image, subtitle, link, buttonText } = slideItemProps

  return (
    <div className="relative">
      {image && <img src={`/images/slide/${image}`} />}
      <div className="absolute bottom-[60px] right-[60px] flex flex-col">
        {title && <h5 className="text-white text-4xl">{title}</h5>}
        {subtitle && <span className="text-white mb-[16px]">{subtitle}</span>}
        {link && buttonText && (
          <a
            className="bg-yellow-400 pt-2 pb-2 rounded-sm font-bold shadow-sm/20 font-sans w-[170px] text-center item self-end"
            href={link}
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  )
}
