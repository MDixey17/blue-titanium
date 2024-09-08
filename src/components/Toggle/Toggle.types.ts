import { BaseSyntheticEvent } from "react"

export interface ToggleProps {
  value?: boolean
  onUpdate?: (event: BaseSyntheticEvent) => void
  label?: string
  className?: string
}
