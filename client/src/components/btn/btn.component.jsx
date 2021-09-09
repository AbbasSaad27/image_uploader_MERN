import React from "react";
import "./btn.styles.css";

const Button = ({ cls, children, ...otherProps }) => {
  return (
    <button {...otherProps} className={`btn ${cls}`}>
      {children}
    </button>
  );
};

export default Button;
