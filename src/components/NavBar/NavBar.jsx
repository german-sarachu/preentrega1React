import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="flex items-center">
      <CategoryList />
      <CartWidget />
    </div>
  );
}
