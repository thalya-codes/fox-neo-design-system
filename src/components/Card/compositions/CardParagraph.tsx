'use client';

import { forwardRef } from "react";
import { cardParagraphSizes } from "../sizes";
import type { TCardParagraph } from "../types";

export const CardParagraph = forwardRef<HTMLParagraphElement, TCardParagraph>(
  ({ size = "sm", className = "", ...props }, ref) => (
    <p
      ref={ref}
      className={`font-body font-medium text-brand-800  ${cardParagraphSizes[size]} ${className}`}
      {...props}
    />
  )
);

CardParagraph.displayName = "CardParagraph"
