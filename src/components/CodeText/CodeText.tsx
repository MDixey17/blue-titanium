import React from "react"
import { CodeTextProps } from "./CodeText.types"
import "./CodeText.css"

const CodeText = ({ children = <></>, className = "" }: CodeTextProps) => {
  return <div className={`bt-codetext ${className}`}>{children}</div>
}

export default CodeText
