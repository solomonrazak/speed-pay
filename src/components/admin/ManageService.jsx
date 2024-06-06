import React, {useState} from 'react';
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import Shape from "../../assets/images/Shape.png"
import menu from "../../assets/images/menu.png"
import drop from "../../assets/images/drop.png"
import AllServices from './AllServices';
import Fees from './Fees';
import Forms from './Forms';
import Trials from './Trials';

const ManageService = () => {
    const [activeTab, setActiveTab] = useState('allservices');
    const renderComponent = () => {
        switch (activeTab) {
          case 'allservices':
            return <AllServices />;
          case 'forms':
            return <Forms />;
          case 'fees':
            return <Fees />;
          case 'trials':
            return <Trials />;
          default:
            return null;
        }
      };

   
  return (
    <div>
        <div className="flex justify-between">
        <div>
        <Input
        isClearable
        radius="lg"
        classNames="w-[30px] border-1 border-black"
        placeholder="Type to search..."
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
       />
        </div>
        <div className="flex gap-2">
        <div className="flex gap-2 bg-gray-200 items-center rounded-md w-[400px]">
          <div className={`cursor-pointer flex items-center text-[9px] w-full h-full justify-center gap-1 px-2 ${activeTab === 'allservices' ? 'bg-white font-semibold border-1 border-gray-400 rounded-md' : ''}`} onClick={() => setActiveTab('allservices')}>
            <p>All Services</p>
            <div className="rounded-full flex justify-center items-center h-4 w-4  bg-gray-300">54</div>
          </div>
          <div className={`flex text-[8px] gap-1 cursor-pointer items-center w-full h-full px-1 ${activeTab === 'forms' ? 'bg-white font-semibold border-1 border-gray-400 rounded-md' : ''}`} onClick={() => setActiveTab('forms')}>
            <p>Forms & Permits</p>
            <div className="rounded-full flex justify-center items-center h-4 w-4 bg-red-200 text-red-600">40</div>
          </div>
          <div className={`flex text-[9px] gap-1 cursor-pointer items-center w-full h-full px-1 ${activeTab === 'fees' ? 'bg-white font-semibold border-1 border-gray-400 rounded-md' : ''}`} onClick={() => setActiveTab('fees')}>
            <p>Fees & Charges</p>
            <div className="rounded-full flex justify-center items-center h-4 w-4 bg-yellow-100 text-yellow-500">10</div>
          </div>
          <div className={`flex text-[9px] gap-1 cursor-pointer items-center w-full h-full px-1 ${activeTab === 'trials' ? 'bg-white font-semibold border-1 border-gray-400 rounded-md' : ''}`} onClick={() => setActiveTab('trials')}>
            <p>Trials & Adverts</p>
            <div className="rounded-full flex justify-center items-center h-4 w-4 bg-green-200 text-green-500">4</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex text-black gap-2 text-[13px] items-center px-2 border-gray-500 bg-white rounded-md border-1 py-1">
            <img src={Shape} width={27} height={10} className="object-contain"/>
            <p>Filter</p>
          </div>
          <div className="flex text-black gap-2 text-[13px] items-center px-2 border-gray-500 bg-white rounded-md border-1 py-1">
            <img src={menu} width={15} height={10} className="object-cover"/>
            <p>Newest First</p>
            <img src={drop} width={10} height={10} className="object-cover"/>
          </div>

        </div>
        </div>

      </div>
      <div>{renderComponent()}</div>
    </div>
  )
}

export default ManageService;