import { httpClient } from "./httpClient";

describe("httpClient", ()=>{
    it("should request http", ()=>{
        expect(httpClient.get("https://fakestoreapi.com/products")).toBe(true)
    })
})