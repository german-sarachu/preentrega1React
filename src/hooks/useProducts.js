import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

export default function useProducts(categoryName) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const ProductsCollection = collection(db, "products");
    getDocs(ProductsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => doc.data()));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, [categoryName]);

  return { products, isLoading };
}
