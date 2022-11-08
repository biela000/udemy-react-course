import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const connect = useCallback(async (action) => {
    setError(null);
    setIsLoading(true);

    try {
      let result;

      if (action.method === "GET") {
        result = await fetch(
          "https://react-http-396d0-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
        );
      } else if (action.method === "POST") {
        result = await fetch(
          "https://react-http-396d0-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
          {
            method: "POST",
            body: JSON.stringify(action.body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }

      if (result.status === 404) {
        throw new Error("404 client error");
      }

      if (action.method === "GET") {
        const data = await result.json();

        const transformedData = [];

        for (const key in data) {
          transformedData.push({
            id: key,
            text: data[key].text,
          });
        }

        setIsLoading(false);

        return transformedData;
      }
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  }, []);

  return [connect, isLoading, error];
};

export default useHttp;
