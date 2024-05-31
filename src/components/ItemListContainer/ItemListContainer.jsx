import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

function ItemListContainer({ saludo }) {
  const { categoryName } = useParams();
  const [productsFilters, setProductsFilters] = useState([]);
  const { isLoading, products } = useProducts(categoryName);

  useEffect(() => {
    if (categoryName) {
      setProductsFilters(products.filter((el) => el.category == categoryName));
    }
  }, [categoryName, products]);
  
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
