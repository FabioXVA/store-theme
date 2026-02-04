import { Product } from "../types/Product";

let products: Product[] = [
    {
        id: "1",
        name: "carro",
        price: 10
    },
     {
        id: "2",
        name: "casa",
        price: 20
    }
];

export const productservice = {
    async list(): Promise<Product[]>{
        return new Promise(resolve =>{
            setTimeout(() => resolve(products), 300)
        })
    },
}