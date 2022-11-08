import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

import useHttp from "./hooks/use-http";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [data, setData] = useState([]);
  const [fetchData, isLoading2, error2] = useHttp();

  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-396d0-default-rtdb.europe-west1.firebasedatabase.app/tasks.json"
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  const fetchTasks2 = () => {
    fetchData({ method: "GET" }).then((result) => setData(result));
  };

  useEffect(() => {
    fetchTasks2();
  }, []);

  return (
    <React.Fragment>
      <NewTask onAddTask={fetchTasks2} />
      <Tasks
        items={data}
        loading={isLoading2}
        error={error2}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
