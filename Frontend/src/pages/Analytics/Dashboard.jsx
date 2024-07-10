import React from 'react'
import { useSidebarCollapseContext } from '../../Context/SidebarCollapseContext';


function Dashboard() {
    const { isCollapsed } = useSidebarCollapseContext();
  return (
    <div className={`flex items-center ${isCollapsed ? "-ml-44" : "ml-5"} ${isCollapsed ? "mr-2" : "mr-5"} justify-center min-h-screen`}>
            <div className="text-center">
                <video width="600" controls className="mx-auto">
                    <source src='' type="video" />  {/* add a source of video accordingly */}
                    Your browser does not support the video tag.
                </video>
                <h2 className="flex justify-center mt-4">
                    Your team and find insights on how to improve messaging, targeting, call & email connect rates, and sales velocity.
                </h2>
                <button className="bg-blue-800 text-white p-2 rounded-md mt-4">
                    Upgrade to Professional
                </button>
            </div>
        </div>

  )
}

export default Dashboard