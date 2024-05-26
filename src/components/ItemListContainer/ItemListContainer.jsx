import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ItemListContainer({ saludo }) {
  const { isLoading, products } = useProducts();
  const [productFilter, setProductFilter] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    if (products) {
      const newArray = [];
      
      if (category != null) {
        products.map((product) => {
          if (product.category === category) {
            newArray.push(product);
          }
        });
        setProductFilter(newArray);
      } else {
        setProductFilter(products);
      }
    }
  }, [category, products]);

  if (isLoading) return <h2>...Cargando</h2>;

  return (
    <div>
      <h1 className="contenedorListContainer textoAnimado">{saludo}</h1>
      <ItemList products={category ? productFilter : products} />
    </div>
  );
}
