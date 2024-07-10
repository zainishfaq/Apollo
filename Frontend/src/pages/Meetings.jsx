import React from 'react'
import Meeting from "../assets/Meeting.jpeg"
import { useSidebarCollapseContext } from '../Context/SidebarCollapseContext';

function Meetings() {
  const { isCollapsed } = useSidebarCollapseContext();
  return (
   <>
    <div className={`fixed top-16 ${isCollapsed ? 'left-18' : 'left-64'} right-0 bg-white z-40`}> {/* Position fixed for the navigation bar */}
    <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-4">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-black mt-4">Meetings</h2>
        </div>
    </div>
    </div>
    
    <div className={`flex flex-col items-center ${isCollapsed ? "-ml-44" : "ml-5"} ${isCollapsed ? "mr-2" : "mr-5"} justify-center min-h-screen p-4`}>
        <div className="flex flex-col text-center mt-40 ml-64 max-w-lg">
          <img src={Meeting} alt="Calender Image" style={{ width: '400px', height: '250px' }} className=" rounded-lg shadow-lg z-30 mb-4 ml-14" />
          <h3 className="text-2xl font-bold mb-4">Simplify scheduling meetings</h3>
          <h5 className="text-sm mb-4">
            Set your availability in Apollo and make it simple for people to schedule a meeting with you, no back-and-forth required.
          </h5>
          <button style={{ width: '200px', height: '40px' }} className="bg-blue-800 text-white ml-40 p-2 rounded-md">Connect your Calendar</button>
          <h6 className="text-xs text-gray-600 mt-4">
            Google and Microsoft calendars are currently supported.
          </h6>
        </div>
      </div>
</>
  )
}

export default Meetings