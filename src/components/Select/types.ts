import type {SelectProps} from "@mui/material/Select";

export type TSelect = {
    variant?: "default" | "error";
    options: Array<{ label: string; value: string }>;
    placeholder?: string;
    width?: number
} & Omit<SelectProps, "variant" | "ref">;