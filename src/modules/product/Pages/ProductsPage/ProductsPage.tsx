import ProductList from "../../components/ProductList/ProductList";
import { useProducts } from "../../hooks/useProducts/useProduct";


export default function ProductsPage() {
    const {products, load, error}  = useProducts();

    if(load) return <p role="status">loading...</p>
    if(error) return <p role="error">erro ao carregar os produtos</p>
    if(products?.length === 0) return <p>No Product found</p>

    return(
        <>
            <div>
                <h1>Products</h1><ProductList products={products || []} />
            </div>
        </>
    )
}
