import React, {useState} from 'react';
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import Shape from "../../assets/images/Shape.png"
import menu from "../../assets/images/menu.png"
import drop from "../../assets/images/drop.png"
import AllUser from './AllUser';
import Inputter from './Inputter';
import Approver from './Approver';
import Viewer from './Viewer';

const ManageUser = () => {
    const [activeTab, setActiveTab] = useState('allUser');

    const renderComponent = () => {
      switch (activeTab) {
        case 'allUser':
          return <AllUser />;
        case 'inputter':
          return <Inputter />;
        case 'approver':
          return <Approver />;
        case 'viewer':
          return <Viewer />;
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
        <div className="flex gap-3">
        <div className="flex gap-2 bg-gray-200 items-center rounded-md">
          <div className={`cursor-pointer flex items-center text-[10px] w-full h-full gap-1 px-2 ${activeTab === 'allUser' ? 'bg-white font-semibold border-1 border-gray-400 rounded-md' : ''}`} onClick={() => setActiveTab('allUser')}>
            <p>AllUser</p>
            <div className="rounded-full flex justify-center items-center h-4 w-4 bg-gray-300">54</div>
          </div>
          <div className={`flex text-[10px] gap-1 cursor-pointer items-center w-full h-full px-2 ${activeTab === 'inputter' ? 'bg-white font-semibold border-1 border-gray-400 rounded-md' : ''}`} onClick={() => setActiveTab('inputter')}>
            <p>Inputter</p>
            <div className="rounded-full flex justify-center items-center h-4 w-4 bg-red-200 text-red-600">40</div>
          </div>
          <div className={`flex text-[10px] gap-1 cursor-pointer items-center w-full h-full px-2 ${activeTab === 'approver' ? 'bg-white font-semibold border-1 border-gray-400 rounded-md' : ''}`} onClick={() => setActiveTab('approver')}>
            <p>Approver</p>
            <div className="rounded-full flex justify-center items-center h-4 w-4 bg-yellow-100 text-yellow-500">10</div>
          </div>
          <div className={`flex text-[10px] gap-1 cursor-pointer items-center w-full h-full px-2 ${activeTab === 'viewer' ? 'bg-white font-semibold border-1 border-gray-400 rounded-md' : ''}`} onClick={() => setActiveTab('viewer')}>
            <p>Viewer</p>
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


      <div>
       {renderComponent()}
      </div>

    </div>
  )
}

export default ManageUser;