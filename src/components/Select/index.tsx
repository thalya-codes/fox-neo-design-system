'use client';

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SelectMUI from "@mui/material/Select";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import type { TSelect } from "./types";
import { selectVariants } from "./variants";

export const Select = ({
    variant = "default",
    placeholder,
    defaultValue = 0,
    width,
    options,
    ...props
  }: TSelect) => {
    const style = selectVariants[variant];

    return (
      <FormControl fullWidth>
        <SelectMUI
          IconComponent={KeyboardArrowDownIcon}
          className={`border font-body px-4 py-1 ${selectVariants[variant]}`}
          fullWidth
          sx={{
            ...style.initial,
            ...style.focus,
            padding: 0,
            width: width,
          }}
          defaultValue={defaultValue}
          MenuProps={{
            PaperProps: {
              sx: {
                ...style.initial,
                margin: 0,
                marginTop: 1,
                boxShadow: "none",
                paddingX: 2,
              },
            },
          }}
          {...props}
        >
          {placeholder && (
            <MenuItem value={0} disabled>
              <span className="text-neutral-500">{placeholder}</span>
            </MenuItem>
          )}

          {options?.map(({ label, ...option }) => (
            <MenuItem key={option.value} {...option}>
              <p className="text-neutral-800">{label}</p>
            </MenuItem>
          ))}
        </SelectMUI>
      </FormControl>
    );
  }
;

Select.displayName = "Select"

export type { TSelect } from "./types"