import {render, screen} from "@testing-library/react"
import { FeaturedProductItem } from "./index";

const mockBannerProduct = {  
        title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png", 
        link:"/product/1",
        bannerClass:"bg-gray-900/95"
    }

describe ("BannerItem component", () => {
        it("deve renderizar o componente BannerItem corretamente", () => {
           	render(<FeaturedProductItem {...mockBannerProduct} />)

            expect(screen.getAllByTestId("FeaturedProduct")).toHaveLength(1)
            expect(screen.getByText(/Fjallraven/)).toBeInTheDocument()
            expect(screen.getByText(/Mais informações/i)).toBeInTheDocument()
        })
});