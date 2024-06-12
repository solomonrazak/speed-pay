import React from "react";
import {Input} from "@nextui-org/react";
import { RiArrowDropDownLine } from "react-icons/ri";

const NewInvoice = () => {
  return (
    <div>
      <h1>New Invoice</h1>
      <div className="border-1 border-gray-400 rounded-md ">
        <p className="p-2">Basic Information</p>
        <div className="flex gap-3 border-t-1 border-gray-400 px-2 py-5">
          <div className="relative ">
            <Input
              isRequired
              variant="bordered"
              type="text"
              label="Customer"
              defaultValue="Company Name"
              className="max-w-xs bg-white"
              radius="none"
            />
            <RiArrowDropDownLine className="absolute top-6 left-[9rem] text-[26px]"/>
          </div>
          <div className="">
            <Input
              isRequired
              variant="bordered"
              type="date"
              label="Invoice Date"
              defaultValue="Aug 08, 2023"
              className="w-[180px] bg-white"
              radius="none"
            />
            
          </div>
          <div className="">
            <Input
              isRequired
              variant="bordered"
              type="date"
              label="Due Date"
              defaultValue="Aug 08, 2023"
              className="w-[180px] bg-white"
              radius="none"
            />
            
          </div>
          <div className="relative">
            <Input
              isRequired
              variant="bordered"
              type="text"
              label="Currency"
              defaultValue="GHS"
              className="max-w-xs bg-white"
              radius="none"
            />
            <RiArrowDropDownLine className="absolute top-6 left-[9rem] text-[26px]"/>
          </div>
          <div className="">
            <Input
              isRequired
              variant="bordered"
              type="text"
              label="Invoice Number"
              defaultValue="0941"
              className="max-w-xs bg-white"
              radius="none"
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInvoice;
