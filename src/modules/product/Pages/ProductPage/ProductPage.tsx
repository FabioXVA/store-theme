import { render } from "@testing-library/react"
import  { useProduct } from "../../hooks/useProducts/useProduct"
import { Product } from "../../types/Product"

export const ProductPage = () =>{
    const result = useProduct<Product>()

    const product = result.products.map(product => {
        return product
    })

    render(
        <>{product}</>
    )
}