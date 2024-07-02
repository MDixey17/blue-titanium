import React from "react";
import { InputProps } from "./Input.types";
import "./Input.css";

const Input = ({ label, type, value, onUpdate }: InputProps) => {
  const isTextInput = type !== "checkbox";

  return (
    <div className={isTextInput ? "text-label" : ""}>
      <label>{label}</label>
      <input type={type} value={value} onChange={(event) => onUpdate(event)} />
    </div>
  );
};

export default Input;
