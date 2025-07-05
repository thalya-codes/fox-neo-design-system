'use client';

import { forwardRef } from "react";
import type { TFormGroupLabel } from "../types";

export const FormGroupLabel = forwardRef<HTMLLabelElement, TFormGroupLabel>((
	{className = "", ...props},
	ref
) => <label ref={ref} className={`font-body text-brand-950 text-sm font-semibold ${className}`} {...props} />) 

FormGroupLabel.displayName = "FormGroupLabel"