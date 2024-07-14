import React from "react"
import { SpinnerProps } from "./Spinner.types"
import "./Spinner.css"

const Spinner = ({ size = "md", className = "" }: SpinnerProps) => {
  return <div className={`spinner-${size} ${className}`} />
}

export default Spinner
