import { useEffect, useState } from "react";

export default function Test7({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  //   useEffect(() => {
  //     onChange(isOn); // message to the parent
  //   }, [isOn, onChange]);

  //   function handleClick() {
  //     setIsOn(!isOn);
  //   }

  const handleToggle = (nextIsOn) => {
    setIsOn(nextIsOn);
    onChange(nextIsOn);
  };

  const handleClick = () => {
    handleToggle(!isOn);
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
}
