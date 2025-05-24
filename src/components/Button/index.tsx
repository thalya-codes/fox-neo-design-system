import React from "react";
import { buttonSizes } from "./sizes";
import { buttonVariants } from "./variants";
import type { IButtonActions, TButton } from "./types";

const Button = React.forwardRef<HTMLButtonElement, TButton & IButtonActions>(
  ({ size = "sm", variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`rounded-sm font-body ${buttonSizes[size]} ${buttonVariants[variant]}`}
        {...props}
      />
    );
  }
);
export { Button };

Button.displayName = "Button"

export type { IButtonActions, TButton } from "./types"