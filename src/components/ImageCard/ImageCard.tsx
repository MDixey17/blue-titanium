import React from "react"
import { ImageCardProps } from "./ImageCard.types"
import "./ImageCard.css"

const ImageCard = ({ imgPath, text, className = "" }: ImageCardProps) => {
  return (
    <div className={`imagecard-wrapper ${className}`}>
      <img className="imagecard-img" src={imgPath} alt={text} />
      <div className="imagecard-text-container">
        <p className="imagecard-text">{text}</p>
      </div>
    </div>
  )
}

export default ImageCard
