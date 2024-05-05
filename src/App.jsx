import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import PanificadosPage from "./components/PanificadosPage";
import DulcesPage from "./components/DulcesPage";
import OcasionesPage from "./components/OcasionesPage";
import FinDeAnioPage from "./components/FinDeAnioPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<ItemListContainer saludo={"BIENVENIDOS"}/>} />
          <Route exact path="/panificados" element={<PanificadosPage />} />
          <Route exact path="/dulces" element={<DulcesPage />} />
          <Route exact path="/ocasiones" element={<OcasionesPage />} />
          <Route exact path="/finDeAnio" element={<FinDeAnioPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

/*import "./App.css";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer saludo={"BIENVENIDOS !!!"} />}
          />
          <Route
            exact
            path="/panificados"
            element={<ItemListContainer saludo={"ELIGE TU PRODUCTO"} />}
          />
          <Route exact path="/dulces" element={<ItemListContainer saludo={"DULCES"} />} />
          <Route exact path="/ocasiones" element={<h1>ocasiones</h1>} />
          <Route exact path="/finDeAnio" element={<h1>findeaño</h1>} />
          <Route exact path="*" element={<h1>no funciona</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
*/
