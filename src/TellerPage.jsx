import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import razzy from "./assets/images/razzy.jpg";

const TellerPage = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === `/teller-page/${path}`;
  return (
    <main className="grid grid-cols-4">
       <aside className="col-span-1 h-screen bg-gray-200 p-5 min-h-full">
      <h1 className="text-2xl font-medium mb-8 text-center">SpeedPay</h1>
      <div className="ml-[-10px] flex flex-col items-center mb-5">
            <div className="rounded-full">
              <img
                src={razzy}
                alt="admin-image"
                width={50}
                height={70}
                className="rounded-full border-2 border-white"
              />
            </div>
            <h1 className="text-slate-900 font-medium">Solomon Razak</h1>
            <p className="font-thin text-[12px]">Teller</p>
          </div>
          <div className="flex justify-center">
          <ul className="flex flex-col justify-center">
            <li className="mb-3">
              <Link to="tell-overview"  className={`mb-3 px-2 py-1 ml-[-8px] rounded-md cursor-pointer text-blue-600 ${
                isActive("tell-overview")
                  ? "bg-gray-400 text-slate-900 font-medium"
                  : "hover:bg-gray-300 hover:text-slate-900"
              }`}
            >Overview</Link>
            </li>
            <li className="mb-3">
              <Link to="payments" className={`mb-3 px-2 py-1 ml-[-8px] rounded-md cursor-pointer text-blue-600 ${
                isActive("payments")
                  ? "bg-gray-400 text-slate-900 font-medium"
                  : "hover:bg-gray-300 hover:text-slate-900"
              }`}>Bill Payments</Link>
            </li>
            <li className="mb-3">
              <Link to="generator" className={`mb-3 px-2 py-1 ml-[-8px] rounded-md cursor-pointer text-blue-600 ${
                isActive("generator")
                  ? "bg-gray-400 text-slate-900 font-medium"
                  : "hover:bg-gray-300 hover:text-slate-900"
              }`}>Bill Generator</Link>
            </li>
            <li className="mb-3">
              <Link to="tell-reports" className={`mb-3 px-2 py-1 ml-[-8px] rounded-md cursor-pointer text-blue-600 ${
                isActive("tell-reports")
                  ? "bg-gray-400 text-slate-900 font-medium"
                  : "hover:bg-gray-300 hover:text-slate-900"
              }`}>Reports</Link>
            </li>
            <li className="mb-3">
              <Link to="tell-profile" className={`mb-3 px-2 py-1 ml-[-8px] rounded-md cursor-pointer text-blue-600 ${
                isActive("tell-profile")
                  ? "bg-gray-400 text-slate-900 font-medium"
                  : "hover:bg-gray-300 hover:text-slate-900"
              }`}>Profile</Link>
            </li>
          </ul>
          </div>
          </aside>
          <div className="col-span-3 col-start-2 bg-gray-100">
        <Outlet />
      </div>
    </main>
  )
}

export default TellerPage