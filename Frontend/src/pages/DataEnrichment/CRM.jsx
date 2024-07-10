import React from 'react';
import Sale from "../../assets/Sale.png"
import HubSpot from "../../assets/Hubspot.png"
import { useSidebarCollapseContext } from "../../Context/SidebarCollapseContext";

function CRM() {
  const { isCollapsed } = useSidebarCollapseContext(); 

  return (
    <>
      <div className={`text-xl font-semibold mt-56 ${isCollapsed ? "-ml-36" : "ml-5"} text-center`}>
        Connect your CRM
        <div className='text-sm font-medium mx-auto text-gray-500 max-w-lg px-4'>
          Connect a CRM to begin enriching your saved records with information from SpillWord’s database.
        </div>
      </div>

      <div className={`flex justify-center items-center gap-5  ${isCollapsed ? "-ml-36" : "ml-5"} ${isCollapsed ? "mr-7" : "mr-5"} mt-10 rounded-lg shadow-lg`}>
        <div className='w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
          <img src={Sale} alt="Salesforce" className='w-20 h-16 mb-4 rounded-lg'/>
          <div className='font-semibold text-xl mt-5 mb-2'>Connect Salesforce</div>
          <p className='text-center text-gray-500 mb-4'>
            Connect SpillWord to a Salesforce admin and begin enriching your records.
          </p>
          <button className='bg-blue-500 text-white py-2 px-2 rounded'>
            Connect now
          </button>
        </div>

        <div className='w-1/2 bg-white p-6 rounded-lg shadow-md flex flex-col items-center'>
          <img src={HubSpot} alt="Hubspot" className='w-20 h-16 mb-4 rounded-lg'/>
          <div className='font-semibold text-xl mt-5 mb-2'>Connect Hubspot</div>
          <p className='text-center text-gray-500 mb-4'>
            Connect SpillWord to a Hubspot admin and begin enriching your records.
          </p>
          <button className='bg-blue-500 text-white py-2 px-2 rounded'>
            Connect now
          </button>
        </div>
      </div>
    </>
  );
}

export default CRM;
