import { BaseSyntheticEvent, ReactNode } from "react";

type ButtonType = "primary" | "secondary" | "delete";

export interface ButtonProps {
  onClick: (event: BaseSyntheticEvent) => void;
  type: ButtonType;
  children: ReactNode;
}
