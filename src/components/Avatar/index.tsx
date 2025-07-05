'use client';

import AvatarMUI from "@mui/material/Avatar";
import type { TAvatar } from "./types";
import { avatarSizes } from "./sizes";
import { getInitials } from "../../utils"
import { tokens } from "../../tokens"

export const Avatar = ({ src, name, size = "sm", alt }: TAvatar) => (
  <AvatarMUI
    sizes={size}
    sx={{
      background: tokens.colors.brand["200"],
      color: tokens.colors.brand["500"],
      width: avatarSizes[size].size,
      height: avatarSizes[size].size,
      fontFamily: `${tokens.fontFamily.body[0]}, ${tokens.fontFamily.body[1]}`,
      fontSize: avatarSizes[size].fontSize,
    }}
    {...(alt && { alt })}
    {...(src && { src })}
  >
    {name && getInitials(name)}
  </AvatarMUI>
);

Avatar.displayName = "Avatar";

export type { TAvatar } from "./types";
