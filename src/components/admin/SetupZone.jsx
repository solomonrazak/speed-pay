import React, {useState} from 'react';
import NewUser from './NewUser';

const SetupZone = () => {
    const [disPlayForm, setDisplayForm] = useState(false);
  return (
    <div>
        <div className="border border-gray-500 p-3">
            <ul className="flex gap-2">
                <li className="cursor-pointer font-medium" onClick={() => setDisplayForm(true)}>New User</li>
                <li>New Services</li>
            </ul>
            {disPlayForm && <div><NewUser /></div>}
            

        </div>
    </div>
  )
}

export default SetupZone