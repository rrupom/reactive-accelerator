import { useContext, useState } from "react";
import { TasksDispatchDemoContext } from "../contexts/TasksDemoContext";

const TaskDemo = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchDemoContext);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "change_task",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />
        {isEditing ? (
          <input
            type="text"
            value={task.text}
            onChange={(e) => {
              dispatch({
                type: "change_task",
                task: {
                  ...task,
                  text: e.target.value,
                },
              });
            }}
          />
        ) : (
          <span>{task.text}</span>
        )}
      </label>
      {isEditing ? (
        <button onClick={() => setIsEditing(false)}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button
        onClick={() =>
          dispatch({
            type: "delete_task",
            id: task.id,
          })
        }
      >
        Delete
      </button>
    </>
  );
};

export default TaskDemo;
