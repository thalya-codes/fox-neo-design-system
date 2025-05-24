import { forwardRef, type HTMLAttributes } from "react";

export const ModalFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className = "", ...props }) => (
  <div className={`flex flex-col ${className}` } {  ...props}>
    <hr className="border border-neutral-200" />

    <div className="flex justify-between py-6 px-4">{children}</div>
  </div>
));


ModalFooter.displayName = "ModalFooter"