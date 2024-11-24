import { useState } from "react";

const DemoChat = ({ contact }) => {
  const [text, setText] = useState("");
  return (
    <section>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
};

export default DemoChat;
