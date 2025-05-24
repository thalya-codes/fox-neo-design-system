import { HTMLAttributes } from "react";

export type TCheckboxVariant = "default" | "error";

export type TCheckboxField = {
  id?: string;
  variant?: TCheckboxVariant;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;  
} 

export type TCheckboxMessage = {
  variant?: TCheckboxVariant;
  children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement>