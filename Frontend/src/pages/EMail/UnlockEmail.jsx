import React from "react";

function UnlockEmail() {
  return (
    <>
      <div>
      <div className="">
          <div className="flex items-center space-x-4 p-2 border border-gray-300 rounded-md">
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-200 rounded">
                <i className="fas fa-square text-gray-500"></i>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <i className="fas fa-clock text-gray-500"></i>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <i className="fas fa-envelope text-gray-500"></i>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <i className="fas fa-trash text-gray-500"></i>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <i className="fas fa-play text-gray-500"></i>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <i className="fas fa-redo text-gray-500"></i>
              </button>
              <button className="p-1 hover:bg-gray-200 rounded">
                <i className="fas fa-ellipsis-h text-gray-500"></i>
              </button>
            </div>
            <div className="flex-1 flex justify-end items-center space-x-2">
              <select className="p-1 border border-gray-300 rounded-md">
                <option>im.uxama85@gmail.com</option>
              </select>
              <div className="text-sm">
                <div>0 / 50 Daily emails sent</div>
                <div>
                  No data for deliverability score{" "}
                  <i className="fas fa-info-circle text-gray-500"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center h-64 border border-dashed bg-white border-gray-300 rounded-md"
          style={{ height: "28rem" }}
        >
          <div className="text-center">
            <div className="text-2xl text-gray-500">No emails here!</div>
            <div className="text-gray-400">
              Check again later to  UnlockEmail.
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

export default UnlockEmail;
