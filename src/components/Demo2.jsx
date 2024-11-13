import { useState } from "react";
import { Counter } from "./PracticeCounter";

const Demo2 = () => {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <Counter />
      {showB && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={(e) => setShowB(e.target.checked)}
        />
        Render the second counter
      </label>
    </div>
  );
};

export default Demo2;
