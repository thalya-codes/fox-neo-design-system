import type { ReactNode } from 'react';
import type { ExtendMenuItem, MenuItemTypeMap } from "@mui/joy";

export type TDropdown = {
    items: Omit<ExtendMenuItem<MenuItemTypeMap>, "text"> & { text: string }[]
    children: ReactNode
}