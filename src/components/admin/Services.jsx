import React, { useState } from 'react';

import ManageService from './ManageService';
import ManageUser from './ManageUser';

const Services = () => {
  const [manageUser, setManageUser] = useState(true);

  return (
    <div>
      <div className="">
        <ul className="flex gap-3">
          <li 
            className={`cursor-pointer  border-1 border-black rounded-tr-lg rounded-tl-lg border-b-0 px-2 ${manageUser ? "bg-gradient-to-t from-transparent to-orange-200 border-orange-400 border-1 font-normal" : ""}`} 
            onClick={() => setManageUser(true)}
          >
            Manage User
          </li>
          <li 
            className={`cursor-pointer border-1 border-black rounded-tr-lg rounded-tl-lg border-b-0 px-2 ${!manageUser ? "bg-gradient-to-t from-transparent to-orange-200 border-orange-400 border-1 font-normal" : ""}`} 
            onClick={() => setManageUser(false)}
          >
            Manage Service
          </li>
        </ul>
      </div>
      
      <div className="border-1 border-black rounded-l-0 rounded-b-md rounded-tr-md p-3"> 
        {manageUser ? <ManageUser /> : <ManageService />}
      </div>
    </div>
  );
}

export default Services;
