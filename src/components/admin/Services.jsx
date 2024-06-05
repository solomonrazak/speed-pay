import React, {useState} from 'react';
import {Input} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon";
import Shape from "../../assets/images/Shape.png"
import menu from "../../assets/images/menu.png"
import drop from "../../assets/images/drop.png"

import ManageService from './ManageService';
import ManageUser from './ManageUser';


const Services = () => {
  const [manageUser, setManageUser] = useState(true)
  

 
  return (
    <div className="border-1 border-black rounded-md p-3">
      <div className="mb-5">
        <ul className="flex gap-3">
          <li className="cursor-pointer" onClick={() => setManageUser(true)}>Manage User</li>
          <li className="cursor-pointer" onClick={() => setManageUser(false)}>Manage Service</li>
        </ul>
      </div>
      
<div>
  {manageUser ? <ManageUser /> : <ManageService />}
</div>

    </div>
  )
}

export default Services;