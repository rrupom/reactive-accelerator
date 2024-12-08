import { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { taskDemoReducer } from "../reducers/taskDemoReducer";
import { initialTasks } from "../data/tasks";

export const TasksDemoContext = createContext(null);
export const TasksDispatchDemoContext = createContext(null);

const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useImmerReducer(taskDemoReducer, initialTasks);
  return (
    <TasksDemoContext.Provider value={tasks}>
      <TasksDispatchDemoContext.Provider value={dispatch}>
        {children}
      </TasksDispatchDemoContext.Provider>
    </TasksDemoContext.Provider>
  );
};

export default TaskContextProvider;
