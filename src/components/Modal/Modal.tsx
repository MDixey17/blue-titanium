import React from "react"
import "./Modal.css"
import { ModalProps } from "./Modal.types"

const Modal = ({
  heading = "",
  show = false,
  className = "",
  children = <></>,
}: ModalProps) => {
  const modal = document.getElementById("btModal")

  window.onclick = (event) => {
    if (modal && event.target == modal) {
      show = false
    }
  }

  return show ? (
    <div id="btModal" className={`bt-modal ${className}`}>
      <div className="bt-modal-content">
        <div className="bt-modal-header">
          <span
            className="bt-modal-close"
            onClick={() => {
              show = false
            }}
          >
            &times;
          </span>
          <h2>{heading}</h2>
        </div>
        <div className="bt-modal-body">{children}</div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default Modal
