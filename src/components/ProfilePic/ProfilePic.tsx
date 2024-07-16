import React from "react"
import { ProfilePicProps } from "./ProfilePic.types"
import "./ProfilePic.css"

const ProfilePic = ({
  size = "md",
  img,
  altText = "",
  className = "",
  addHover = false,
}: ProfilePicProps) => {
  return (
    <img
      className={`bt-image bt-img-${size} ${addHover ? "bt-img-hover" : ""} ${className}`}
      src={img}
      alt={altText}
    />
  )
}

export default ProfilePic
