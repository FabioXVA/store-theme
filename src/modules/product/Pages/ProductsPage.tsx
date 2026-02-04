import ProductList from "../components/ProductList";
import { useProduct } from "../hooks/useProduct";


export default function ProductsPage() {
    const {products, load, error}  = useProduct();

    if(load) return <p role="status">loading...</p>
    if(error) return <p>Something went wrong</p>

    return(
        <div>
            <h1>Products</h1><ProductList products={products || []} />
        </div>
    )
}
