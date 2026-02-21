import { useEffect, useState } from "react"

import {
  ProductService,
  ProductServiceError,
} from "../../services/ProductService/product.service"
import type { Product } from "../../types/Product"

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<Error | string | null>(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getAll()
        setProducts(data)
      } catch (err) {
        if (err instanceof ProductServiceError) {
          setError(err.message)
        } else {
          setError("An unexpected error occurred")
        }
      } finally {
        setLoad(false)
      }
    }
    fetchProducts()
  }, [])

  return { products, error, load }
}
