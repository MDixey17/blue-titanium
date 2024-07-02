import { BaseSyntheticEvent } from "react";

type InputType = "text" | "password" | "date" | "checkbox";

export interface InputProps {
  label: string;
  type: InputType;
  value: string;
  onUpdate: (event: BaseSyntheticEvent) => void;
}
