import type { HTMLAttributes } from "react";

export type TCreditCardRoot = {
  type?: "basic" | "black";
} & HTMLAttributes<HTMLDivElement>;

export type TCreditCardBody = {
  cardNumber: number[];
  userFullName: string;
  validity: string;
} & HTMLAttributes<HTMLDivElement>;


export type TCreditCardHeader = {
  logoSrc?: string
  nfcSrc?: string
  logoAlt?: string
  nfcAlt?: string
} & HTMLAttributes<HTMLDivElement>