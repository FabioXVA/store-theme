import  Banner  from "../../shered/components/Banner";
import { bannerProducts } from "./props";

export default function  Home() {   
    return (
        <div>
             <h1>Home Page</h1>
             <div className="bg-gray-100 p-4  max-w-full mx-auto">
                   <Banner bannerProducts={bannerProducts} />
             </div>
           
    </div>
    )
}