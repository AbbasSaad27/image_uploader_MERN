import React, { useRef } from "react";
import Button from "../btn/btn.component";
import ImgZone from "../drag-drop-component/drag-drop.component";
import "./uploader.styles.css";

const Uploader = ({ setFiles }) => {
  const inputEl = useRef(null);

  // for clicking the input el programmatically
  const handleClick = () => {
    inputEl.current.click();
  };

  const handleChange = (e) => {
    setFiles(e.target.files[0]);
    console.log("event fired");
  };

  return (
    <div className="uploader">
      <h1 className="uploader-title">Upload your image</h1>
      <p className="file-type">File should be Jpeg, Png...</p>
      <input
        onChange={handleChange}
        type="file"
        name="file-input"
        className="file-input"
        ref={inputEl}
      />
      <ImgZone inputEl={inputEl} setFiles={setFiles} />
      <p className="separator">Or</p>
      <Button onClick={handleClick}>Choose a file</Button>
    </div>
  );
};

export default Uploader;
