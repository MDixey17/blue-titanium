import React from "react"
import { ButtonProps } from "./Button.types"
import "./Button.css"

const Button = ({
  onClick = () => {},
  type = "primary",
  children = <></>,
  className = "",
}: ButtonProps) => {
  return (
    <button className={`${type}-button ${className}`} onClick={() => onClick()}>
      {children}
    </button>
  )
}

export default Button
