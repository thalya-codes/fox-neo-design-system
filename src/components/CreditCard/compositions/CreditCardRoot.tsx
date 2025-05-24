import { forwardRef } from "react";
import { creditCardVariants } from "../variants";
import type { TCreditCardRoot } from "../types";

export const CrediCardRoot = forwardRef<HTMLDivElement, TCreditCardRoot>(
  ({ type = "basic", className = "", ...props }) => (
    <div
      className={`rounded-xl flex flex-col gap-8 p-7 w-[471.75px] h-[254px] ${creditCardVariants[type]} ${className}`}
      {...props}
    />
  )
);

CrediCardRoot.displayName = "CrediCardRoot"