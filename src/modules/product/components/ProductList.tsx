import { Product } from "../types/Product";

type Props = {
    products: Product[]
}

const ProductList = ({products}: Props) =>{
    if(products.length == 0 ){
        return <p> Produto não encontrado</p>
        
    }
    return(
        <ul>
            {products.map(product => {
                return <li key={product.id}>{product.name} - {product.price}</li>
            })}
        </ul>
    )
}

export default ProductList;