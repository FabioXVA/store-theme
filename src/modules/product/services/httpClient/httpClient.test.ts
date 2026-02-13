import { httpClient } from "./httpClient";

const mockProduct = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category:"men's clothing",
        rating: {rate: 3.9, count: 120},
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
    }
];
describe("httpClient", ()=>{
    beforeEach(() => {
        jest.resetAllMocks()
    })

    it("should request http successfully", async () => {
        (fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: async () => ({ data: "ok" })
        })

        const result = await httpClient.get("https://fakestoreapi.com/products")
        
        expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products")
        expect(result).toEqual({ data: "ok" })
    })
    it("should throw error when request fails", async ()=>{
        (fetch as jest.Mock) = jest.fn().mockResolvedValue({
            ok: true,
            status: 200,
            json: async () => ({
              mockProduct
            })
        })
        const result = await httpClient.get<typeof mockProduct>("https://fakestoreapi.com/products");
        expect(fetch).toHaveBeenCalledWith("https://fakestoreapi.com/products") 
        expect(result).toEqual({mockProduct})
    })
    })

