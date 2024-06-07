
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import razzy from "./assets/images/razzy.jpg";

const AdminPage = () => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === `/adminpage/${path}`;

  return (
    <main className="grid grid-cols-4 bg-gray-100">
      <aside className="col-span-1 h-screen bg-gray-200 p-5">
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
          <p className="font-thin text-[12px]">Admin</p>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col justify-center">
            <li
              className={`mb-3 px-4 py-1 ml-[-8px] rounded-md cursor-pointer ${
                isActive("overview")
                  ? "bg-gray-400 text-slate-900 font-medium"
                  : "hover:bg-gray-300 hover:text-slate-900"
              }`}
            >
              <Link to="overview" className="text-blue-500 block">Overview</Link>
            </li>
            <li
              className={`mb-3 px-4 py-1 ml-[-8px] rounded-md cursor-pointer ${
                isActive("setup-zone")
                  ? "bg-gray-400 text-slate-900 font-medium"
                  : "hover:bg-gray-300 hover:text-slate-900"
              }`}
            >
              <Link to="setup-zone" className="text-blue-500 block">Set up Zone</Link>
            </li>
            <li
              className={`mb-3 px-4 py-1 ml-[-8px] rounded-md cursor-pointer ${
                isActive("services")
                  ? "bg-gray-400 text-slate-900 font-medium"
                  : "hover:bg-gray-300 hover:text-slate-900"
              }`}
            >
              <Link to="services" className="text-blue-500 block">Services</Link>
            </li>
            <li
              className={`mb-3 px-4 py-1 ml-[-8px] rounded-md cursor-pointer ${
                isActive("reports")
                  ? "bg-gray-400 text-slate-900 font-medium"
                  : "hover:bg-gray-300 hover:text-slate-900"
              }`}
            >
              <Link to="reports" className="text-blue-500 block">Reports</Link>
            </li>
            <li
              className={`mb-3 px-4 py-1 ml-[-8px] rounded-md cursor-pointer ${
                isActive("profile")
                  ? "bg-gray-400 text-slate-900 font-medium"
                  : "hover:bg-gray-300 hover:text-slate-900"
              }`}
            >
              <Link to="profile" className="text-blue-500 block">Profile</Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="col-span-3 col-start-2 flex gap-3 px-7">
        <div className="w-[1px] h-full bg-black ml-[-28px]"></div>
        <div className="ml-7 mt-10">
        <Outlet />
        </div>
        
      </div>
    </main>
  );
};

export default AdminPage;
