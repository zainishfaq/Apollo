import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { IoEyeOutline } from "react-icons/io5";
import { BsStopwatch } from "react-icons/bs";
import { useSidebarCollapseContext } from "../../Context/SidebarCollapseContext";

ChartJS.register(ArcElement, Tooltip, Legend);

function DataHealthCenter() {
  const data1 = {
    datasets: [
      {
        data: [100, 0],
        backgroundColor: ["#d3d3d3", "#4caf50"],
        borderWidth: 0,
      },
    ],
  };
  const data2 = {
    datasets: [
      {
        data: [0, 100],
        backgroundColor: ["#d3d3d3", "#4caf50"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%", // This makes the doughnut chart more like a progress circle
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips for a cleaner look
      },
    },
    maintainAspectRatio: false, // Disable aspect ratio to allow custom sizing
  };

  const Divider = () => <div className="border-t border-gray-200 my-2 mx-2"></div>;

  const { isCollapsed } = useSidebarCollapseContext();

  return (
    <>
      <div className={`mt-5 ${isCollapsed ? "-ml-44" : "ml-5"} ${isCollapsed ? "mr-2" : "mr-5"}`}>
        <h1 className="text-xl font-semibold">Contacts Data Health</h1>

        <div className="flex flex-row gap-3 mt-5">
          <div className="w-1/2 bg-white rounded-t-md rounded-r-md rounded-l-md shadow-lg p-5 flex">
            <div
              className="relative flex items-center justify-center"
              style={{ width: "110px", height: "110px" }}
            >
              <Doughnut data={data1} options={options} />
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-lg">Job Changes</h2>
              <span className="flex flex-row gap-2 mt-5">
                <p className="font-semibold">50.0%</p>
                <p className="text-gray-800"> of contacts have accurate data.</p>
              </span>
              <span className="flex flex-row gap-2 mt-2">
                <p className="font-semibold">0.0% </p>
                <p className="text-gray-800">of contacts have inaccurate data.</p>
              </span>
            </div>
          </div>
          <Divider />
          <div className="w-1/2 bg-white rounded-t-md shadow-lg p-5 flex">
            <div
              className="relative flex items-center justify-center"
              style={{ width: "110px", height: "110px" }}
            >
              <Doughnut data={data2} options={options} />
            </div>
            <div className="ml-4">
              <h2 className="font-bold text-lg">Missing Emails</h2>
              <span className="flex flex-row gap-2 mt-5">
                <p className="font-semibold">100.0%</p>
                <p className="text-gray-800">of contacts have email addresses.</p>
              </span>
              <span className="flex flex-row gap-2 mt-2">
                <p className="font-semibold">0.0%</p>
                <p className="text-gray-800">of contacts are missing an email address.</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={`flex gap-10 -mt-2 ${isCollapsed ? "-ml-44" : "ml-5"} ${isCollapsed ? "mr-2" : "mr-5"}`}>
        <div className="w-1/2 bg-white rounded-b-md shadow-lg flex justify-between border-t-2 border-gray-200">
          <button className="flex items-center m-5 text-blue-600 font-semibold text-sm">
            <IoEyeOutline className="mr-2" />
            View Contacts
          </button>
          <button className={`flex items-center m-5 ${isCollapsed ? "ml-32" : "ml-40"} text-blue-600 font-semibold text-sm`}>
            <BsStopwatch className="mr-2" />
            View Schedule
          </button>
          <Divider />
        </div>
        <div className="w-1/2 bg-white rounded-b-md shadow-lg flex justify-between border-t-2 border-gray-200">
          <button className="flex items-center m-5 text-blue-600 font-semibold text-sm">
            <IoEyeOutline className="mr-2" />
            View Contacts
          </button>
          <button className={`flex items-center m-5 ${isCollapsed ? "ml-32" : "ml-40"} text-blue-600 font-semibold text-sm`}>
            <BsStopwatch className="mr-2" />
            View Schedule
          </button>
          <Divider />
        </div>
      </div>

      <div className={`text-xl font-semibold mt-10 ${isCollapsed ? "-ml-44" : "ml-5"}`}>
        Total available contacts
      </div>

      <div className={`flex mt-5 gap-3 ${isCollapsed ? "-ml-44" : "ml-5"} ${isCollapsed ? "mr-2" : "mr-5"}`}>
        <div className="w-7/12 bg-white shadow-lg rounded-lg p-3 flex flex-col h-96">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-lg">Personas</h2>
            <ul className="flex gap-2 text-gray-800">
              <span className="bg-blue-300 rounded-full h-2 w-2 mt-1 text-blue-300 px-2 "></span>
              <li className="text-sm">Your Data</li>
              <span className="bg-blue-500 rounded-full h-2 w-2 mt-1 text-blue-500 px-2 "></span>
              <li className="text-sm">Net new Data</li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-24">
            <h3 className="font-semibold text-lg">Total Contacts</h3>
            <p className="text-center text-gray-800 mt-2 p-2">
              Add personas and/or connect your CRM to view the total available market for contacts
            </p>
            <button className="mt-5 px-4 py-2 bg-white  text-black border border-black hover:text-blue-500 rounded-md">
              Create Persona
            </button>
          </div>
        </div>
        <div className="w-5/12 bg-white shadow-lg rounded-lg p-5 flex flex-col h-96">
          <div className="flex justify-between items-center mb-5">
            <h2 className="font-semibold text-lg">Summary</h2>
            <ul className="flex gap-2 text-gray-800">
              <span className="bg-blue-300 rounded-full h-2 w-2 mt-1 text-blue-300 px-2 "></span>
              <li className="text-sm">Your Data</li>
              <span className="bg-blue-500 rounded-full h-2 w-2 mt-1 text-blue-500 px-2 "></span>
              <li className="text-sm">Net new Data</li>
            </ul>
          </div>
          <div className="flex flex-col items-center mt-20">
            <h3 className="font-semibold text-lg">Total Contacts</h3>
            <p className="text-center text-gray-800 mt-2 ">
              Add personas and/or connect your CRM to view the total available market for contacts
            </p>
            <button className="mt-5 px-4 py-2 bg-white  text-black border border-black hover:text-blue-500 rounded-md">
              Create Persona
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataHealthCenter;
