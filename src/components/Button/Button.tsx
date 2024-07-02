import React from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";

const Button = ({ onClick, type, children }: ButtonProps) => {
  return (
    <button className={`${type}-button`} onClick={(event) => onClick(event)}>
      {children}
    </button>
  );
};

export default Button;
