import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";

function ItemListContainer({ saludo }) {
  const { categoryName } = useParams();
  const { isLoading, products } = useProducts();
  const [productsFilters, setProductsFilters] = useState([]);

  useEffect(() => {
    if (categoryName && products) {
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

