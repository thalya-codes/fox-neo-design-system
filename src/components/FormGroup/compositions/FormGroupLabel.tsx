import { forwardRef } from "react";
import type { TFormGroupLabel } from "../types";

export const FormGroupLabel =forwardRef((
	{className = "", ...props}: TFormGroupLabel
) => <label  className={`font-body text-brand-950 text-sm font-semibold ${className}`} {...props} />) 

FormGroupLabel.displayName = "FormGroupLabel"