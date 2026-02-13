import {render, screen} from '@testing-library/react' 
import ProductList from "./ProductList"
import { Product } from '../../types/Product'

 const mockProduct: Product[] = [
    { id: "1", name: "carro", price: 12000, createdAt: "01-08-2010"},
    { id: "2", name: "moto", price: 7000, createdAt: "26-10-2005"}
]

describe("ProductList", ()=>{
    it("should show empy message", ()=>{
        render(<ProductList products={[]}/>)
        expect(screen.getByText("Produto não encontrado")).toBeInTheDocument()
    })

    it("should render a list of products", () =>{
       
        render(<ProductList products={mockProduct}/>)
        expect(screen.getByText("carro - 12000")).toBeInTheDocument()
        expect(screen.getByText("moto - 7000")).toBeInTheDocument()
    })
})