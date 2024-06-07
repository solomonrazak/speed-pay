import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import razzy from "./assets/images/razzy.jpg";

const TellerPage = () => {
  return (
    <div className="flex">
       <aside className="w-1/4 h-screen bg-gray-200 p-5">
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
              <Link to="/tell-overview" className="text-blue-500">Overview</Link>
            </li>
            <li className="mb-3">
              <Link to="/payments" className="text-blue-500">Bill Payments</Link>
            </li>
            <li className="mb-3">
              <Link to="/generator" className="text-blue-500">Bill Generator</Link>
            </li>
            <li className="mb-3">
              <Link to="/tell-reports" className="text-blue-500">Reports</Link>
            </li>
            <li className="mb-3">
              <Link to="/tell-profile" className="text-blue-500">Profile</Link>
            </li>
          </ul>
          </div>
          </aside>
          <main className="w-3/4 p-5">
        <Outlet />
      </main>
    </div>
  )
}

export default TellerPage