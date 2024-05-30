import "./App.css";
import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  snapshot,
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
      <div>
        {products.map((product) => {
          <div key={product.id}>
            <img src={product.img} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>;
        })}
      </div>
  );
}
export default App;
