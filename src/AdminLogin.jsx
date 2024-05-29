import React, {useState} from 'react';
import { IoIosEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    //email input handler
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    //password input handler
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    //submit form function

    function submitForm(e){
        e.preventDefault();
        console.log('Email', email);
        console.log('password', password)
        setEmail("");
        setPassword("")

    }



  return (
    <div className='w-screen'>
        <div className='w-full flex flex-col justify-center items-center my-auto mt-16'>
        <h1 className="text-4xl font-medium">SpeedPay</h1>
        <p className="font-medium mt-2">Admin</p>
        <h2 className="mt-16 text-2xl font-medium">Login</h2>
        <div className="mt-5">
            <form className="flex flex-col gap-5 relative" onSubmit={submitForm}>
                <input type="email" className="w-[16rem] text-gray-500 pl-3 h-10 border-2 focus:border-slate-900 focus:outline-non" placeholder="Enter email here" value={email} onChange={handleEmail} />
                <input type="password" className="w-[16rem] pl-3 h-10 border-2 focus:border-slate-900 focus:outline-non" placeholder="Enter password" value={password} onChange={handlePassword}/><IoIosEyeOff className='absolute top-[4.5rem] right-3'/>
                <button className="text-white bg-slate-900 py-2 rounded-md" type="submit">Continue</button>
            </form>
            <p className="text-center mt-5">Forgot my passowrd<span className="ml-1 underline text-slate-900 font-medium cursor-pointer">reset it here</span> </p>
        </div>
        <div className="flex justify-center mt-8">
        <button className="text-white bg-slate-900 px-3 py-1 rounded-md"><Link to="/">Return to HomePage</Link></button>
        </div>
        </div>
    </div>
  )
}

export default AdminLogin;