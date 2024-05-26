import { Link } from "react-router-dom";
import "./Brand.css";

function Brand() {
  return (
    <Link className="brand" to="/">
      <img src="../../src/assets/brand.jpg" alt="La Nueva Espiga" />
    </Link>
  );
}

export default Brand;