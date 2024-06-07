import React, {useState} from 'react';
import NewUser from './NewUser';
import NewService from './NewService';

const SetupZone = () => {
    const [disPlayForm, setDisplayForm] = useState(false);
    const [activeLink, setActiveLink] = useState('newUser');
  return (
    <div className='flex justify-center w-full ml-[6rem]'>
        <div>
            <ul className="flex gap-2">
                <li className={`cursor-pointer border-1 border-black rounded-tr-lg rounded-tl-lg border-b-0 px-3 ${activeLink === "newUser" ? "bg-gradient-to-t from-transparent to-orange-200 border-orange-400 border-2 font-normal" : ""}`} onClick={() => setActiveLink('newUser')}>New User</li>
                <li  className={`cursor-pointer border-1 border-black rounded-tr-lg rounded-tl-lg border-b-0 px-2 ${activeLink === "newServices" ? "bg-gradient-to-t from-transparent to-orange-200 border-orange-400 border-2 font-medium" : ""}`} onClick={() => setActiveLink('newServices')}>New Services</li>
            </ul>
            <div>{activeLink === "newUser" ? <NewUser /> : <NewService />}</div>
            

        </div>
    </div>
  )
}

export default SetupZone