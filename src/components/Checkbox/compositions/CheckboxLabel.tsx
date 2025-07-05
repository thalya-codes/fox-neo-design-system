'use client';

import { forwardRef, type LabelHTMLAttributes } from "react";

export const CheckboxLabel = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>(({  className = "", ...props }, ref) => (
  <label ref={ref} className={`font-body text-xs leading-5 text-brand-950 ${className}`} {...props} />
));

CheckboxLabel.displayName = "CheckboxLabel"