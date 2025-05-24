import type {  HTMLAttributes, ReactNode } from "react";

export type TModalVariant = "default" | "danger";

export type TModal = {
    open: boolean;
    onClose: () => void;
}

export type TModalRoot = {     
    children: ReactNode 
} & TModal
;

export type TModalHeader = {
    title: string;
    variant?: TModalVariant;
    onClose: () => void;
} & HTMLAttributes<HTMLDivElement>