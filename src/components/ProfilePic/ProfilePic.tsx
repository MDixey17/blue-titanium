import React from "react";
import { ProfilePicProps } from "./ProfilePic.types";
import "./ProfilePic.css";

const ProfilePic = ({ size, img, altText }: ProfilePicProps) => {
  return <img className={`bt-img-${size}`} src={img} alt={altText} />;
};

export default ProfilePic;
