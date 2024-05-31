import { useEffect, useState } from "react";
import { getProductById } from "../mocks/asyncMock";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../api/firebaseConfig";

export default function useProduct() {
  const [product, setProduct] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async (id) => {
    const result = await getDoc(doc(db, "products", id));
    setProduct(result.data());
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return { product, isLoading, getProduct };
}
