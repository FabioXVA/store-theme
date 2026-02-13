import { BannerItem } from "./BannerItem";
import { BannerProps } from "./types";

export function Banner({bannerProducts}: BannerProps) {

    return(
      <div>
        <p className="text-2xl font-open-sans text-gray-900 text-center mb-[1rem]">Produtos em destaque</p>
        <div className="flex items-center gap-4">
            {bannerProducts.map((product, index) => {
                return <BannerItem key={index} {...product} />
            })}
       </div>
      </div>
    )
}