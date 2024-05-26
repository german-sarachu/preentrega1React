import "./CategoryList.css";
import { NavLink } from "react-router-dom";

function CategoryList() {
  return (
    <nav>
      <ul className="categoryList">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="category/panificados"
          >Panificados</NavLink>
          {/*panes,bizcochos,envasados,sandwiches*/}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="category/dulces"
          >Dulces</NavLink>
          {/*tortasypostres,dulcesniños,masasfinas,budines,masdulces*/}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="category/ocasiones"
          >Ocasiones</NavLink>
          {/*desyunos,partybox,eventos*/}
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "activeLink" : "")}
            to="category/finDeAnio"
          >Fin de Año</NavLink>
          {/*nochebuena,findeaño,reservas*/}
        </li>
      </ul>
    </nav>
  );
}

export default CategoryList;
