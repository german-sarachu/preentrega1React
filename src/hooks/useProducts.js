import { useEffect, useState } from "react";
import { getDocs, collection, getFirestore } from "firebase/firestore"

export default function useProducts(categoryName) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const ProductsCollection = collection(db, "products");
    getDocs(ProductsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => doc.data()));
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    });
  }, [categoryName]);

  

  return { products, isLoading };
}
