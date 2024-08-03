import { ReactNode } from "react"

type ButtonType = "primary" | "secondary" | "delete"

export interface ButtonProps {
  onClick: () => void
  type?: ButtonType
  children?: ReactNode
  className?: string
}
