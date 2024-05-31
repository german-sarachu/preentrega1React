import "./App.css";
import { useState, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "./contexts/CartProvider";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
export default App;
