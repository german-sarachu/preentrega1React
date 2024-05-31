import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { db } from "../api/firebaseConfig";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState(
    localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
  );

  const addToCart = (product, quantity) => {
    const itemInCart = cart.find((item) => item.product.id === product.id);

    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.product.id === product.id) {
          return { product, quantity: item.quantity + quantity };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { product, quantity }]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (productId, quantity) => {
    const itemInCart = cart.find((item) => item.product.id === productId);
    if (itemInCart) {
      const updatedCart = cart.map((item) => {
        if (item.product.id === productId) {
          return { product: item.product, quantity: item.quantity - quantity };
        }
        return item;
      });

      const filteredCart = updatedCart.filter((item) => item.quantity > 0);

      setCart(filteredCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart
    .reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0)
    .toFixed(2);

  const updateStock = (order) => {
    order.cart.map((item) => {
      updateDoc(doc(db, "products", item.product.id), {
        stock: item.product.stock - item.quantity,
        ...item,
      });
    });
  };

  const generateOrder = async () => {
    const date = new Date();
    const refId = await addDoc(collection(db, "orders"), {
      cart: [...cart],
      total: cartTotal,
      date: date,
    });
    const order = await getDoc(doc(db, "orders", refId.id));
    updateStock(order.data());
    console.log(refId.id);
    clearCart();
    return { id: refId.id, ...order.data() };
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        generateOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
