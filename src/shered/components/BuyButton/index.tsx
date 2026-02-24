import type { JSX } from "react"

import { useCart } from "@/modules/cart/domain/useCases/useCart"
import { productToCartItem } from "@/modules/cart/services/mappers/productToCartItem"
import type { Product } from "@/modules/product/types/Product"

import { Button } from "../Button"

export const BuyButton = (product: Product): JSX.Element => {
  const { addToCart } = useCart()
  const cardItem = productToCartItem(product)
  const Icon = (
    <svg
      className="w-5 h-5 -ms-2 me-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
      />
    </svg>
  )

  return (
    <>
      <Button
        link=""
        type="button"
        title="Adicionar ao carrinho"
        icon={Icon}
        onclick={() => addToCart(cardItem)}
      />
    </>
  )
}
