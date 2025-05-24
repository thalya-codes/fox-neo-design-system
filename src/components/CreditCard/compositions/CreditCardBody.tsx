import { forwardRef } from "react";
import type { TCreditCardBody } from "../types";

export const CreditCardBody = forwardRef<HTMLDivElement, TCreditCardBody>(
  ({ cardNumber, userFullName, validity, className = "", ...props }) => (
    <div
      className={`flex flex-col justify-between w-fulll h-full text-xl  font-dm-sans font-medium  text-neutral-0 ${className}`}
      {...props}
    >
      <div className="flex justify-between items-center">
        {cardNumber?.map((number, index) => <span key={index}>{number}</span>)}
      </div>

      <div className="w-full flex justify-between items-center">
        <p>{userFullName}</p>
        <p>{validity}</p>
      </div>
    </div>
  )
);

CreditCardBody.displayName = "CreditCardBody"
