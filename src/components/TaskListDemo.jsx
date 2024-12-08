import { useContext } from "react";
import TaskDemo from "./TaskDemo";
import { TasksDemoContext } from "../contexts/TasksDemoContext";

const TaskListDemo = () => {
  const tasks = useContext(TasksDemoContext);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskDemo task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskListDemo;
