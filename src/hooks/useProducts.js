import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ProductsCollection = collection(db, "products");
    getDocs(ProductsCollection).then((snapshot) => {
      const resultados = snapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
      setProducts(resultados);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  return { products, isLoading };
}

