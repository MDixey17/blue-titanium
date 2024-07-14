import React from "react"
import { ChipProps } from "./Chip.types"
import "./Chip.css"

const Chip = ({ type, children, className = "" }: ChipProps) => {
  return (
    <div className={`${type}-chip chip-wrapper ${className}`}>{children}</div>
  )
}

export default Chip
