import  Banner  from "../../shered/components/Banner";
import Slider from "../home/components/SlideHome";
import { bannerProducts, slideProps } from "./props";

export default function  Home() {  
    
    return (
        <div>
             <h1>Home Page</h1>
            <div>
                 <Slider slideProps={slideProps}  />    
            </div>
             <div className="bg-gray-100 p-4  max-w-full mx-auto pt-[32px]">
                   <Banner bannerProducts={bannerProducts} />  
             </div>
           
    </div>
    )
}