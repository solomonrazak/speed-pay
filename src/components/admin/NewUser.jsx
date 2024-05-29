import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";
import {Link, useNavigate } from 'react-router-dom';

const NewUser = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    select1: "",
    select2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
  });

  // function to handle changes in input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // form submit
  const sendForm = (e) => {
    e.preventDefault();
    console.log("form submitted")
  }
  const navigate = useNavigate();

  function goBack(){
    navigate("/adminlogin")
  }
  return (
    <div>
      <h1 className="text-center mb-5">Add New User</h1>
      {showForm && 
      <form onSubmit={sendForm}>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 grid-rows-3 gap-3">
            <div className="relative">
              <select
                className="w-[20em] h-10 appearance-none pl-2 pr-8"
                name="select1"
                value={formData.select1}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <MdKeyboardArrowDown className="absolute top-3 right-2 pointer-events-none" />
            </div>
            <div className="relative">
              <select
                className="w-[20em] h-10 appearance-none pl-2 pr-8"
                name="select2"
                value={formData.select2}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <MdKeyboardArrowDown className="absolute top-3 right-2 pointer-events-none" />
            </div>
            <input
              className="w-[20em] h-10 pl-2"
              placeholder="First Name"
              name="input3"
              value={formData.input3}
              onChange={handleInputChange}
            />
            <input
              className="w-[20em] h-10 pl-2"
              placeholder="Surname"
              name="input4"
              value={formData.input4}
              onChange={handleInputChange}
            />
            <input
              className="w-[20em] h-10 pl-2"
              placeholder="Email Address"
              type="email"
              name="input5"
              value={formData.input5}
              onChange={handleInputChange}
            />
            <input
              className="w-[20em] h-10 pl-2"
              placeholder="Phone number"
              type="tel"
              name="input6"
              value={formData.input6}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-slate-900 text-white px-[5rem] py-1 rounded-md mt-5" type="submit" onClick={() => {setShowForm(false); setShowSummary(true)}}>
            Continue
          </button>
        </div>
      </form>
}
      {/* Summary */}
      {showSummary && 
      <div>
        <p className="text-center ml-[-10px] mb-5 font-medium">Summary</p>
        <div className="w-[600px] mx-auto">
          <div className="grid grid-cols-2 grid-rows-3 gap-5 w-[300px] mx-auto">
            <div>
              <p className="text-gray-500">Access</p>
              <p>{formData.select1}</p>
            </div>
            <div>
              <p className="text-gray-500">Department</p>
              <p>{formData.select2}</p>
            </div>
            <div>
              <p className="text-gray-500">First Name</p>
              <p>{formData.input3}</p>
            </div>
            <div>
              <p className="text-gray-500">Surname</p>
              <p>{formData.input4}</p>
            </div>
            <div>
              <p className="text-gray-500">Email Address</p>
              <p>{formData.input5}</p>
            </div>
            <div>
              <p className="text-gray-500">Phone Number</p>
              <p>{formData.input6}</p>
            </div>
          </div>
        </div>
        <p className="text-center text-slate-900 font-medium">Do you want to save this user?</p>
        <div className="flex justify-center gap-3 mt-3">
            <button className="bg-slate-900 text-white px-10 py-1 rounded-md" onClick={() => {setShowSuccess(true); setShowSummary(false)}}>Yes</button>
            <button className="bg-slate-900 text-white px-10 rounded-md">No</button>
        </div>
      </div>
}

{/* Success */}
{showSuccess && 
<div className="flex justify-center mt-8">
<div className="w-[300px] h-[150px] bg-white flex items-center justify-center">
    <div className="flex flex-col items-center">
    <IoMdCheckmarkCircle /> 
    <h2 className="font-medium">Great</h2>
    <p>Service added successfully</p>
    <div>
        <button className="bg-slate-900 text-white px-2 mt-5 py-1 rounded-md" onClick={goBack}>Go back to Dashboard</button>
    </div>
    </div>

</div>
</div>
}
    </div>
  );
};

export default NewUser;
