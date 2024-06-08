import React, { useState } from 'react';
import {Input} from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";
import InvoiceDetails from './invoice/InvoiceDetails';

const Payments = () => {

    const [showDetails, setShowDetails] = useState(false);
    const [hideNumber, setHideNumber] = useState(false)
  return (
    <div className="p-5 w-full flex flex-col items-center justify-center">
        {!hideNumber &&
    <div className="space-y-3 mt-[10rem]">
    <div className="relative">
  <Input
  
  type="text"
  label="Invoice Number"
  variant="bordered"
  defaultValue="454541s"
  className="max-w-xs"
  radius="none"
  
/>
<FaCheck className="absolute top-9 left-[18.5rem] transform -translate-y-1/2 text-green-500" />
</div>
<button className="text-white bg-slate-900 w-[320px] py-2" onClick={() => {setShowDetails(true); setHideNumber(true);}}>Continue</button>
</div>
}
{showDetails &&
 <InvoiceDetails />
 }

</div>
  )
}

export default Payments