import { ReactNode } from "react"

type ChipType = "primary" | "secondary"

export interface ChipProps {
  type?: ChipType
  children?: ReactNode
  className?: string
}
