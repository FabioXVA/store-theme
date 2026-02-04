import { renderHook, waitFor } from "@testing-library/react";   
import { useProduct } from "./useProduct";
import ProductService  from "../../services/ProductService/product.service";

jest.mock("../../services/ProductService/product.service")
const mockedProductService = ProductService as jest.Mocked<typeof ProductService>;

describe("useProduct", () =>{
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it('should start with loading true and empty products', async ()=>{
        mockedProductService.getAll.mockResolvedValueOnce([])

        const { result } = await renderHook(()=> useProduct())

        expect(result.current.load).toBe(true)
        expect(result.current.products).toEqual([])
        expect(result.current.error).toBeNull()
        
        await waitFor(()=> expect(result.current.load).toBe(false))
    })

    it('should load products successfully', async()=> {
        const mockProducts = [
            {id: 1, name: "carro", price: 10.000, createAt: "02-10-2026"},
            {id: 3, name: "casa", price: 100.000, createAt: "02-10-2026"}
        ];

        (ProductService.getAll as jest.Mock).mockResolvedValueOnce(mockProducts)

        const { result } = renderHook(() => useProduct())

        await waitFor(() => {
            expect(result.current.load).toBe(false)
            expect(result.current.products).toEqual(mockProducts)
            expect(result.current.error).toBeNull()
        })
    })
    it('should handle error', async () => {
        mockedProductService.getAll.mockRejectedValueOnce(new Error('fail'))

        const{ result } = renderHook(() => useProduct())
        
        await waitFor(()=>{
            expect(result.current.load).toBe(false)
        })
        expect(result.current.error).toBeTruthy()
    })
})