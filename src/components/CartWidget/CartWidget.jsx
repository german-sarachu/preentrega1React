import { useState } from "react";
import CartIcon from "../CartIcon/CartIcon";
import ("../CartIcon/CartIcon.css");

function CartWidget() {
  const [cartItems, setCartItems] = useState(5);
  return (
    <div className="cartContainer">
      <CartIcon width={44} height={44}/>
      <span>{cartItems}</span>
    </div>
  );
}

export default CartWidget;
