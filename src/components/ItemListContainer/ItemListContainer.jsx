import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import useProducts from "../../hooks/useProducts";
import useProduct from "../../hooks/useProduct";

export default function ItemListContainer({ saludo }) {
  const { isLoading : productsLoading, products } = useProducts();
  const { product, isLoading : product4Loading} = useProduct(4);

 if (productsLoading) return <h2>...Cargando</h2>;

  return (
    <div>
      <h1 className="contenedorListContainer textoAnimado">{saludo}</h1>
      <ItemList products={products} />
    </div>
  );
}