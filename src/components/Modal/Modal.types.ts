import { ReactNode } from "react"

export interface ModalProps {
  heading?: string
  show?: boolean
  className?: string
  children?: ReactNode
}
