import React from "react";
import { MdDelete } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi"; // Import the settings icon
import { FaPen } from "react-icons/fa";
import { useSidebarCollapseContext } from '../Context/SidebarCollapseContext';

function Calls() {
  const { isCollapsed } = useSidebarCollapseContext();
  return (
    <>
      
      <div className={`fixed top-16 ${isCollapsed ? 'left-18' : 'left-64'} right-0  bg-white z-40`}> {/* Position fixed for the navigation bar */}
                <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-4">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-medium text-black mt-4">Calls</h2>
                        <div className="flex gap-4 mt-6 mr-3">
                            <button className="flex items-center bg-gray-200 text-sm text-gray-600 px-3 py-2 rounded-lg hover:bg-blue-300">
                                <span className="mr-1 text-gray-600 px-2 rounded-md"><FiSettings/></span>
                            </button>
                        </div>
                    </div>
                </div>
         
         <div className=" ">
            <div className="flex flex-row rounded-lg  bg-white shadow-md justify-between">
              <div className="flex flex-row items-center px-4 py-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
                <div className="border border-gray-300 rounded-md p-2 ml-4">
                <label className="inline-flex items-center ml-2">
                    <span className="text-gray-700 px-2">
                      <FaPen  className="h-5 w-5 text-gray-700 cursor-pointer" />
                    </span>
                  </label>
                  <label className="inline-flex items-center ml-2">
                    <span className="text-gray-700 px-2">
                      <FaArrowDown className="h-5 w-5 text-gray-700 cursor-pointer" />
                    </span>
                  </label>
                  <label className="inline-flex items-center px-3">
                    <span className="text-gray-700">
                      <MdDelete className="h-5 w-5 text-gray-700 cursor-pointer" />
                    </span>
                  </label>
                </div>
              </div>
              <div className="flex flex-row items-center px-4 py-2   space-x-2">
                <input
                  type="text"
                  className="form-checkbox px-2 h-7 border text-indigo-600"
                  placeholder="Search "
                />
                <button className="border border-gray-300 rounded-md px-3 py-1 ml-2 text-gray-500 hover:text-indigo-500 hover:border-indigo-500">
                  Run diagnostics
                </button>
              </div>
            </div>
            {/* Placeholder for Sequence Content */}
            <div
              className="flex items-center justify-center h-64 border border-dashed bg-gray-100 border-gray-300 rounded-md"
              style={{ height: "35rem" }}
            >
              <div className="text-center">
                <div className="text-2xl text-gray-500">No emails here!</div>
                <div className="text-gray-400">
                  Check again later or clear any applied filters.
                </div>
                <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-md">
                  Get Started
                </button>
              </div>
            </div>
          </div> 
         </div>
    </>
  );
}

export default Calls;
