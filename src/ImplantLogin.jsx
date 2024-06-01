import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Input } from "@nextui-org/react";
import { EyeFilled } from "./components/icons/EyeFilled";
import { EyeSlash } from "./components/icons/EyeSlash";

const ImplantLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);
    
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    

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
        <p className="font-medium mt-2">Implant Teller</p>
        <h2 className="mt-16 text-2xl font-medium">Login</h2>
        <div className="mt-5">
            <form className="flex flex-col gap-5 relative" onSubmit={submitForm}>
            <Input
              type="email"
              label="Email"
              variant="bordered"
              defaultValue="junior@nextui.orgd"
              className="w-[300px]"
              placeholder="Enter email here"
              radius="none"
              value={email}
              onChange={handleEmail}
            />
            <Input
              label="Password"
              variant="bordered"
              placeholder="Enter your password"
              radius="none"
              value={password}
              onChange={handlePassword}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlash className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilled className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              type={isVisible ? "text" : "password"}
              className="max-w-xs"
            />
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

export default ImplantLogin;