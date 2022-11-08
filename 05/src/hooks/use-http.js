import { useState, useCallback } from "react";

const useHttp = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const applyRequest = useCallback(
    async (action) => {
      setError(null);
      setIsLoading(true);

      try {
        if (action.method === "GET") {
          const result = await fetch(url);

          const data = await result.json();

          const transformedData = [];

          for (const key in data) {
            transformedData.push({
              id: key,
              name: data[key].name,
              description: data[key].description,
              price: data[key].price,
            });
          }

          setIsLoading(false);

          return transformedData;
        } else if (action.method === "POST") {
          await fetch(url, {
            method: "POST",
            body: JSON.stringify(action.body),
          });
        }
      } catch (err) {
        setError(err.message);
      }

      setIsLoading(false);
    },
    [url]
  );

  return {
    isLoading,
    error,
    applyRequest,
  };
};

export default useHttp;
