import React from "react";
import "./img-zone.styles.css";
import { ReactComponent as Icon } from "../../img/image.svg";

const ImgZone = ({ inputEl, setFiles, imgSrc }) => {
  // handling drag over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // handling drop
  const handleDrop = (e) => {
    e.preventDefault();
    inputEl.current.files = e.dataTransfer.files;
    setFiles(inputEl.current.files[0]);
  };

  if (imgSrc) {
    return (
      <div className="img-zone">
        <img src={imgSrc} alt="img" className="uploaded-img" />
      </div>
    );
  }

  return (
    <div className="drop-zone" onDrop={handleDrop} onDragOver={handleDragOver}>
      <Icon />
      <p className="label">Drag & drop your image here</p>
    </div>
  );
};
export default ImgZone;
