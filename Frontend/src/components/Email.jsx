import React from "react";
import { CiLock } from "react-icons/ci";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FiSettings } from "react-icons/fi"; // Import the settings icon

function Email() {
  const location = useLocation();

  // Function to determine if a NavLink should be active
  const isActiveNavLink = (path) => {
    return location.pathname.startsWith(path);
  };
  return (
    <>
      {" "}
      <div className="fixed top-16 left-64 right-0 bg-white z-40">
        {" "}
        {/* Position fixed for the navigation bar */}
        <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-black mt-4">Emails</h2>
          </div>
        </div>
        <div className="">
          <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b p-3 border-gray-200 px-4 justify-between">
            <ul className="flex flex-row text-sm gap-4 justify-between">
              <div className="flex flex-row px-2">
                <li>
                  <NavLink
                    to="/Email/FilterTemplate"
                    className={`text-black-600 ${
                      isActiveNavLink("/Analytics/Dashboard")
                        ? "bg-blue-100"
                        : ""
                    } hover:bg-gray-300 rounded-md p-2`}
                  >
                    All Email
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Email/EmailTemplate"
                    className={`text-black-600 ${
                      isActiveNavLink("/Analytics/Reports") ? "bg-blue-100" : ""
                    } hover:bg-gray-300 rounded-md p-3`}
                  >
                    Template
                  </NavLink>
                </li>
              </div>
              <div>
                <div className="flex gap-4  mr-3">
                  <button className="flex items-center border text-sm text-gray-600 px-2 py-2 rounded-lg hover:bg-blue-300">
                    <span className="mr-1 text-gray-600 px-2 rounded-md">
                      <CiLock />
                    </span>
                    Deliverablity Stats
                  </button>
                  <button className="flex items-center border text-sm text-gray-600 px-3 py-2 rounded-lg hover:bg-blue-300">
                    <span className="text-gray-600 px-2 rounded-md">
                      <FiSettings className="w-5 h-5" />
                    </span>
                  </button>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-36 ml-60">
        {" "}
        {/* Margin-top to ensure content doesn't overlap with fixed header and navbar */}
        <Outlet />
      </div>
    </>
  );
}

export default Email;
