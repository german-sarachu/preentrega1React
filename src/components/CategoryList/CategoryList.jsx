import "./CategoryList.css";
import { NavLink } from "react-router-dom";

function CategoryList() {
  return (
    <nav>
      <ul className="categoryList">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/panificados"
          >
            Panificados
          </NavLink>
          {/*<a href="/#">Panificados</a> panes,bizcochos,envasados,sandwiches*/}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/dulces"
          >
            Dulces
          </NavLink>
          {/*<a href="/#">Dulces</a> tortasypostres,dulcesniños,masasfinas,budines,masdulces*/}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/ocasiones"
          >
            Ocasiones
          </NavLink>
          {/*<a href="/#">Ocasiones</a> desyunos,partybox,eventos*/}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="/finDeAnio"
          >
            Fin de Año
          </NavLink>
          {/*<a href="/#">Fin de Año</a> nochebuena,findeaño,reservas*/}
        </li>
      </ul>
    </nav>
  );
}

export default CategoryList;
