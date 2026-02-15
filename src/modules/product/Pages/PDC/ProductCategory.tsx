import { Product } from "../../types/Product";
import { useProducts } from "../../hooks/useProducts/useProducts";
import { useParams } from "react-router";
import Shelf from "../../components/Shelf";

export default function ProductCategory (){
    const {products, load} = useProducts()
    const {category} = useParams()
    if(load) return <p>Carregando...</p>
        
    const filterProducts = products.filter((c:Product)=>{
        return c.category === category
    })
    
    return (
        <Shelf products={filterProducts}/>
    )
}


