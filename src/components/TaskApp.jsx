import AddTaskDemo from "./AddTaskDemo";
import TaskListDemo from "./TaskListDemo";
import TaskContextProvider from "../contexts/TasksDemoContext";

const TaskApp = () => {
  return (
    <TaskContextProvider>
      <h1>Day off in Kyoto</h1>
      <AddTaskDemo />
      <TaskListDemo />
    </TaskContextProvider>
  );
};

export default TaskApp;
