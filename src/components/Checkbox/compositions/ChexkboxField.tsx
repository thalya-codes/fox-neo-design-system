import { forwardRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import { checkboxFieldVariants } from "../variants";
import type { TCheckboxField } from "../types";

export const CheckboxField = forwardRef<HTMLButtonElement, TCheckboxField>(
  ({ variant = "default", ...props }, ref) => (
    <Checkbox
      ref={ref}
      sx={(checkboxFieldVariants[variant])}
      {...props}
    />
  )
);

CheckboxField.displayName = "CheckboxField"