'use client';

import { forwardRef } from "react";
import { inputVariants } from "./variants";
import type { TInput } from "./types";

export const Input = forwardRef<HTMLInputElement, TInput>(
  ({ variant = "default", className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={`border rounded-sm px-4 py-1 font-body text-brand-950 outline-none text-sm ${inputVariants[variant]} ${className}`}
      {...props}
    />
  )
);

Input.displayName = "Input"

export type {TInput  } from "./types"