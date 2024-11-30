export default function demoReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        }
        return task;
      });
    }
    case "deleted": {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error("Unknow action: ", action.type);
    }
  }
}
