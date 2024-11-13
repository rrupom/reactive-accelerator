import { useState } from "react";
import FancyCounter from "./FancyCounter";

const Demo3 = () => {
  const [isFancy, setIsFancy] = useState(false);

  return (
    <div>
      {isFancy ? (
        <FancyCounter isFancy={true} />
      ) : (
        <FancyCounter isFancy={false} />
      )}
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => setIsFancy(e.target.checked)}
        />
        Use fancy styling
      </label>
    </div>
  );
};

export default Demo3;
