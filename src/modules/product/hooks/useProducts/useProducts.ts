import { useEffect, useState } from "react"

import {
  ProductService,
  ProductServiceError,
} from "@/modules/product/services/ProductService/product.service"
import type { Product } from "@/modules/product/types/Product"

export function useProducts(): {
  products: Product[]
  error: Error | string | null
  load: boolean
} {
  const [products, setProducts] = useState<Product[]>([])
  const [error, setError] = useState<Error | string | null>(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
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
