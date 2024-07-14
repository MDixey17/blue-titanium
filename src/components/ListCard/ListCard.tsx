import React from "react"
import { ListCardProps } from "./ListCard.types"
import "./ListCard.css"

const ListCard = ({
  title,
  data,
  className = "",
  spacing = "md",
}: ListCardProps) => {
  return (
    <div className={`lc-container ${className}`}>
      <p className="lc-title">{title}</p>
      <div className="lc-wrapper">
        {data.map((entry) => (
          <div className={`lc-data lc-space-${spacing}`}>
            <p className="lc-left">{entry[0]}</p>
            <p className="lc-right">{entry[1]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListCard
