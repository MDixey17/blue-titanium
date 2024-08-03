import React from "react"
import { HeadingProps } from "./Heading.types"
import "./Heading.css"

const Heading = ({
  size = "md",
  isBlue = false,
  children = <></>,
  className = "",
}: HeadingProps) => {
  return (
    <>
      {size === "xs" && (
        <h5
          className={`${isBlue ? "bt-blue-heading" : "bt-heading"} ${className}`}
        >
          {children}
        </h5>
      )}
      {size === "sm" && (
        <h4
          className={`${isBlue ? "bt-blue-heading" : "bt-heading"} ${className}`}
        >
          {children}
        </h4>
      )}
      {size === "md" && (
        <h3
          className={`${isBlue ? "bt-blue-heading" : "bt-heading"} ${className}`}
        >
          {children}
        </h3>
      )}
      {size === "lg" && (
        <h2
          className={`${isBlue ? "bt-blue-heading" : "bt-heading"} ${className}`}
        >
          {children}
        </h2>
      )}
      {size === "xl" && (
        <h1
          className={`${isBlue ? "bt-blue-heading" : "bt-heading"} ${className}`}
        >
          {children}
        </h1>
      )}
    </>
  )
}

export default Heading
