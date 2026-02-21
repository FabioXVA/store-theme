import type { JSX } from "react"

import { formatBRL } from "./utils"

interface PriceProps {
  price: number
  className?: string
}

export const Price = ({ price, className }: PriceProps): JSX.Element => {
  const priceFormated = formatBRL(price)

  return <p className={className}>{priceFormated ?? "—"}</p>
}
