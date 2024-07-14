import React, { useState } from "react"
import { NavbarProps } from "./Navbar.types"
import "./Navbar.css"

const Navbar = ({ left, middle, right, className = "" }: NavbarProps) => {
  const [showMobile, setShowMobile] = useState<boolean>(false)

  const onMobileMenuPress = () => setShowMobile(!showMobile)

  return (
    <div className={`nb-wrapper ${className}`}>
      <div className="nb-left">{left}</div>
      <button className="nb-mobile-button" onClick={() => onMobileMenuPress()}>
        &#x2630;
      </button>
      <div className={`nb-menu ${showMobile ? "nb-menu-open" : ""}`}>
        <div className="nb-middle">{middle}</div>
        <div className="nb-right">{right}</div>
      </div>
    </div>
  )
}

export default Navbar
