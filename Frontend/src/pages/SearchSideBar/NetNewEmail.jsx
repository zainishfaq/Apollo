import React from "react";

function NetNewEmail() {
  return (
    <>
      <div>
        {/* <div className="flex">
          <div className=" ml-auto items-center    space-x-4">
            <select className="border border-gray-300 rounded-md">
              <option>im.uxama85@gmail.com</option>
            </select>
          </div>
          <div>0 / 50 Daily emails sent</div>
        </div> */}
        <div
          className="flex items-center justify-center h-64 border border-dashed bg-white border-gray-300 rounded-md"
          style={{ height: "40rem" }}
        >
          <div className="text-center">
            <div className="text-2xl text-gray-500">No emails here!</div>
            <div className="text-gray-400">
              Check again later or clear any NetNewEmail.
            </div>
            <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-md">
              Clear filters
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default NetNewEmail;
