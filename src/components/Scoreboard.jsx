import { useState } from "react";

const Scoreboard = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div>
      {isPlayerA ? <Counter person={"Taylor"} /> : <Counter person={"Sarah"} />}
      <button onClick={() => setIsPlayerA(!isPlayerA)}>Next Player</button>
    </div>
  );
};

const Counter = ({ person }) => {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>
        {person}'s score: {score}
      </h1>
      <button onClick={(e) => setScore(score + 1)}>Add One</button>
    </div>
  );
};

export default Scoreboard;
