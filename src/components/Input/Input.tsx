import React, { BaseSyntheticEvent } from "react"
import { InputProps } from "./Input.types"
import "./Input.css"

const Input = ({
  label = "",
  type,
  value = "",
  onUpdate = (event: BaseSyntheticEvent) => {},
  className = "",
}: InputProps) => {
  const isTextInput = type !== "checkbox"

  return (
    <div className={`bt-input ${isTextInput ? "text-label" : ""} ${className}`}>
      {isTextInput && (
        <>
          <label>{label}</label>
          <input
            type={type}
            value={value}
            onChange={(event) => onUpdate(event)}
          />
        </>
      )}
      {!isTextInput && (
        <label className="bt-checkbox-label">
          {label}
          <input
            type={type}
            value={value}
            onChange={(event) => onUpdate(event)}
          />
        </label>
      )}
    </div>
  )
}

export default Input
