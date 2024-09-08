import React from "react"
import "./Toggle.css"
import { ToggleProps } from "./Toggle.types"

const Toggle = ({
  value = false,
  onUpdate = () => {},
  label = "",
  className = "",
}: ToggleProps) => {
  return (
    <div className={`bt-toggle ${className}`}>
      <label className="bt-toggle-label">{label}</label>
      <label className="bt-toggle-switch">
        <input
          type="checkbox"
          value={String(value)}
          onChange={(event) => onUpdate(event)}
          className="bt-toggle-input"
        />
        <span className="bt-toggle-slider" />
      </label>
    </div>
  )
}

export default Toggle
