import React, { useState, useEffect, useCallback } from "react";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import useHttp from "./hooks/use-http";

const App = () => {
  const [fetchedTasks, setFetchedTasks] = useState([]);
  const [connect, isLoading, error] = useHttp();

  const fetchTasks = useCallback(async () => {
    const fetchedData = await connect({ method: "GET" });
    setFetchedTasks(fetchedData);
  }, [connect]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <React.Fragment>
      <NewTask fetchNewTasks={fetchTasks} />
      {!error && !isLoading && <TaskList tasks={fetchedTasks} />}
      {error && <h1>{error}</h1>}
      {isLoading && !error && <h1>Loading...</h1>}
    </React.Fragment>
  );
};

export default App;
