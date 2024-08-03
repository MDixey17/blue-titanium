import { ReactNode } from "react"

type SectionDirectionType = "row" | "row-reverse" | "column" | "column-reverse"

type SectionJustifyType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"

type SectionAlignType =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "space-between"
  | "space-around"

export interface SectionProps {
  direction?: SectionDirectionType
  justify?: SectionJustifyType
  align?: SectionAlignType
  isPrimary?: boolean
  divider?: boolean
  children?: ReactNode
  className?: string
  wrap?: "wrap" | "nowrap"
}
