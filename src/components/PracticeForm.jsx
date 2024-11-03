import { useState } from "react";

const PracticeForm = () => {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      placeholder: "type your name",
    },
  ]);

  const handleAddInput = () => {
    const nextId = inputs.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1;

    setInputs([
      ...inputs,
      {
        id: nextId,
        placeholder: "again type your name",
      },
    ]);
  };

  return (
    <div>
      {inputs.map((input) => (
        <div style={{ marginTop: "5px" }} key={input.id}>
          <input type="text" placeholder={input.placeholder} />
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
};

export default PracticeForm;
