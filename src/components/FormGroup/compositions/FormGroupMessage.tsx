import { forwardRef } from "react";
import type { TFormGroupMessage } from "../types";

export const FormGroupMessage = forwardRef(({ type = "default", className = "", ...props }: TFormGroupMessage) => (
	<p
		className={`font-body text-xs font-medium ${type === "default" ? "text-brand-950" : "text-danger-700"} ${className}`}
		{...props}
	/>
));

FormGroupMessage.displayName = "FormGroupMessage"