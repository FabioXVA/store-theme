import {render, screen } from '@testing-library/react';
import ProductsPage  from "../ProductsPage/ProductsPage";
import { useProduct } from '../../hooks/useProduct/useProduct';

jest.mock("../../hooks/useProduct/useProduct");

const mockUseProduct = useProduct as jest.Mock;

describe("ProductPage", ()=>{
    it("deve mostrar o loading", () =>{
        mockUseProduct.mockReturnValue({
            products: [],
            load: true,
            error: null
        });

        render(<ProductsPage/>);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    })

    it("deve mostrar o erro", ()=> {
        mockUseProduct.mockReturnValue({
            products: [],
            load: false,
            error: null
        });
        render(<ProductsPage/>);
        expect(screen.getByText(/No Product found/i)).toBeInTheDocument()
    })
    it("deve renderizar a lista de produtos", async ()=> {
        mockUseProduct.mockReturnValue({
            products:[{
                id: "1",
                name: "carro",
                price: 10,
                createdAt: "02-04-2026"
            }],
            load: false,
            error: false
        })
        render(<ProductsPage/>)
       const product = await screen.findByText(/carro/i)

       expect(product).toBeInTheDocument();

    })
    it("deve mostrar que os Produtos não foram emcontrados", ()=> {
        mockUseProduct.mockReturnValue({
            products: [],
            load: false,
            error: false
        })
        render(<ProductsPage/>)
        expect(screen.getByText(/No Product found/i)).toBeInTheDocument()
    })
})