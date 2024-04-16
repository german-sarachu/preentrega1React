import "./CategoryList.css";

function CategoryList() {
  return (
    <nav>
      <ul className="categoryList">
        <li>
          <a href="/#">Panificados</a> {/*panes,bizcochos,envasados,sandwiches*/}
        </li>
        <li>
          <a href="/#">Dulces</a> {/*tortasypostres,dulcesniños,masasfinas,budines,masdulces*/}
        </li>
        <li>
          <a href="/#">Ocasiones</a> {/*desyunos,partybox,eventos*/}
        </li>
        <li>
          <a href="/#">Fin de Año</a> {/*nochebuena,findeaño,reservas*/}
        </li>
      </ul>
    </nav>
  );
}

export default CategoryList;