import React from 'react';
import Job from "../../assets/JOB pic.png"
import { useSidebarCollapseContext } from "../../Context/SidebarCollapseContext";

function JobChangesAlert() {
  const { isCollapsed } = useSidebarCollapseContext();
  return (
    <div className={`flex flex-col ${isCollapsed ? "-ml-44" : "ml-5"}  items-center p-10  mt-14`}>
      <div className='flex flex-col items-center  px-6 py-2 mb-6 w-full max-w-3xl'>
        <img src={Job} alt="" className='w-1/1 h-52 rounded-lg mb-4'/>
      </div>
      <div className='font-semibold text-xl mb-2'>Get Job Change Alerts</div>
      <p className='text-center text-gray-500 mb-4'>
        Upgrade your plan to see which saved people in Apollo now work for a new company.
      </p>
      <button className='bg-blue-500 text-white py-2 px-4 rounded'>
        Upgrade to Basic
      </button>
    </div>
  );
}

export default JobChangesAlert;
