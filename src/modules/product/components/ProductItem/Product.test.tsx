import { render, screen } from "@testing-library/react";
import { ProductItem } from "./ProductItem"

describe("ProductItem", ()=> {
    
    it("render product Item", () =>{
        const mockProduct = {
            id: 1,
            title: "Test Product",
            price: 100,
            description: "Test Description",
            category: "Test Category",
            rating: {rate: 4.5, count: 100},
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        }
        render(<ProductItem product={mockProduct}/>)
        expect(screen.getByTestId("product-item")).toBeInTheDocument()
    })

    it("isso deve mostar a imagem do produto", () => {
        const mockProduct = {
            id: 1,
            title: "Test Product",
            price: 100,
            description: "Test Description",
            category: "Test Category",
            rating: {rate: 4.5, count: 100},
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
        }

        render(<ProductItem product={mockProduct}/>)

        const imgElement = screen.getByRole("img") as HTMLImageElement;
        
        expect(imgElement).toBeInTheDocument()
        expect(imgElement.src).toBe(mockProduct.image)
        expect(screen.getByText("Test Product")).toBeInTheDocument()
        expect(screen.getByText("R$ 100")).toBeInTheDocument()
        expect(screen.getByText("Test Category")).toBeInTheDocument()
    })
    
})