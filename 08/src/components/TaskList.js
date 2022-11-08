const TaskList = (props) => {
  const taskElements = props.tasks.map((task) => {
    return <li key={task.id}>{task.text}</li>;
  });

  return <ul>{taskElements}</ul>;
};

export default TaskList;
