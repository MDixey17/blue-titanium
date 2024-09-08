import React from "react"
import "./Divider.css"
import { DividerProps } from "./Divider.types"

const Divider = ({ isBlue = false, className = "" }: DividerProps) => {
  return (
    <hr className={`bt-divider-${isBlue ? "blue" : "default"} ${className}`} />
  )
}

export default Divider
