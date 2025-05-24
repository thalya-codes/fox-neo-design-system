import { Modal } from "@mui/material";

import { forwardRef } from "react";
import type { TModalRoot } from "../types";
import { tokens } from "../../../tokens";

export const ModalRoot = forwardRef(
  ({ open, onClose, children }: TModalRoot) => (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        outline: "none",
      }}
      BackdropProps={{
        sx: {
          backgroundColor: tokens.colors.brand["translucent"],
        },
      }}
    >
      <div className="rounded-sm shadow-md bg-neutral-0 w-2/3">
        {children as unknown as React.ReactElement}
      </div>
    </Modal>
  )
);

ModalRoot.displayName = "ModalRoot"