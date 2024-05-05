import "./ItemListContainer.css";
import React from "react";
import ItemList from "../ItemList/ItemList";
import { getProductsByCategory, getProducts } from "../../mocks/asyncMock";

export default function ItemListContainer({ saludo, category }) {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  
  React.useEffect(() => {
    setIsLoading(true);
    if (category) {
      // Si se proporciona una categoría, obtenemos los productos por esa categoría
      getProductsByCategory(category)
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products by category:", error);
        setIsLoading(false);
      });
    } else {
      // Si no se proporciona una categoría, obtenemos todos los productos
      getProducts()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching all products:", error);
          setIsLoading(false);
        });
    }
  }, [category]);
  
  return (
    <div>
      <h2 className="contenedorListContainer textoAnimado">{saludo}</h2>
      {isLoading ? (
        <h2>Cargando...</h2>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

/*import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import useProduct from "../../hooks/useProduct";

function ItemListContainer({ saludo }) {
  const { isLoading : productsLoading, products } = useProducts();
  /*const { product, isLoading : product4Loading} = useProduct(4); para traer un producto por id*/

/*  if (productsLoading) return <h2>...Cargando</h2>;

  return (
    <div>
      <h1 className="contenedorListContainer textoAnimado">{saludo}</h1>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;*/