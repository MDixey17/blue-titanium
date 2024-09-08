import React from "react"
import "./HighlightText.css"
import { HighlightTextProps } from "./HighlightText.types"

const HighlightText = ({ children, className }: HighlightTextProps) => {
  return <div className={`bt-highlighttext ${className}`}>{children}</div>
}

export default HighlightText
