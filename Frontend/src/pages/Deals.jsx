import React from 'react'
import { WiStars } from "react-icons/wi";
import { RiMailStarLine } from "react-icons/ri";
import { LiaCloudsmith } from "react-icons/lia";
import connet from "../assets/connet.svg"
import salesforce from "../assets/salesforce.svg"
import Deal from "../assets/Deal.jpeg"

function Deals() {
  return (
    <>
    <div className="fixed top-16 left-64 right-0 bg-white z-40"> {/* Position fixed for the navigation bar */}
    <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-4">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-black mt-4">Deals</h2>
        </div>
    </div>
    </div>
   

    <div className="mt-24 ml-56 w-auto bg-white">
    <div className="flex flex-1 h-screen">
  {/* Left half */}
  <div className="w-1/2 bg-white h-full">
  <img src={Deal} alt="Deal Image" style={{ width: '98%', height: '100%' }} className=" rounded-lg shadow-lg mb-1 ml-2 mt-0" /> 
  </div>

  {/* Right half */}
  <div className="w-1/2 bg-white p-8 mt-12">
    <h1 className='font-semibold text-3xl p-4'> Bring more deals across the finish line</h1>
    <h2 className='font-semibold text-2xl p-4'>Accelerate your deal velocity with streamlined deal management in Apollo.</h2>
    <ul className='font-semibold text-lg pl-2'>
      <li className="flex items-center">
        <WiStars className="inline-block w-8 h-8" /> {/* Assuming WiStars renders an SVG icon */}
        Get actionable insights to push deals forward
      </li>
          
      <li className="flex items-center">
        <RiMailStarLine className="inline-block w-6 h-6 mr-2 pt-0" /> {/* Assuming RiMailStarLine renders an SVG icon */}
        Use with Apollo solutions, like Conversations, for a consolidated deal view
      </li>

      <li className="flex items-center">
        <LiaCloudsmith className="mr-2" /> {/* Assuming LiaCloudsmith renders an SVG icon */}
        Configure automations to increase efficiency
      </li>
    </ul>
    <div className="flex justify-between mt-4">
      <span className='flex'>Use Apollo as your CRM or sync with: <img src={connet} alt="connet Image" style={{ width: '30px', height: '30px' }} className=" rounded-lg  mb-1 ml-2 mt-0" /> <img src={salesforce} alt="salesforce Image" style={{ width: '30px', height: '30px' }} className=" rounded-lg mb-1 ml-2 mt-0" /></span>
      
    </div>
    <div className="flex mt-4">
      <button style={{ width: '120px', height: '30px' }} className="bg-blue-800 text-white rounded-md p-0 m-2">
        Get Started
      </button>
    </div>
  </div>
</div>

      </div>
      
</>

  )
}

export default Deals