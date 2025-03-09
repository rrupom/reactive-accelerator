import { useRef } from "react";
import { useFadeAnimationUsingClass } from "../hooks/useFadeAnimationUsingClass";

export default function AnimationDemo() {
  const ref = useRef(null);
  useFadeAnimationUsingClass(ref, 3000);
  return (
    <h1 ref={ref} className="welcome">
      Hello Rupom
    </h1>
  );
}
