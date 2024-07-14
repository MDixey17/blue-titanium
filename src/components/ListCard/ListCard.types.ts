export type ListCardDataType = (string | number)[]

type ListCardSpacingType = "sm" | "md" | "lg"

export interface ListCardProps {
  title: string
  data: ListCardDataType[]
  className?: string
  spacing?: ListCardSpacingType
}
