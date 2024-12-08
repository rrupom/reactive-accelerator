import { getNextId } from "../utils/getNextId";

export const taskDemoReducer = (draft, action) => {
  switch (action.type) {
    case "add_task": {
      draft.push({
        id: getNextId(draft),
        text: action.text,
        done: false,
      });
      break;
    }
    case "change_task": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case "delete_task": {
      return draft.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Invalid action type: ", action.type);
    }
  }
};
