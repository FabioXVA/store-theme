import { renderHook, waitFor } from "@testing-library/react";   
import { useProducts } from "./useProducts";
import {ProductService}  from "../../services/ProductService/product.service";

jest.mock("../../services/ProductService/product.service")
const mockedProductService = ProductService as jest.Mocked<typeof ProductService>;

const mockProducts = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category:"men's clothing",
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

describe("useProduct", () =>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it('should start with loading true and empty products', async ()=>{
        mockedProductService.getAll.mockResolvedValueOnce([])

        const { result } =  renderHook(() => useProducts())

        expect(result.current.load).toBe(true)
        expect(result.current.products).toEqual([])
        expect(result.current.error).toBeNull()
        
        await waitFor(()=> expect(result.current.load).toBe(false))
    })

    it('should load products successfully', async()=> {
        mockedProductService.getAll.mockResolvedValueOnce(mockProducts)
        
        const { result } =  renderHook(()=> useProducts())
        //estado inicial
        expect(result.current.load).toBe(true)


        await waitFor(() => {
            expect(result.current.load).toBe(false)
            expect(result.current.products).toEqual(mockProducts)
            expect(result.current.error).toBeNull()
        });
    })
    it('should handle error', async () => {
        mockedProductService.getAll.mockRejectedValueOnce(new Error('fail'))

        const{ result } =  renderHook(() => useProducts())
        
        await waitFor(()=>{
            expect(result.current.load).toBe(false)
        })
        expect(result.current.error).toBeTruthy()
    })
})