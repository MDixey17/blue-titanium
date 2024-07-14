import React from "react"
import { ProfilePicProps } from "./ProfilePic.types"
import "./ProfilePic.css"

const ProfilePic = ({
  size = "md",
  img,
  altText = "",
  className = "",
}: ProfilePicProps) => {
  return (
    <img className={`bt-img-${size} ${className}`} src={img} alt={altText} />
  )
}

export default ProfilePic
