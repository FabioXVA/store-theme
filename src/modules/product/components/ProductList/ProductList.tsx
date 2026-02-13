import { Product } from "../../types/Product";

type Props = {
    products: Product[]
}

const ProductList = ({products}: Props) =>{
    if(products.length == 0 ){
        return <p>Produto não encontrado</p>
    }
    return(
        <div>
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} width="150px" height="160px"/>
                        <p>{product.price}</p>
                        <span>{product.category}</span>
                        <p>{product.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;