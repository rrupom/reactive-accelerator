import { useEffect, useRef } from "react";
import { useFadeAnimation } from "../hooks/useFadeAnimation";

export default function TestWelcome() {
  const ref = useRef(null);

  useFadeAnimation(ref, 1000);

  return (
    <h1 ref={ref} className="welcome">
      Welcome
    </h1>
  );
}
