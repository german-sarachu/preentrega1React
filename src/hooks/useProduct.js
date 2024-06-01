import { useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

export default function useProduct() {
  const [product, setProduct] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async (id) => {
    const result = await getDoc(doc(db, "products", id));
    setProduct({id: result.id, ...result.data()});
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return { product, isLoading, getProduct };
}
