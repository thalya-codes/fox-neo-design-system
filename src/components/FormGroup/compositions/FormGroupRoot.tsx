'use client';

import { forwardRef } from "react";
import type { TFormGroupRoot } from "../types";

export const FormGroupRoot = forwardRef<
    HTMLDivElement,
    TFormGroupRoot
>((
    {className = "", ...props},
    ref
) => <div ref={ref} className={`flex flex-col gap-4 ${className}`} {...props} />);

FormGroupRoot.displayName = "FormGroupRoot"