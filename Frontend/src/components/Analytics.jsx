import React from 'react'
import { CiLock } from "react-icons/ci";
import { NavLink, Outlet, useLocation } from 'react-router-dom';

function Analytics() {
    const location = useLocation();

    // Function to determine if a NavLink should be active
    const isActiveNavLink = (path) => {
        return location.pathname.startsWith(path);
    };
  return (
   <> <div className="fixed top-16 left-64 right-0 bg-white z-40"> {/* Position fixed for the navigation bar */}
                <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-4">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-medium text-black mt-4">Analytics</h2>
                        <div className="flex gap-4 mt-6 mr-3">
                            <button className="flex items-center bg-gray-200 text-sm 
                            text-gray-600 px-3 py-2 rounded-lg hover:bg-blue-300"><span  className="mr-1 text-gray-600 px-2 rounded-md"><CiLock /></span>
                                Create Dashboard
                                
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b p-3 border-gray-200 px-4">
                    <ul className="flex flex-row text-sm gap-4">
                        <li>
                            <NavLink
                                to="/Analytics/Dashboard"
                                className={`text-black-600 ${isActiveNavLink('/Analytics/Dashboard') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Analytics/Reports"
                                className={`text-black-600 ${isActiveNavLink('/Analytics/Reports') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
                            >
                                Reports
                            </NavLink>
                        </li>
                       
                    </ul>
                </div>
            </div>

            <div className="mt-36 ml-60"> {/* Margin-top to ensure content doesn't overlap with fixed header and navbar */}
                <Outlet />
            </div>
        </>
  );
}

export default Analytics