import { useEffect, useState } from "react";
import { getProductById } from "../mocks/asyncMock";

export default function useProductById(productId) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log({ product });

  useEffect(() => {
    getProductById(productId)
      .then((product) => {
        setProduct(product);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return {
    product,
    loading,
  };
}