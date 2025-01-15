import { useRef } from "react";

export default function DemoForm() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
