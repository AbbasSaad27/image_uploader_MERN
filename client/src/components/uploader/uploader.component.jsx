import React, { useRef } from "react";
import Button from "../btn/btn.component";
import ImgZone from "../img-zone-component/img-zone.component";
import "./uploader.styles.css";

const Uploader = ({ setFiles, imgSrc }) => {
  const inputEl = useRef(null);
  const imgLink = useRef(null);

  // for clicking the input el programmatically
  const handleClick = () => {
    inputEl.current.click();
  };

  const copyTextToClipBoard = () => {
    imgLink.current.select();
    navigator.clipboard.writeText(imgLink.current.value);
  };

  const handleChange = (e) => {
    setFiles(e.target.files[0]);
  };

  if (imgSrc) {
    return (
      <div className="uploader">
        <div className="tick-container">&#10004;</div>
        <h2 className="uploaded-status">Uploaded Successfully!</h2>
        <ImgZone imgSrc={imgSrc} />
        <div className="img-source-container">
          <input
            type="text"
            readOnly
            className="img-source-link"
            ref={imgLink}
            value={imgSrc}
          />
          <Button onClick={copyTextToClipBoard} cls="btn-link">
            Copy Link
          </Button>
        </div>
      </div>
    );
  }

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
