import "./App.css";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./contexts/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";
import {
  getFirestore,
  collection,
  getDocs,
  snapshotEqual,
} from "firebase/firestore";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const ProductsCollection = collection(db, "products");
    getDocs(ProductsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <>
      <div>
        {products.map((product) => {
          <div key={product.id}>
            <img src={product.img} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>;
        })}
      </div>

      {/*<BrowserRouter>
        <CartProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryName"
                element={<ItemListContainer />}
              />
              <Route
                path="/product/:productId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<h1>Proximamente...</h1>} />
            </Routes>
          </Layout>
        </CartProvider>
      </BrowserRouter>*/}
    </>
  );
}
export default App;
