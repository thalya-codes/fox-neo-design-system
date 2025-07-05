'use client';

import { forwardRef } from "react";
import type { TFormGroupMessage } from "../types";

export const FormGroupMessage = forwardRef<
	HTMLParagraphElement, 
	TFormGroupMessage
>(({ type = "default", className = "", ...props }, ref) => (
	<p
		ref={ref}
		className={`font-body text-xs font-medium ${type === "default" ? "text-brand-950" : "text-danger-700"} ${className}`}
		{...props}
	/>
));

FormGroupMessage.displayName = "FormGroupMessage"