'use client';

import { forwardRef, type HTMLAttributes } from "react";

export const CheckboxContainer = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({  className = "", ...props }, ref) => (
  <div ref={ref} className={`flex items-center gap-2 ${className}`} {...props} />
));

CheckboxContainer.displayName = ""