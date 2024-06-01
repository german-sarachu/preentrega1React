import { useContext } from "react";
import CartContext from "../../contexts/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart, addToCart } = useContext(CartContext);

  return (
    <div
      key={item.product.id}
      className="
               flex items-center justify-between
              "
    >
      <div className="flex gap-5 items-center">
        <div className="max-w-[50px]">
          <img style={{ width: '120px', height: 'auto', objectFit: 'cover' }} src={item.product.img} alt={item.product.title} />
        </div>
        <div>
          <p>{item.product.title}</p>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.product.price}</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          className="px-1 rounded-full bg-slate-300"
          onClick={() => removeFromCart(item.product.id, 1)}
        >
          -
        </button>
        <button
          className="px-1 rounded-full bg-slate-300"
          onClick={() => addToCart(item.product, 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}