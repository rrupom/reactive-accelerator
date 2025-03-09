import { useRef } from "react";
import { useFadeAnimation } from "../hooks/useFadeAnimation";

export default function TestHello() {
  const ref = useRef(null);

  useFadeAnimation(ref, 2000);

  return (
    <h1 ref={ref} className="welcome">
      Test Hello
    </h1>
  );
}
