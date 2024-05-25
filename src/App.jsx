import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/product/:productId" element={<ItemListContainer />} />
          <Route exact path="*" element={<h3>La pagina no se encuentra</h3>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
