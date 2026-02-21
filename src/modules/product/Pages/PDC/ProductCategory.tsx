import type { JSX } from "react"
import { useParams } from "react-router"

import Shelf from "../../components/Shelf"
import { useProducts } from "../../hooks/useProducts/useProducts"
import type { Product } from "../../types/Product"

export default function ProductCategory(): JSX.Element {
  const { products, load } = useProducts()
  const { category } = useParams()
  if (load) return <p>Carregando...</p>

  const filterProducts = products.filter((c: Product) => {
    return c.category === category
  })

  return <Shelf products={filterProducts} />
}
