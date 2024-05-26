import "./CategoryList.css";
import { NavLink } from "react-router-dom";

const MIS_RUTAS = [
  {
    path: "/category/panificados",
    label: "Panificados",
  },
  {
    path: "/category/dulces",
    label: "Dulces",
  },
  {
    path: "/category/ocasiones",
    label: "Ocasiones",
  },
  {
    path: "/category/finDeAnio",
    label: "Fin de Año",
  },
];

function CategoryList() {
  return (
    <nav>
      <ul className="category--list">
        {MIS_RUTAS.map((ruta) => (
          <li key={ruta.path}>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to={ruta.path}
            >
              {ruta.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryList;