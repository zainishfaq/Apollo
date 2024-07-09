import React from 'react';
import Csv from "../../assets/CSV.png"
import { useSidebarCollapseContext } from "../../Context/SidebarCollapseContext";

function CSV() {

  const { isCollapsed } = useSidebarCollapseContext();

  return (
    <div className={`flex flex-col ${isCollapsed ? "-ml-44" : "ml-5"} items-center p-10  mt-60`}>
      <img src={Csv} alt="CSV" className='w-24 rounded-lg h-20 mb-4'/>
      <div className='font-semibold text-xl mb-2 mt-5'>CSV Enrichment</div>
      <p className='text-center text-gray-500 mb-4 mx-64'>
        Upgrade your plan to begin enriching your records with SpillWord’s information.
      </p>
      <button className='bg-blue-500 text-white py-2 px-2 rounded'>
        Upgrade to Basic
      </button>
    </div>
  );
}

export default CSV;
