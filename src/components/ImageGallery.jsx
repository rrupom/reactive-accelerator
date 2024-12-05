import { useState } from "react";
import ImageSizeContext from "../contexts/ImageSizeContext";
import List from "./List";

const ImageGallery = () => {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
        />
        Use large image
      </label>
      <hr />
      <ImageSizeContext.Provider value={imageSize}>
        <List />
      </ImageSizeContext.Provider>
    </>
  );
};

export default ImageGallery;
