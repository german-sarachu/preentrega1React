import "./ItemListContainer.css";

function ItemListContainer ({saludo}) {
    return (
        <div className="contenedorListContainer textoAnimado">
            <h1>{saludo}</h1>
        </div>
    )
}

export default ItemListContainer