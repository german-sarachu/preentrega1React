import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

function ItemListContainer({ saludo }) {
  const { categoryName } = useParams();
  const { isLoading, products } = useProducts(categoryName);
  const [productsFilters, setProductsFilters] = useState([]);

  if (isLoading) return <h1>Cargando...</h1>;

  useEffect(() => {
    if (categoryName) {
      setProductsFilters(products.filter((el) => el.category == categoryName));
    }
  }, [categoryName]);

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
