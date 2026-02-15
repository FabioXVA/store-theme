import  {FeaturedProduct}  from "../product/components/FeaturedProduct";
import Slider from "../home/components/SlideHome";
import { bannerProducts, slideProps } from "./props";
import { useProducts } from "../product/hooks/useProducts/useProducts";
import Shelf from "../product/components/Shelf";
import { Product } from "../product/types/Product";


export default function  Home() {  
      const { products, load, error } = useProducts();
    
      if (load) return <p>Loading...</p>;
      if (error) return <p>{error.toString()}</p>;
      if (!products.length) return <p>No Product found</p>;

    const filterProducts = products.filter((c:Product)=>{
            return c.category === "electronics"
        })
        
    return (
        <div>
             <h1>Home Page</h1>
            <div className="max-w-[1345px]  m-auto">
                 <Slider slideProps={slideProps}  />    
            </div>
             <div className="bg-gray-100 p-4  max-w-full mx-auto pt-[32px]">
                <div className="max-w-[1345px] m-auto">
                   <FeaturedProduct products={bannerProducts} />  
                </div>
             </div>
             <div className=" p-4  max-w-full mx-auto pt-[32px]">
                <div className="max-w-[1345px] m-auto">
                    <Shelf products={filterProducts} />  
                </div>
             </div>
        </div>
    )
}