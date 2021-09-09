import React from "react";
import "./loader.styles.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <h2 className="status">Uploading...</h2>
      <div className="loader">
        <div className="loader-line"></div>
      </div>
    </div>
  );
};

export default Loader;
