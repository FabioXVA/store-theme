import { useEffect, useState } from "react"

import {
  ProductService,
  ProductServiceError,
} from "@/modules/product/services/ProductService/product.service"
import type { Product } from "@/modules/product/types/Product"

export function useProduct(id: number): {
  product: Product | null
  error: Error | string | null
  load: boolean
} {
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<Error | string | null>(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    ProductService.getProduct(id)
      .then(setProduct)
      .catch((err) => err instanceof ProductServiceError && setError(err.message))
      .finally(() => setLoad(false))
  }, [id])

  return { product, error, load }
}
