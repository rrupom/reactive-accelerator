import { useRef, useState } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoPlayerRef = useRef();

  const handleClick = () => {
    setIsPlaying(!isPlaying);
    
    switch (true) {
      case isPlaying:
        return videoPlayerRef.current.pause();
      default:
        return videoPlayerRef.current.play();
    }
  };

  return (
    <>
      <button style={{ marginBottom: "10px" }} onClick={handleClick}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <br />
      <video width={"258"} ref={videoPlayerRef}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
