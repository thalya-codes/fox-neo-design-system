import { forwardRef } from "react";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import DropdownMUI from "@mui/joy/Dropdown";
import type { TDropdown } from "./types";
import {tokens} from "../../tokens"

export const Dropdown = forwardRef(({ children, items }: TDropdown) => {
	return (
		<DropdownMUI>
			<MenuButton 
				sx={{
					border: "none", 
					padding: 2, 
					"&:hover": {
					  background: "transparent"
					} 
				}}
			>
				{children}
			</MenuButton>
			
			<Menu
				sx={{
					border: `1px solid ${tokens.colors.brand["300"]}`,
					boxShadow: tokens.boxShadow["shadow-lg"],
					padding: `${tokens.spacing[2]} ${tokens.spacing[3]}`,
				}}
				
			>
				{items?.map((item, index) => (
					<MenuItem key={index} {...item}>
						{item.text}
					</MenuItem>
				))}
			</Menu>
		</DropdownMUI>
	);
})

Dropdown.displayName = "Dropdown"

export type { TDropdown } from "./types"