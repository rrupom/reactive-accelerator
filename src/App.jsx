import { useState } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import TestWelcome from "./components/TestWelcome";
import TestHello from "./components/TestHello";
import AnimationDemo from "./components/AnimationDemo";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((s) => !s)}>
        {show ? "Remove" : "Show"}
      </button>

      <hr />

      {/* {show && <Welcome />} */}
      {/* {show && <TestHello />} */}
      {show && <AnimationDemo />}
    </>
  );
}
