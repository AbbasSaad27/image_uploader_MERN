import React from "react";
import "./btn.styles.css";

const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps} className="btn">
      {children}
    </button>
  );
};

export default Button;
