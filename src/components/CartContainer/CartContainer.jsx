import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import { useState } from "react";
import { useEffect } from "react";

export default function CartContainer() {
  const { cart, clearCart, cartTotal, generateOrder } = useContext(CartContext);

  const [order, setOrder] = useState();

  const handleGenerateOrder = async () => {
    const result = await generateOrder();
    setOrder(result);
  };

  return (
    <div className="pt-3">
      <h2 className="text-2xl font-semibold">Mi Carrito</h2>
      <div className="pt-3 flex flex-col gap-5">
        {cart.length === 0 ? (
          <h1>No hay productos en el carrito</h1>
        ) : (
          cart.map((item) => {
            return <CartItem key={item.product.id} item={item} />;
          })
        )}
      </div>
      <h3 className="text-xl font-semibold mt-3">Total: ${cartTotal}</h3>
      <button
        className="mt-3 bg-red-400 text-white rounded-md px-2 py-1"
        onClick={clearCart}
      >
        Limpiar carrito
      </button>
      <button onClick={() => handleGenerateOrder()}>Generar orden</button>

      {order && (
        <div>
          <header>
            <h4>order id: {order.id}</h4>
          </header>
          <section>
            {order.cart.map((item) => (
              <article key={item.product.id}>
                <header>
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.title}
                    height={100}
                  />
                  <h5>{item.product.title}</h5>
                </header>
                <footer>
                  <p>total: ${item.product.price * item.quantity}</p>
                </footer>
              </article>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
