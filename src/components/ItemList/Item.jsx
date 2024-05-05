import useCount from "../../hooks/useCount";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";

export default function Item({ item }) {
  const { count, increment, decrement } = useCount(0);

  const onAdd = (nombreDeItem, cantidadALlevar) => {
    console.log("nombre del item: ", nombreDeItem);
    console.log("cantidad a llevar: ", cantidadALlevar);
  };

  return (
    <div className="item__container">
      <div className="item--img__container">
        <img
          className="item--img"
          src={item.img}
          alt={item.title}
        />
      </div>
      <h2 className="item--title">{item.title}</h2>
      <p className="item--description">{item.description}</p>
      <p className="item--price">${item.price}</p>

      <div className="item--counter__container">
        <ItemCount
          count={count}
          increment={increment}
          decrement={decrement}
          stock={item.stock}
        />
      </div>
      <div className="item--cart__container">
        <button
          className="item--cart__button"
          onClick={() => onAdd(item, count)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
