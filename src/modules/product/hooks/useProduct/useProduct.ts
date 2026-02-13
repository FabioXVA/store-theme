import {useEffect, useState} from "react";
import { Product } from "../../types/Product";
import {ProductService, ProductServiceError } from "../../services/ProductService/product.service";


export function useProduct(id: number) {
        const [product, setProduct] = useState<Product | null>(null);
        const [error, setError] = useState<Error | string | null>(null);
        const [load, setLoad] = useState(true)

        useEffect(()=>{
             ProductService
            .getProduct(id)
            .then(setProduct)
            .catch(err => err instanceof ProductServiceError && setError(err.message))
            .finally(() => setLoad(false))
        }, []);
        
    return{product, error, load}
}