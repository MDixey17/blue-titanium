import React from "react"
import { SectionProps } from "./Section.types"
import "./Section.css"

const Section = ({
  align = "flex-start",
  children,
  direction = "row",
  divider = false,
  isPrimary = false,
  justify = "flex-start",
  className = "",
  wrap = "nowrap",
}: SectionProps) => {
  return (
    <div
      className={`bt-section ${isPrimary ? "bt-s-primary" : "bt-s-secondary"} ${divider ? "bt-s-divider" : ""} ${className}`}
      style={{
        justifyContent: justify,
        flexDirection: direction,
        alignContent: align,
        alignItems: align,
        flexWrap: wrap,
      }}
    >
      {children}
    </div>
  )
}

export default Section
