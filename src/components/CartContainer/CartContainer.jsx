import { useContext } from "react";
import CartContext from "../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";
import { useState } from "react";

export default function CartContainer() {
  const { cart, clearCart, cartTotal, generateOrder } = useContext(CartContext);

  const [order, setOrder] = useState();
  const [orderUserInfo, setOrderUserInfo] = useState({
    nombre: "",
    email: "",
    direccion: "",
  });

  const handleGenerateOrder = async (orderUserInfo) => {
    const result = await generateOrder({
      cart: cart,
      cartTotal: cartTotal,
      userInfo: orderUserInfo,
    });
    setOrder(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const direccion = document.getElementById("direccion");

    nombre.classList.remove("border-red-500");
    email.classList.remove("border-red-500");
    direccion.classList.remove("border-red-500");
    if (
      e.target.nombre.value == "" ||
      e.target.email.value == "" ||
      e.target.direccion.value == ""
    ) {
      if (e.target.nombre.value == "") {
        nombre.classList.add("border-red-500");
        alert("el campo nombre es obligatorio");
      }
      if (e.target.email.value == "") {
        email.classList.add("border-red-500");
        alert("el campo email es obligatorio");
      }
      if (e.target.direccion.value == "") {
        direccion.classList.add("border-red-500");
        alert("el campo direccion es obligatorio");
      }
      return;
    } else {
      if (cart.length > 0) {
        setOrderUserInfo({
          direccion: e.target.direccion.value,
          email: e.target.email.value,
          nombre: e.target.nombre.value,
        });
        handleGenerateOrder(orderUserInfo);
      }
    }
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

      <div className="mt-8">
        <form className="flex flex-col gap-4 border" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Nombre completo"
            className="border"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            className="border"
          />
          <input
            type="text"
            name="direccion"
            id="direccion"
            placeholder="direccion"
            className="border"
          />
          <button>Generar orden</button>
        </form>
      </div>

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
                    src={item.product.img}
                    alt={item.product.title}
                    className="w-[150px]"
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