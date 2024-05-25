import Item from "./Item";
import "./Item.css";

export default function ItemList({ products }) {
  return (
    <div style={listContainerStyle}>
      {products.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
}

const listContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between"
};