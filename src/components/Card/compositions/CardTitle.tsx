import { forwardRef } from "react";
import { cardTitleSizes } from "../sizes";
import type { TCardTitle } from "../types";

export const CardTitle = forwardRef<HTMLHeadingElement, TCardTitle>(
  ({ size = "sm", className = "", ...props }) => (
    <h3
      className={`font-title text-brand-950 font-medium ${cardTitleSizes[size]} ${className}`}
      {...props}
    />
  )
);


CardTitle.displayName = "CardTitle"