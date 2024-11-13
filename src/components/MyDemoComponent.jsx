import { useState } from "react";

const MyDemoComponent = () => {
  const [counter, setCounter] = useState(0);

  const MyTextField = () => {
    const [text, setText] = useState("");

    return (
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    );
  };

  return (
    <>
      <MyTextField />
      <button onClick={(e) => setCounter(counter + 1)}>
        Clicked {counter} times
      </button>
    </>
  );
};

export default MyDemoComponent;
