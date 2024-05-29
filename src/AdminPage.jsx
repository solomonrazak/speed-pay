import React, { useState } from "react";
import razzy from "./assets/images/razzy.jpg";
import Overview from "./components/admin/Overview";
import SetupZone from "./components/admin/SetupZone";
import Services from "./components/admin/Services";
import Reports from "./components/admin/Reports";
import Profile from "./components/admin/Profile";

const AdminPage = () => {
  const [activeComponent, setActiveComponent] = useState("Overview");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Overview":
        return <Overview />;
      case "SetupZone":
        return <SetupZone />;
      case "Services":
        return <Services />;
      case "Reports":
        return <Reports />;
      case "Profile":
        return <Profile />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="w-screen bg-gray-100 h-screen min-h-full">
      <div className="flex p-7">
        {/* Side bar */}
        <div className="w-[20%] px-6">
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
            <ul className="flex flex-col gap-2">
              <li
                className={`px-2 py-1 ml-[-8px] rounded-md cursor-pointer ${
                  activeComponent === "Overview"
                    ? "bg-gray-400 text-slate-900 font-medium"
                    : ""
                }`}
                onClick={() => setActiveComponent("Overview")}
              >
                Overview
              </li>
              <li
                className={`hover:bg-gray-400 hover:text-slate-900 hover:font-medium px-2 py-1 ml-[-8px] rounded-md cursor-pointer ${
                  activeComponent === "SetupZone"
                    ? "bg-gray-400 text-slate-900 font-medium"
                    : ""
                }`}
                onClick={() => setActiveComponent("SetupZone")}
              >
                Set up Zone
              </li>
              <li
                className={`px-2 py-1 ml-[-8px] rounded-md cursor-pointer ${
                  activeComponent === "Services"
                    ? "bg-gray-400 text-slate-900 font-medium"
                    : ""
                }`}
                onClick={() => setActiveComponent("Services")}
              >
                Services
              </li>
              <li
                className={`px-2 py-1 ml-[-8px] rounded-md cursor-pointer ${
                  activeComponent === "Reports"
                    ? "bg-gray-400 text-slate-900 font-medium"
                    : ""
                }`}
                onClick={() => setActiveComponent("Reports")}
              >
                Reports
              </li>
              <li
                className={`px-2 py-1 ml-[-8px] rounded-md cursor-pointer ${
                  activeComponent === "Profile"
                    ? "bg-gray-400 text-slate-900 font-medium"
                    : ""
                }`}
                onClick={() => setActiveComponent("Profile")}
              >
                Profile
              </li>
            </ul>
          </div>
        </div>
        {/* vertical line */}
        <div className="bg-gray-400 w-[0.8px] h-[30rem]"></div>
        {/* main section */}
        <div className="w-[80%] px-8">
          <div className="flex justify-between">
            <h1>{activeComponent}</h1>
            <p>Institution Name</p>
          </div>
          {/* render active component here */}
          <div>{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
