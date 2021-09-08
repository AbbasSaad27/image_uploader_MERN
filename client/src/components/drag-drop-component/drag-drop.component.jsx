import React from "react";
import "./drag-drop.styles.css";
import { ReactComponent as Icon } from "../../img/image.svg";

const ImgZone = ({ inputEl, setFiles }) => {
  // for selecting the input element

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

  return (
    <div className="drop-zone" onDrop={handleDrop} onDragOver={handleDragOver}>
      <Icon />
      <p className="label">Drag & drop your image here</p>
    </div>
  );
};
export default ImgZone;
