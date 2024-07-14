import { ReactNode } from "react"

type HeadingSizeType = "xs" | "sm" | "md" | "lg" | "xl"

export interface HeadingProps {
  size?: HeadingSizeType
  isBlue?: boolean
  children: ReactNode
  className?: string
}
