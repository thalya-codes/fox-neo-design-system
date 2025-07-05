'use client';

import { forwardRef } from "react";
import { cardTitleSizes } from "../sizes";
import type { TCardTitle } from "../types";

export const CardTitle = forwardRef<HTMLHeadingElement, TCardTitle>(
  ({ size = "sm", className = "", ...props }, ref) => (
    <h3
      ref={ref}
      className={`font-title text-brand-950 font-medium ${cardTitleSizes[size]} ${className}`}
      {...props}
    />
  )
);


CardTitle.displayName = "CardTitle"