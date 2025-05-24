import { forwardRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { modalHeaderVariants } from "../variants";
import type { TModalHeader } from "../types";

export const ModalHeader = forwardRef<HTMLDivElement, TModalHeader>(
  ({ title, variant = "default", onClose, className = "" ,...props }) => (
    <div className={`flex w-full justify-between  pt-6 px-4 ${className}`} {...props}>
      <h3
        className={`text-center flex-1 font-title text-lg leading-5 ${modalHeaderVariants[variant]}`}
      >
        {title}
      </h3>
      <button onClick={onClose}>
        <CloseIcon className="text-neutral-500 hover:text-neutral-400 cursor-pointer" />
      </button>
    </div>
  )
);

ModalHeader.displayName = "ModalHeader"