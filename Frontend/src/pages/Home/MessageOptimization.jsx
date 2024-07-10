import React from "react";
import { useSidebarCollapseContext } from "../../Context/SidebarCollapseContext";

function MessageOptimization() {
  const { isCollapsed } = useSidebarCollapseContext();
  return (
    <>
    <div className= {` -mt-1 bg-white px-3 ${isCollapsed ? "-ml-44" : "ml-4"} ${isCollapsed ? "mr-2" : "mr-5"}`}  >
        <div
          className="flex items-center justify-center  border border-dashed bg-white border-gray-300 rounded-md"
          style={{ height: "40rem" }}
        >
          <div className="text-center">
            <div className="text-2xl text-gray-500">No emails here!</div>
            <div className="text-gray-400">
              Check again later or clear any applied filters.
            </div>
            <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-md">
              Clear filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageOptimization;
