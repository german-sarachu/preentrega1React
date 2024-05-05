import { useEffect, useState } from "react";
import { getProductsByCategory } from "../mocks/asyncMock";

export default function useCategory() {
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory()
      .then((data) => setCategory(data))
      .finally(() => setIsLoading(false));
  }, [category]);

  return { category, isLoading };
}
