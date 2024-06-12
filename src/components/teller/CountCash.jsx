import React, {useState} from "react";
import { Input } from "@nextui-org/react";
import Receipt from "./receipt/Receipt";


const CountCash = () => {
    const [showReceipt, setShowReceipt] = useState(false);
    const [hideCash, setHideCash] = useState(false);


  return (
    <div>
        {!hideCash && 
        <div>
      <h1 className="text-center font-medium">Count Cash</h1>
      <div className="flex justify-center gap-16">
        <div>
          <p className="ml-20">Expected Amount:</p>
          <div className="flex text-[10px] gap-[6.5rem] mb-2">
            <p>Notes Denomination/Quantity</p>
            <p>Amount</p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
              <div>
                <p className="text-gray-400">200</p>
                <p>1</p>
              </div>
              <div className="bg-gray-400 h-full ml-[9rem] w-[0.5px]"></div>
              <p>200</p>
            </div>
            <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
              <div>
                <p className="text-gray-400">100</p>
                <p>0</p>
              </div>
              <div className="bg-gray-400 h-full ml-[8rem] w-[0.5px]"></div>
              <p>0</p>
            </div>
            <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
              <div>
                <p className="text-gray-400">50</p>
                <p>0</p>
              </div>
              <div className="bg-gray-400 h-full ml-[8.5rem] w-[0.5px]"></div>
              <p>0</p>
            </div>
            <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
              <div>
                <p className="text-gray-400">20</p>
                <p>0</p>
              </div>
              <div className="bg-gray-400 h-full ml-[8.5rem] w-[0.5px]"></div>
              <p>0</p>
            </div>
            <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
              <div>
                <p className="text-gray-400">10</p>
                <p>0</p>
              </div>
              <div className="bg-gray-400 h-full ml-[8.5rem] w-[0.5px]"></div>
              <p>0</p>
            </div>
            <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
              <div>
                <p className="text-gray-400">5</p>
                <p>0</p>
              </div>
              <div className="bg-gray-400 h-full ml-[9rem] w-[0.5px]"></div>
              <p>0</p>
            </div>
            <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
              <div>
                <p className="text-gray-400">2</p>
                <p>0</p>
              </div>
              <div className="bg-gray-400 h-full ml-[9rem] w-[0.5px]"></div>
              <p>0</p>
            </div>
            <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
              <div>
                <p className="text-gray-400">1</p>
                <p>0</p>
              </div>
              <div className="bg-gray-400 h-full ml-[9rem] w-[0.5px]"></div>
              <p>0</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="font-bold">200 GHS</p>
            <div className="flex text-[10px] gap-[6.5rem] mb-2">
              <p>Coins Denomination/Quantity</p>
              <p>Amount</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
                <div>
                  <p className="text-gray-400">2</p>
                  <p>1</p>
                </div>
                <div className="bg-gray-400 h-full ml-[9rem] w-[0.5px]"></div>
                <p>2</p>
              </div>
              <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
                <div>
                  <p className="text-gray-400">1</p>
                  <p>0</p>
                </div>
                <div className="bg-gray-400 h-full ml-[9rem] w-[0.5px]"></div>
                <p>0</p>
              </div>
              <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
                <div>
                  <p className="text-gray-400">0.50</p>
                  <p>0</p>
                </div>
                <div className="bg-gray-400 h-full ml-[7.8rem] w-[0.5px]"></div>
                <p>0</p>
              </div>
              <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
                <div>
                  <p className="text-gray-400">0.20</p>
                  <p>0</p>
                </div>
                <div className="bg-gray-400 h-full ml-[7.8rem] w-[0.5px]"></div>
                <p>0</p>
              </div>
              <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
                <div>
                  <p className="text-gray-400">0.10</p>
                  <p>0</p>
                </div>
                <div className="bg-gray-400 h-full ml-[7.8rem] w-[0.5px]"></div>
                <p>0</p>
              </div>
              <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
                <div>
                  <p className="text-gray-400">0.05</p>
                  <p>0</p>
                </div>
                <div className="bg-gray-400 h-full ml-[7.8rem] w-[0.5px]"></div>
                <p>0</p>
              </div>
              <div className="flex w-72 h-12 border-1 border-gray-400 bg-white justify-between items-center px-2 rounded-md">
                <div>
                  <p className="text-gray-400">0.01</p>
                  <p>0</p>
                </div>
                <div className="bg-gray-400 h-full ml-[7.8rem] w-[0.5px]"></div>
                <p>0</p>
              </div>
              <div className="flex w-72 h-12  bg-transparent justify-between items-center px-2 rounded-md">
                <div>
                  <p className="font-medium">Overall</p>
                </div>

                <p>202</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3 w-full flex flex-col items-center mt-5">
        <Input
          variant="bordered"
          type="text"
          label="Paid By"
          defaultValue="Company/Customer Name"
          radius="none"
          className="max-w-xs bg-white"
        />
        <button className="bg-slate-950 text-white w-[20rem] px-2 py-1" onClick={() => {setShowReceipt(true); setHideCash(true);}}>
          Continue
        </button>
      </div>

      </div>
}
      {showReceipt && 
      <div>
        <Receipt />
      </div>
}
    </div>
  );
};

export default CountCash;
