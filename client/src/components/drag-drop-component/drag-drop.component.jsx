import React from "react";
import "./drag-drop.styles.css";
import { ReactComponent as Icon } from "../../img/image.svg";

const ImgZone = () => {
  return (
    <div className="drop-zone">
      <Icon />
      <p className="label">Drag & drop your image here</p>
    </div>
  );
};
export default ImgZone;
