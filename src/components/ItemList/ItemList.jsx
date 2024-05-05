import Item from "./Item";
import "./Item.css";

export default function ItemList({ products }) {
  return (
    <div style={listContainerStyle} className="item--list__container">
      {products.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
}

import React from "react";

const listContainerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between"
};