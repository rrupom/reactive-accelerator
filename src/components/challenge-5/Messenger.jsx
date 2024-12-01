import { useReducer } from "./MyReact";
import Chat from "../challenge-4/Chat";
import ContactList from "../challenge-4/ContactList";
import { initialState, customReducer } from "../../reducers/customReducer";

const Messenger = () => {
  const [state, dispatch] = useReducer(customReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = contacts.find((contact) => contact.id === state.selectedId);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Messenger;

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
