import React from "react";
import { ChipProps } from "./Chip.types";
import "./Chip.css";

const Chip = ({ type, children }: ChipProps) => {
  return <div className={`${type}-chip chip-wrapper`}>{children}</div>;
};

export default Chip;
