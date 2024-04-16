import CategoryList from "../CategoryList/CategoryList";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import "../CartWidget/CartWidget.css";

function NavBar() {
  return (
    <div className="navBarWrapper">
      <CategoryList />
      <CartWidget />
    </div>
  );
}

export default NavBar;