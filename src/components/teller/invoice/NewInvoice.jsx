import React, {useState} from "react";
import {Input} from "@nextui-org/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import NewInvoiceTable from "./NewInvoiceTable";
import InvoiceTable from "./InvoiceTable";

const NewInvoice = () => {
    const [showDetail, setShowDetail] = useState(false);
    const [hideNew, setHideNew] = useState(false)
  return (
    <div className="pb-8">
        {!hideNew && 
        <div>
      <h1 className="text-center font-medium mb-4">New Invoice</h1>
      <div className="border-1 border-gray-400 rounded-md ">
        <p className="p-2 font-medium">Basic Information</p>
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
            <RiArrowDropDownLine className="absolute top-6 left-[8.5rem] text-[26px]"/>
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
            <RiArrowDropDownLine className="absolute top-6 left-[8.5rem] text-[26px]"/>
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
      <div className="border-1 border-gray-400 rounded-md mt-10">
        <h1 className="p-2 font-medium">Invoice Details</h1>
        <div className="border-t-1 border-gray-400">
        <NewInvoiceTable />
        </div>
      

      </div>
      <div className="flex flex-col items-end p-3 mr-16 gap-2">
              <div className="flex gap-24">
                <p className="text-[13px] font-light ml-[-20px]">Subtotal</p>
                <p className="text-[13px] font-medium">$1300</p>
              </div>
              <div className="flex gap-32">
                <p className="text-[13px] font-light">Tax</p>
                <p className="text-[13px] font-medium">20%</p>
              </div>
              <div className="w-[170px] h-[0.5px] bg-gray-200"></div>
              <div className="flex gap-28">
                <p className="text-[13px] font-light">Due</p>
                <p className="text-[13px] font-medium">$1560</p>
              </div>
              <div className="w-[170px] h-[0.5px] bg-gray-200"></div>
              <div className="flex gap-[6.5rem]">
                <p className="text-[13px] font-medium">Total</p>
                <p className="text-[13px] font-medium">$1560</p>
              </div>
            </div>
            <div className="flex justify-center gap-4">
                <button className="bg-slate-900 text-white w-[150px] py-1 px-2 rounded-md text-[13px] font-medium">Cancel</button>
                <button className="bg-slate-900 text-white w-[150px] py-1 px-2 rounded-md text-[13px] font-medium" onClick={() => {setShowDetail(true); setHideNew(true);}}>Save</button>
            </div>
            </div>
}
{showDetail && 
            <div>
            <h1 className="text-center text-[15px] font-medium mb-5">Invoice Details</h1>
            <div className="border-1 border-gray-300 p-4 rounded-lg">
            <div className="flex justify-between">
              <div>
                <p className="font-light text-[13px] mb-5">BILL TO</p>
                <p className="font-medium text-[20px] mb-3">Company Name</p>
                <div className="font-light">
                  <p>Address 1</p>
                  <p>Address 2</p>
                  <p>City, Country</p>
                  <p>Contact</p>
                </div>
              </div>
              <div className="w-[0.8px] h-48 bg-gray-300"></div>
              <div className="flex items-end">
                <p className="font-light">INVOICE 0941</p>
              </div>
            </div>
            <InvoiceTable />
            <div className="flex flex-col items-end p-3 mr-16 gap-2">
              <div className="flex gap-24">
                <p className="text-[13px] font-light ml-[-20px]">Subtotal</p>
                <p className="text-[13px] font-medium">$1300</p>
              </div>
              <div className="flex gap-32">
                <p className="text-[13px] font-light">Tax</p>
                <p className="text-[13px] font-medium">20%</p>
              </div>
              <div className="w-[170px] h-[0.5px] bg-gray-200"></div>
              <div className="flex gap-28">
                <p className="text-[13px] font-light">Due</p>
                <p className="text-[13px] font-medium">$1560</p>
              </div>
              <div className="w-[170px] h-[0.5px] bg-gray-200"></div>
              <div className="flex gap-[6.5rem]">
                <p className="text-[13px] font-medium">Total</p>
                <p className="text-[13px] font-medium">$1560</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-5">
                <button className="bg-slate-900 text-white w-[150px] py-1 px-2 rounded-md text-[13px] font-medium">Print Receipt</button>
                <button className="bg-slate-900 text-white w-[150px] py-1 px-2 rounded-md text-[13px] font-medium">Send via Email</button>
            </div>
            </div>
}
      
    </div>
  );
};

export default NewInvoice;
