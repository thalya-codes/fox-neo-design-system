import {tokens} from "../../tokens"

export const selectVariants = {
    default:  {
        initial: {
            outline: "none",
            border: 1,
            borderColor: tokens.colors.brand["300"],   
            "&.MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
            },
            
        },
        focus: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                borderColor: "transparent",                       
            }
        }
    },
    error: {
        initial: {
            outline: "none",
            border: 1,
            borderColor: tokens.colors.danger["700"],
            ":placeholder-shown": {
                color: tokens.colors.danger["700"]
            },
            color: tokens.colors.danger["700"]
        },
        focus: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                borderColor: "transparent",
                ":placeholder-shown": {
                    color: tokens.colors.danger["700"]
                }
            }
        }
    }
}

