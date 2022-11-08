import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = async (action) => {
    try {
      setError(null);
      setIsLoading(true);
      let result;
      if (action.method === "POST") {
        result = await fetch(
          "https://react-http-396d0-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
          {
            method: "POST",
            body: JSON.stringify({ text: action.taskText }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        result = await fetch(
          "https://react-http-396d0-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
        );
      }

      if (!result.ok) throw new Error("Connection not made");

      const data = await result.json();

      const transformedData = [];

      for (const key in data) {
        transformedData.push({
          id: key,
          taskText: data[key].text,
        });
      }

      setIsLoading(false);

      if (action.method === "GET") {
        return transformedData;
      }
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  };

  return [fetchDataHandler, isLoading, error];
};

export default useHttp;
