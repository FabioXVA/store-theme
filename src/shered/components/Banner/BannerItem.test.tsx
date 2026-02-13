
import {render , screen } from "@testing-library/react"
import  Banner  from "./index"
const bannerProducts = [
    {
        title:"Fjallraven - Foldsack No. 1 Backpack", 
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png", 
        link:"/product/1",
        bannerClass:"bg-gray-900/95"
    },
    {
        title:"Cotton T-Shirts", 
        image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png", 
        link:"/product/1",
        bannerClass:"bg-gray-900/95"
    }
];

describe("Banner", ()=> {
    it("deve deve renderizar mais de um item", ()=>{
        render(<Banner bannerProducts = {bannerProducts} />)
        expect(screen.getAllByTestId("banner")).toHaveLength(2)
    })
} )

