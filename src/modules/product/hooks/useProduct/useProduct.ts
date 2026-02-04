import {useEffect, useState} from "react";
import { Product } from "../../types/Product";
import ProductService  from "../../services/ProductService/product.service";


export function useProduct() {
        const [products, setProducts] = useState<Product[]>([]);
        const [error, setError] = useState<Error | null>(null);
        const [load, setLoad] = useState(true)

        useEffect(()=>{
             ProductService
            .getAll()
            .then(setProducts)
            .catch(err => setError(err))
            .finally(() => setLoad(false))
        }, []);
        
    return{products, error, load}
}