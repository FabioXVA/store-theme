import { useEffect, useState } from "react"

import {
  ProductService,
  ProductServiceError,
} from "../../services/ProductService/product.service"
import type { Product } from "../../types/Product"

export function useProduct(id: number) {
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<Error | string | null>(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    ProductService.getProduct(id)
      .then(setProduct)
      .catch((err) => err instanceof ProductServiceError && setError(err.message))
      .finally(() => setLoad(false))
  }, [])

  return { product, error, load }
}
