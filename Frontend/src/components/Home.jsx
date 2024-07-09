import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { useSidebarCollapseContext } from "../Context/SidebarCollapseContext";
import { NavLink, Outlet, useLocation } from "react-router-dom"; // Import NavLink from react-router-dom

function Home() {
  const { isCollapsed } = useSidebarCollapseContext();

  // Function to determine if NavLink should have active styles
  const isActiveNavLink = (path) => {
    return location.pathname.startsWith(path);

};

  return (
    <>
      <div
        className={`text-2xl font-medium bg-white text-black mt-8  ${
          isCollapsed ? "ml-10" : "ml-56"
        } py-2 border-b border-gray-200 px-4`}
      >
        Home
      </div>

      <div
        className={`flex flex-row gap-3 mt-5   ${
          isCollapsed ? "ml-16" : "ml-64"
        } ${isCollapsed ? "mr-2" : "mr-5"}`}
      >
        {/* Email Statistics */}
        <div className="w-1/2 bg-white rounded-lg">
          <div className="bg-white shadow-xl rounded-lg p-3">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 flex justify-center items-center bg-blue-100 rounded-full mr-5">
                <MdOutlineMailOutline className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">0 emails delivered</h2>
                <p className="text-sm text-gray-500">Week-to-date</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/3">
                <p>0 emails opened</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0%</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
              <div className="w-1/3">
                <p>0 emails replied</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0%</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
              <div className="w-1/3">
                <p>0 emails interested</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0%</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call Statistics */}
        <div className="w-1/2 bg-white rounded-lg">
          <div className="bg-white shadow-xl rounded-lg p-3">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full mr-5">
                <IoCallOutline className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">0 calls dialed</h2>
                <p className="text-sm text-gray-500">Week-to-date</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="w-1/3">
                <p>0 calls connected</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0%</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
              <div className="w-1/3">
                <p>0 positive calls</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0%</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
              <div className="w-1/3">
                <p>Average duration</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0s</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`text-2xl font-medium shadow-lg rounded-lg bg-white text-black mt-5  ${isCollapsed ? "ml-16" : "ml-64"} ${isCollapsed ? "mr-2" : "mr-5"}  border-b p-3 border-gray-200 px-2 py-2`}>
        <h3 className="mb-5 text-xl font-semibold">
            WorkSrteam
        </h3>
         <ul className="flex flex-row text-sm gap-4">
          <li>
            <NavLink
              to="/Home/RecentReplies"
              className={`text-black-600 ${isActiveNavLink('/Home/RecentReplies') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
            >
              Recent Replies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Home/RecommendedProspects"
              className={`text-black-600 ${isActiveNavLink('/Home/RecommendedProspects') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
            >
              Recommended Prospects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Home/MessageOptimization"
              className={`text-black-600 ${isActiveNavLink('/Home/MessageOptimization') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
            >
              Message Optimization
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Home/Task"
              className={`text-black-600 ${isActiveNavLink('/Home/Task') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
            >
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Home/Alerts"
              className={`text-black-600 ${isActiveNavLink('/Home/Alerts') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
            >
              Alerts
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="mt-0 ml-60">
        <Outlet />
     </div>
    </>
  );
}

export default Home;
