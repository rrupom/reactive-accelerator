import { useState } from "react";
import DemoContactList from "./DemoContactList";
import DemoChat from "./DemoChat";

const ChatApp = () => {
  const [to, setTo] = useState(contacts[0]);
  return (
    <div>
      <DemoContactList
        contacts={contacts}
        onSelect={(contact) => setTo(contact)}
        selectedContact={to}
      />
      <DemoChat key={to.id} contact={to} />
    </div>
  );
};

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

export default ChatApp;
