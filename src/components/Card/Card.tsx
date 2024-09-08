import React from "react"
import "./Card.css"
import { CardProps } from "./Card.types"

const Card = ({ children = <></>, className = "" }: CardProps) => {
  return <div className={`bt-card ${className}`}>{children}</div>
}

export default Card
