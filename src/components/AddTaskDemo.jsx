import { useContext, useState } from "react";
import { TasksDispatchDemoContext } from "../contexts/TasksDemoContext";

const AddTaskDemo = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchDemoContext);
  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "add_task",
            text,
          });
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTaskDemo;
