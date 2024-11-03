import { useState } from "react";

const PracticePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
      onPointerMove={(e) =>
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          left: "-10px",
          top: "-10px",
          width: "20px",
          height: "20px",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default PracticePointer;
