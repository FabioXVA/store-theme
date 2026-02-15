import { Product } from "../../types/Product";
import { ProductCard } from "../ProductCard";

type Props = {
    products: Product[]
}

const ProductList = ({products}: Props) =>{
    if(products.length == 0 ){
        return <p>Produto não encontrado</p>
    }
    return(
          <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Lista de produtos</h2>
                    <div className="mt-6 gap-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product, key) => {
                        return(
                            // <div className="group relative" key={key}>
                            //     <ProductItem product={product} />
                            // </div>    
                            <div className="group relative" key={key}>
                                <ProductCard {...product} />
                            </div>    
                        )
                    })}
               </div>
            </div>
        </div>
    )
}

export default ProductList;