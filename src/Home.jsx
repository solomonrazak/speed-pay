import { useState } from 'react'

import './App.css'
import { Link} from 'react-router-dom';


function Home() {
  const [count, setCount] = useState(0)

  return (
   <div className='w-screen flex flex-col items-center mt-9 min-h-full'>
    <div className='flex flex-col mt-10 text-center gap-4 mb-9'>
    <h1 className='text-[27px] font-bold'>Welcome to Speedpay App</h1>
    <h2 className='text-[18px] font-medium'>Choose Login Options</h2>
    </div>
    
    
    <div className='flex gap-4'>
      <button className='bg-slate-900 text-white px-3 py-1 rounded-md font-medium'><Link to="/adminlogin">Admin</Link></button>
      <button className='bg-slate-900 text-white px-3 py-1 rounded-md font-medium'><Link to="/implantlogin">Implant Teller</Link></button>
    </div>
   </div>
  )
}

export default Home;
