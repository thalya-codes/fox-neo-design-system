import { forwardRef } from "react";
import type { TFormGroupRoot } from "../types";

export const FormGroupRoot = forwardRef((
    {className = "", ...props}: TFormGroupRoot
) => <div className={`flex flex-col gap-4 ${className}`} {...props} />);

FormGroupRoot.displayName = "FormGroupRoot"