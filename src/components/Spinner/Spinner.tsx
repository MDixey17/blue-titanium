import React from "react";
import { SpinnerProps } from "./Spinner.types";
import "./Spinner.css";

const Spinner = ({ size }: SpinnerProps) => {
  return <div className={`spinner-${size}`} />;
};

export default Spinner;
