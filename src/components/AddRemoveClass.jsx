import { useState } from "react";

const AddRemoveClass = () => {
  const [isActive, setIsActive] = useState();

  let backgroundClassName = "background";
  let pictureClassName = "picture";

  if (isActive) {
    pictureClassName += " picture--active";
  } else {
    backgroundClassName += " background--active";
  }
  return (
    <div className={backgroundClassName} onClick={() => setIsActive(!isActive)}>
      <img
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={(e) => {
          e.stopPropagation();
          setIsActive(!isActive);
        }}
      />
    </div>
  );
};

export default AddRemoveClass;
