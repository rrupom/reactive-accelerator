export const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  },
};

export function customReducer(state, action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message,
        },
      };
    }
    case "sent_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: "",
        },
      };
    }
    default: {
      throw new Error("Unknown action: ", action.type);
    }
  }
}
