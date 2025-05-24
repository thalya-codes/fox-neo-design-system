import { forwardRef, type HTMLAttributes } from "react";

export const ModalBody = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({className = "", ...props}) => (
  <div
    className={`p-6 font-body text-sm text-neutral-950 leading-6 ${className}`}
    {...props}
  />
));

ModalBody.displayName = "ModalBody"