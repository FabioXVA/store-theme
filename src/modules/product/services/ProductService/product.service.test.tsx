
import { httpClient } from "../httpClient/httpClient";

jest.mock("../httpClient/httpClient")

const mockProduct = [
    {id: "1", name: "carro",price: 12000, createdAt: "02-02-2022"},
    {id: "2",name: "Moto",price: 7000, createdAt: "04-01-2026"}
];
describe("ProductService", ()=>{
    const httpClientmocked =  httpClient as jest.Mocked<typeof httpClient>
    
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("Should return products", async () =>{
        httpClientmocked.get.mockResolvedValueOnce("http://localhost:3001/products")
        const result =  await httpClient.get("http://localhost:3001/products")
        expect(result).toEqual(mockProduct)
    })
})




