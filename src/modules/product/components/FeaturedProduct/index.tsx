import { FeaturedProductItem } from "./FeaturedProductItem";
import { FeaturedProductProps } from "./types";

export function FeaturedProduct({products}: FeaturedProductProps) {

    return(
      <div>
        <p className="text-2xl font-open-sans text-gray-900 text-center mb-[1rem]">Produtos em destaque</p>
        <div className="flex items-center gap-4">
            {products.map((product, index) => {
                return <FeaturedProductItem key={index} {...product} />
            })}
       </div>
      </div>
    )
}