import React from "react";
import { CiLock } from "react-icons/ci";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {  FaBuilding } from "react-icons/fa"; // Importing icons
import { GoPeople } from "react-icons/go";
import { IoIosList } from "react-icons/io";
import { useSidebarCollapseContext } from "../Context/SidebarCollapseContext";

function Search() {
  const location = useLocation();

  // Function to determine if a NavLink should be active
  const isActiveNavLink = (path) => {
    return location.pathname.startsWith(path);
  };

  const { isCollapsed } = useSidebarCollapseContext(); 

  return (
    <>
      
      <div className={`fixed top-16 ${isCollapsed ? 'left-18' : 'left-64'} right-0 bg-white z-40`}>
      
        {/* Position fixed for the navigation bar */}
        <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-6">
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-xl font-medium text-black mt-4">Search</h2>
          </div>
        </div>
        <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b p-3 border-gray-200 px-4">
          <ul className="flex flex-row text-sm gap-4">
            <li>
              <NavLink
                to="/Search/PeopleSearch"
                className={`flex items-center text-black-600 ${
                  isActiveNavLink("/Search/PeopleSearch") ? "bg-blue-100" : ""
                } hover:bg-blue-200 rounded-md p-1`}
              >
                <GoPeople className="mr-2" /> People
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Search/CompaniesSearch"
                className={`flex items-center text-black-600 ${
                  isActiveNavLink("/Search/CompaniesSearch")
                    ? "bg-blue-100"
                    : ""
                } hover:bg-blue-200 rounded-md p-1`}
              >
                <FaBuilding className="mr-2" /> Companies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Search/SavedListSearch"
                className={`flex items-center text-black-600 ${
                  isActiveNavLink("/Search/SavedListSearch")
                    ? "bg-blue-100"
                    : ""
                } hover:bg-blue-200 rounded-md p-1`}
              >
                <IoIosList className="mr-2" /> Save List
              </NavLink>
            </li>
          </ul>
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

export default Search;
