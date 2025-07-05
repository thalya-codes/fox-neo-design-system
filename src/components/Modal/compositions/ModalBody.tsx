'use client';

import { forwardRef, type HTMLAttributes } from "react";

export const ModalBody = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({className = "", ...props}, ref) => (
  <div
    ref={ref}
    className={`p-6 font-body text-sm text-neutral-950 leading-6 ${className}`}
    {...props}
  />
));

ModalBody.displayName = "ModalBody"