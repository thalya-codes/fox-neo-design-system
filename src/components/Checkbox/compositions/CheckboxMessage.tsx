'use client';

import { forwardRef } from "react";
import { checkboxMessageVariants } from "../variants";
import type { TCheckboxMessage } from "../types";

export const CheckboxMessage = forwardRef<HTMLParagraphElement, TCheckboxMessage>(
  ({ variant = "default", className = "", ...props }, ref) => (
    <p
      ref={ref}
      className={`font-body text-xs leading-5 ${checkboxMessageVariants[variant]} ${className}`}
      {...props}
    />
  )
);

CheckboxMessage.displayName = "CheckboxMessage"
