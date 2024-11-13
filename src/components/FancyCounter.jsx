import { useState } from "react";

const FancyCounter = ({ isFancy }) => {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }
  if (isFancy) {
    className += " fancy";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={(e) => setScore(score + 1)}>Add One</button>
    </div>
  );
};

export default FancyCounter;
