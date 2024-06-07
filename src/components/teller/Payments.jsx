import React from 'react';
import {Input} from "@nextui-org/react";
import { FaCheck } from "react-icons/fa6";

const Payments = () => {
  return (
    <div className="p-5">
    <div className="space-y-3">
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
<button className="text-white bg-slate-900 w-[320px] py-2">Continue</button>
</div>
</div>
  )
}

export default Payments