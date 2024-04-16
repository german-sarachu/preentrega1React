import "./App.css";
import Brand from "./components/Brand/Brand";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <div className="headerWraper">
        <Brand />
        <NavBar />
      </div>
      <ItemListContainer saludo="BIENVENIDOS !!!" />
    </div>
  );
}

export default App;
