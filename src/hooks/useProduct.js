import { useEffect, useState } from "react";
import { getProductsById } from "../mocks/asyncMock";

export default function useProduct(id) {
  const [product, setProduct] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsById(id)
      .then((data) => setProduct(data))
      .finally(() => setIsLoading(false));
  }, []);

  return { product, isLoading };
}
