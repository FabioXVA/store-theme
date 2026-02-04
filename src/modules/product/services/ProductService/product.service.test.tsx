import ProductService from "./product.service";

describe("ProductService", ()=>{
    it("should return products when API succeeds", async ()=> {
        const mockProduct = [
            {id: "1", name: "carro",price: 12000,createdAt: "02-02-2022"},
            {id: "2",name: "Moto",price: 7000,createdAt: "04-01-2026"}
        ];


        (fetch as jest.Mock).mockReturnValueOnce({
            json: async () => mockProduct,
        })

        const result = await ProductService.getAll()

        expect(fetch).toHaveBeenCalledWith('/API/')
        expect(result).toEqual(mockProduct)
    })
})