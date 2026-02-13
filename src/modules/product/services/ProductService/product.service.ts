import { Product } from "../../types/Product"
import { httpClient } from "../httpClient/httpClient"

export class ProductServiceError extends Error {}

export const ProductService = {
    getAll: async (): Promise<Product[]> =>   {
        try{
            const response =  await httpClient.get<Product[]>("https://fakestoreapi.com/products")
            return response
            
        }catch(error){
            throw new ProductServiceError(`Erro ao buscar: ${error}`)
        }
    },
    getProduct: async (id: number) =>{
            try{
                const response = await httpClient.get<Product>(`https://fakestoreapi.com/products/${id}`)
                  console.log("response", response)
                return response
                
            }catch(err){
                throw new ProductServiceError(`Erro ao buscar produto: ${err}`)
            }
          
         
    }
}

export default ProductService