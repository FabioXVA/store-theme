import {useEffect, useState} from "react";
import { Product } from "../../types/Product";
import {ProductService, ProductServiceError } from "../../services/ProductService/product.service";


export function useProducts() {
        const [products, setProducts] = useState<Product[]>([]);
        const [error, setError] = useState<Error | string | null>(null);
        const [load, setLoad] = useState(true)

        useEffect(()=>{
             ProductService
            .getAll()
            .then(setProducts)
            .catch(err => err instanceof ProductServiceError && setError(err.message))
            .finally(() => setLoad(false))
        }, []);
        
    return{products, error, load}
}