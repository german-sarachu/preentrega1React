import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function ItemListContainer({ saludo }) {
  const { categoryName } = useParams();
  const { isLoading, products } = useProducts(categoryName);
  const [productsFilters, setProductsFilters] = useState([]);

  useEffect(() => {
    if (categoryName) {
      setProductsFilters(products.filter((el) => el.category == categoryName));
    }
  }, [categoryName]);

  if (isLoading) return <h1>Cargando...</h1>;

  return (
    <div>
      <h1>{saludo}</h1>
      {categoryName ? (
        <ItemList products={productsFilters} />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;
