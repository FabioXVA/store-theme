import {useEffect, useState} from "react";
import { Product } from "../types/Product";
import { productservice } from "../services/product.service";


export function useProduct() {
        const [products, setProducts] = useState<Product[]>();
        const [error, setError] = useState<Error | null>(null);
        const [load, setLoad] = useState(true)

        useEffect(()=>{
             productservice
            .list()
            .then(setProducts)
            .catch(err => setError(err))
            .finally(() => setLoad(false))
        }, []);
        
    return{products, error, load}
}