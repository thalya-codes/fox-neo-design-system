'use client';

import { forwardRef, type HTMLAttributes } from "react";

export const CheckboxRoot = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`flex flex-col gap-2 ${className}`} {...props} />
));

CheckboxRoot.displayName = "Checkbox"