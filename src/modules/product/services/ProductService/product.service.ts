import { Product } from "../../types/Product";

let products: Product[] = [];

const ProductService = {
    getAll: async (): Promise<Product[]> => {
        const responce  = await fetch("/API/")
        return responce.json()
    },
}

export default ProductService