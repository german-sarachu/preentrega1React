import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import useProduct from "../../hooks/useProduct";
import "./ItemDetailContainer.css";
import { useEffect } from "react";

export default function ItemDetailContainer() {
  const { productId } = useParams();
  const { isLoading, product, getProduct } = useProduct();

  useEffect(() => {
    getProduct(productId);
  }, [productId]);

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div className="item--detail__container">
      {!product && <h2>Producto no encontrado</h2>}
      {product && <ItemDetail item={product} />}
    </div>
  );
}
