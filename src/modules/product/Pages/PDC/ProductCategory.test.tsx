import {screen, render} from "@testing-library/react";
import { useProducts } from "../../hooks/useProducts/useProducts";
import * as Router from "react-router";
import ProductCategory from "./ProductCategory";

jest.mock("../../hooks/useProducts/useProducts");
jest.mock("react-router", () => ({
    ...jest.requireActual("react-router"),
        useParams: jest.fn()
    }));


const mockProducts = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category:"jewelery",
        rating: {rate: 3.9, count: 120},
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
    },
    {  
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        category: "men's clothing",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        price: 22.3,
        rating: {rate: 4.1, count: 259},
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
    }
];

describe("ProductCategory", ()=>{
    it("testa o filtro de produtos", async () =>{
        (Router.useParams as jest.Mock).mockReturnValue(
            {category:"jewelery"}
        );
        (useProducts as jest.Mock).mockReturnValue({ 
            products:mockProducts,
            load: false, 
            error: null 
        });
 
        render(<ProductCategory/>)

        const items = await screen.findAllByTestId("product-item")
        
        expect(items).toHaveLength(1)
        expect(await screen.findByText(/Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops/i)).toBeInTheDocument()
        expect(await screen.queryByText(/Mens Casual Premium Slim Fit T-Shirts/i)).not.toBeInTheDocument()
   
    })

    it("testa a renderização o loading", async () => {
        (Router.useParams as jest.Mock).mockReturnValue({category:"jewelery"});
        (useProducts as jest.Mock).mockReturnValue({
            products: [],
            load: true,
            error: null
        });
        render(<ProductCategory/>)
        expect( await screen.findByText(/Carregando.../i)).toBeInTheDocument()
    })
})