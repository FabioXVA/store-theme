import { getFormattedPrice, formatBRL } from "./utils"

export const Price = ({ price }: { price: number }) => {
    const priceFormated = formatBRL(getFormattedPrice(price))
    return(
        <p  className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white" >{priceFormated}</p>
    )
}