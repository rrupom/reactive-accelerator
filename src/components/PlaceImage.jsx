import { useContext } from "react";
import { getImageUrl } from "../functions/utils";
import ImageSizeContext from "../contexts/ImageSizeContext";

const PlaceImage = ({ place }) => {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default PlaceImage;
