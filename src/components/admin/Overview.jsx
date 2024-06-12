import React from 'react';
import papergreen from "../../assets/images/papergreen.png";
import paper from "../../assets/images/paper.png";
import box from "../../assets/images/box.png";
import arrowred from "../../assets/images/arrowred.png";
import arrowgreen from "../../assets/images/arrowgreen.png";
import trya from "../../assets/images/trya.png";
import DoughnutDataOne from './DoughnutDataOne';

const Overview = () => {
  return (
    <div className="w-full">
      {/* cards */}
      <div className='flex gap-2 justify-between'>
        <div className="flex gap-3 bg-white w-[210px] py-4 pl-3 pr-1 justify-center rounded-md">
            <img src={trya} alt="" width={50} height={60} className="object-contain"/>
            <div className="leading-3 space-y-1">
              <h1 className="font-bold text-[20px]">75</h1>
              <p className="text-[10px] flex flex-col"><span>Total Generated</span><span>Invoices</span></p>
              <div className="flex items-center gap-1">
                <div className='bg-green-100 rounded-full'><img src={arrowgreen} className="object-contain p-1 rounded-full"/></div>
                <p className="text-[10px] text-gray-500">4% (30days)</p>
              </div>
            </div>
        </div>
        <div className="flex gap-3 bg-white w-[210px] py-4 pl-3 pr-1 justify-center rounded-md">
            <img src={trya} alt="" width={50} height={60} className="object-contain"/>
            <div className="leading-3 space-y-1">
              <h1 className="font-bold text-[20px]">357</h1>
              <p className="text-[10px] flex flex-col">Total Transactions</p>
              <div className="flex items-center gap-1">
                <div className='bg-green-100 rounded-full'><img src={arrowgreen} className="object-contain p-1 rounded-full"/></div>
                <p className="text-[10px] text-gray-500">4% (30days)</p>
              </div>
            </div>
        </div>
        <div className="flex gap-3 bg-white w-[210px] py-4 pl-3 pr-1 justify-center rounded-md">
            <img src={trya} alt="" width={50} height={60} className="object-contain"/>
            <div className="leading-3 space-y-1">
              <h1 className="font-bold text-[20px]">65</h1>
              <p className="text-[10px] flex flex-col">Total Canceled</p>
              <div className="flex items-center gap-1">
                <div className='bg-green-100 rounded-full'><img src={arrowgreen} className="object-contain p-1 rounded-full"/></div>
                <p className="text-[10px] text-gray-500">25% (30days)</p>
              </div>
            </div>
        </div>
        <div className="flex gap-3 bg-white w-[210px] py-4 pl-3 pr-1 justify-center rounded-md">
            <img src={trya} alt="" width={50} height={60} className="object-contain"/>
            <div className="leading-3 space-y-1">
              <h1 className="font-bold text-[20px]">$128</h1>
              <p className="text-[10px] flex flex-col">Total Revenue</p>
              <div className="flex items-center gap-1">
                <div className='bg-green-100 rounded-full'><img src={arrowgreen} className="object-contain p-1 rounded-full"/></div>
                <p className="text-[10px] text-gray-500">12% (30days)</p>
              </div>
            </div>
        </div>
      </div>
       <div className="flex">
        <div className="p-0">
        <DoughnutDataOne />
        <p>Total Transaction</p>          
        </div>
        {/* <div className="p-0">
        <DoughnutDataOne />
        <p>Total Transaction</p>          
        </div>
        <div className="p-0">
        <DoughnutDataOne />
        <p>Total Transaction</p>          
        </div> */}
      </div> 
       
    </div>
  )
}

export default Overview