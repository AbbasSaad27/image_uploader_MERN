import React from "react";
import ImgZone from "../drag-drop-component/drag-drop.component";
import "./uploader.styles.css";

const Uploader = () => {
  return (
    <div className="uploader">
      <h1 className="uploader-title">Upload your image</h1>
      <p className="file-type">File should be Jpeg, Png...</p>
      <ImgZone />
    </div>
  );
};

export default Uploader;
