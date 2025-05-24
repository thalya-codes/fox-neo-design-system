import { forwardRef } from "react";
import Image from "next/image";
import { TCreditCardHeader } from "../types";

//TODO: Hospedar imagens
export const CreditCardHeader = forwardRef<
  HTMLDivElement,
  TCreditCardHeader
>(({ 
  className = "", 
  logoSrc = "https://i.postimg.cc/mgKz7XKb/credit-card-logo.png", 
  nfcSrc = "https://i.postimg.cc/s2KmjRvn/nfc.png",
  logoAlt = "",
  nfcAlt = "", 
  ...props 
}) => (
  <div className={`flex justify-between items-center w-full ${className}`} {...props}>
    <Image src={logoSrc} alt={logoAlt}  width={74} height={74}/>

    <Image src={nfcSrc} alt={nfcAlt}  width={43} height={28}/>
  </div>
));

CreditCardHeader.displayName = "CreditCardHeader"