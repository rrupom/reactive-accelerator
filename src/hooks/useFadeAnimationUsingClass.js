import { useEffect } from "react";
import { FadeInAnimation } from "../classes/animation";

export function useFadeAnimationUsingClass(ref, duration) {
  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(duration);

    return () => animation.stop();
  }, [ref, duration]);
}
