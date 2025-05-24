import {tokens} from "../../tokens"

export const checkboxFieldVariants = {
  default: {
    padding: 0,
    color: tokens.colors.brand[300], // Border color
    "&.Mui-checked": {
      color: tokens.colors.brand[300], // Container color when checked
    },
  },
  error: {
    padding: 0,
    color: tokens.colors.danger["700"], // Border color
    "&.Mui-checked": {
      color: tokens.colors.danger["700"] // Container color when checked
    },
  },
};

export const checkboxMessageVariants = {
  default: "text-brand-950",
  error: "text-danger-700",
};
