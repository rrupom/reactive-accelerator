import { useRef } from "react";

export default function Page() {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <nav>
        <button onClick={handleClick}>Search</button>
      </nav>
      <input type="text" placeholder="Looking for something" ref={inputRef} />
    </>
  );
}
