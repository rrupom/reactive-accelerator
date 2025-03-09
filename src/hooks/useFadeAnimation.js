import { useEffect } from "react";

export function useFadeAnimation(ref, duration) {
  useEffect(() => {
    let startTime = performance.now();
    let frameId = null;
    const node = ref.current;

    const onFrame = (now) => {
      const timePassed = now - startTime;
      const progress = Math.min(timePassed / duration, 1);
      onProgress(progress);
      if (progress < 1) {
        frameId = requestAnimationFrame(onFrame);
      }
    };

    const onProgress = (progress) => {
      node.style.opacity = progress;
    };
    const start = () => {
      onProgress(0);
      startTime = performance.now();
      frameId = requestAnimationFrame(onFrame);
    };

    const stop = () => {
      cancelAnimationFrame(frameId);
      startTime = null;
      frameId = null;
    };

    start();

    return () => stop();
  }, [ref, duration]);
}
