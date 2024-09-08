import React from "react"
import "./Statistic.css"
import { StatisticProps } from "./Statistic.types"

const Statistic = ({
  label = "",
  value = 0.0,
  delta = 0.0,
  time = "",
  className = "",
}: StatisticProps) => {
  const deltaColor = delta >= 0 ? "green" : "red"

  return (
    <div className={`bt-stat ${className}`}>
      <label className="bt-stat-label">{label}</label>
      <p className="bt-stat-value">{value}</p>
      <div className="bt-stat-delta-container">
        <p className={`bt-stat-delta-${deltaColor}`}>
          {deltaColor === "green" ? "+" : ""}
          {delta}
        </p>
        {time !== "" && <p className="bt-stat-time">| {time}</p>}
      </div>
    </div>
  )
}

export default Statistic
