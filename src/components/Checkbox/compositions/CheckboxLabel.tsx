import { forwardRef, type LabelHTMLAttributes } from "react";

export const CheckboxLabel = forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement>
>(({  className = "", ...props }) => (
  <label className={`font-body text-xs leading-5 text-brand-950 ${className}`} {...props} />
));

CheckboxLabel.displayName = "CheckboxLabel"