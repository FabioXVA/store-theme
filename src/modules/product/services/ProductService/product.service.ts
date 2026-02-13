import { Product } from "../../types/Product"
import { httpClient } from "../httpClient/httpClient"

export class ProductServiceError extends Error {}

export const ProductService = {
    getAll: async (): Promise<Product[]> =>   {
        try{
            return await httpClient.get<Product[]>("https://fakestoreapi.com/products")
        }catch(error){
            throw new ProductServiceError(`Erro ao buscar: ${error}`)
        }
        
    },
    getProduct: async ():Promise<Product[]> =>{
            try{
                return await httpClient.get('https://fakestoreapi.com/products/{id}');   
            }catch(err){
                throw new ProductServiceError(`Erro ao buscar produtp: ${err}`)
            }
             

    }
}

export default ProductService