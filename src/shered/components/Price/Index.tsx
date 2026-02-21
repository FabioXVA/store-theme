import { formatBRL, getFormattedPrice } from "./utils"

interface PriceProps {
  price: number
  className?: string
}

export const Price = ({ price, className }: PriceProps) => {
  const priceFormated = formatBRL(getFormattedPrice(price))
  return <p className={className}>{priceFormated}</p>
}
