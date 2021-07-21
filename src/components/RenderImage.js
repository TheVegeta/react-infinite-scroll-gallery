import React, { memo } from "react";

const RenderImage = ({ image }) => {
  return (
    <a
      className="img-container"
      href={image.src}
      target="_blank"
      rel="noreferrer"
    >
      <img src={image.thumbnail} alt={image.caption} />
    </a>
  );
};

export default memo(RenderImage);
