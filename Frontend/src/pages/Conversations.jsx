import React from 'react'
import { WiStars } from "react-icons/wi";
import { RiMailStarLine } from "react-icons/ri";
import { LiaCloudsmith } from "react-icons/lia";
import zoom from "../assets/zoom.svg"
import { useSidebarCollapseContext } from '../Context/SidebarCollapseContext';



function Conversations() {
  const { isCollapsed } = useSidebarCollapseContext();
  return (
    <>
    <div className={`fixed top-16 ${isCollapsed ? 'left-18' : 'left-64'} right-0 bg-white z-40`}> {/* Position fixed for the navigation bar */}
    <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-4">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-black mt-4">Conversations</h2>
        </div>
    </div>
    </div>
   

    <div className={`mt-20 ${isCollapsed ? "ml-10" : "ml-56"} w-auto -mb-10 bg-white -mr-6`}>
    <div className="flex flex-1 h-screen">
  {/* Left half */}
  <div className="w-1/2 bg-white h-full">
    <video controls className='w-full h-svh'>
      <source src="path_to_your_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>

  {/* Right half */}
  <div className="w-1/2 bg-white p-8 mt-18">
    <h1 className='font-semibold text-3xl p-4'> Convert your conversations into winning strategies</h1>
    <h2 className='font-semibold text-2xl p-4'>Automatically record, transcribe, and analyze video call meetings powered by Spillword AI.</h2>
    <ul className='font-semibold text-lg pl-2'>
      <li className="flex items-center">
        <WiStars className="inline-block w-8 h-8" /> {/* Assuming WiStars renders an SVG icon */}
        Save time with insights from AI-generated meeting summaries
      </li>
          
      <li className="flex items-center">
        <RiMailStarLine className="inline-block w-6 h-6 mr-2 pt-0" /> {/* Assuming RiMailStarLine renders an SVG icon */}
        Help your team sell more by understanding key conversation metrics
      </li>

      <li className="flex items-center">
        <LiaCloudsmith className="mr-2" /> {/* Assuming LiaCloudsmith renders an SVG icon */}
        Get visibility into key topics and behaviors of your team
      </li>
    </ul>
    <div className="flex justify-between mt-4">
      <span className='flex'>Works with: <img src={zoom} alt="Zoom Image" style={{ width: '100px', height: '50px' }} className=" rounded-lg mb-1 ml-4 -mt-3" /> </span>
      
    </div>
    <div className="flex mt-4">
      <button style={{ width: '220px', height: '30px' }} className="bg-blue-800 text-white rounded-md p-0 m-2">
        Setup conversation now
      </button>
      <button style={{ width: '220px', height: '30px' }} className="bg-white text-black rounded-md m-2 pl-1 pr-1 border border-black">
        See Conversations in action
      </button>
    </div>
  </div>
</div>

      </div>
      
</>

  )
}

export default Conversations