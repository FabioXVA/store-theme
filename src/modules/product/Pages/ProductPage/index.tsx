import { useParams } from "react-router-dom"; 
import { ProductItem } from "../../components/ProductItem/ProductItem";
import { useProduct } from "../../hooks/useProduct/useProduct";

export default function ProductPage() {
  const { id } = useParams();
  const { product, load, error } = useProduct(Number(id));

  if (load) return <p>Loading...</p>;
  if (error) return <p>{error.toString()}</p>;
  if (!product) return <p>No Product found</p>;

  return (
    <div className="bg-gray-900 h-lvh">
      <ProductItem product={product} />
    </div>
  );
}
