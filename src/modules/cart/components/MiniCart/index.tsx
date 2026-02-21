import type { JSX } from "react"

import { Drawer } from "../../../../shered/components/Drawer"
import { ProductCard } from "../../../product/components/ProductCard"
import { useProducts } from "../../../product/hooks/useProducts/useProducts"
import type { Product } from "../../../product/types/Product"

const MiniCart = (): JSX.Element => {
  const { products, load, error } = useProducts()

  if (load) return <p>Loading...</p>
  if (error) return <p>{error.toString()}</p>

  return (
    <Drawer id={""}>
      {products.map((product: Product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Drawer>
  )
}

export default MiniCart
