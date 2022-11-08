import { useState } from "react";
import useHttp from "../hooks/use-http";

const NewTask = (props) => {
  const [taskText, setTaskText] = useState("");
  const [connect, isLoading, error] = useHttp();

  const changeHandler = (event) => {
    setTaskText(event.target.value);
  };

  const addTaskHandler = async () => {
    await connect({ method: "POST", body: { text: taskText } });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await addTaskHandler();
    props.fetchNewTasks();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="taskText"
        placeholder="Task text"
        onChange={changeHandler}
        value={taskText}
      />
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewTask;
