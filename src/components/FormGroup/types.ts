import type { DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes, LabelHTMLAttributes } from "react";

export type TFormGroupMessage = HTMLAttributes<HTMLElement> & {type?: "default" | "error"} & HtmlHTMLAttributes<HTMLParagraphElement>

export type TFormGroupLabel = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

export type TFormGroupRoot = HTMLAttributes<HTMLDivElement>