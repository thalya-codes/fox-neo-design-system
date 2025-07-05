'use client';

import { forwardRef } from "react";
import { cardRootVariants } from "../variants";
import type { TCardRoot } from "../types";

export const CardRoot = forwardRef<HTMLDivElement, TCardRoot>(
  ({ variant = "default", className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`flex flex-col gap-3 p-6 bg-neutral-0 rounded-lg ${cardRootVariants[variant]} ${className}`}
      {...props}
    />
  )
);

CardRoot.displayName = "CardRoot"