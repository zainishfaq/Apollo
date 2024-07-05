import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";

function Home() {
  return (
    <>
      <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-3 -ml-3 p-4 border-b border-gray-200">
        Home</div>

        <div className="flex flex-row gap-3 m-5">

            <div className="w-1/2 bg-white rounded-md">
            <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 flex justify-center items-center bg-blue-100 rounded-full mr-2">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a1 1 0 001.22 0L21 8m-6 12V4m-6 16V4"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold">0 emails delivered</h2>
              <p className="text-sm text-gray-500">Week-to-date</p>
            </div>
          </div> 
          <div className="flex flex-row">
            <div className="w-1/3">
              <p>0 emails opened</p>
              <p className="text-2xl font-bold">0%</p>
              <p className="text-green-500 text-sm">▲ 0% from last week</p>
            </div>
            <div className="w-1/3">
              <p>0 emails replied</p>
              <p className="text-2xl font-bold">0%</p>
              <p className="text-green-500 text-sm">▲ 0% from last week</p>
            </div>
            <div className="w-1/3">
              <p>0 emails interested</p>
              <p className="text-2xl font-bold">0%</p>
              <p className="text-green-500 text-sm">▲ 0% from last week</p>
            </div>
          </div>
        </div>
            </div>
 

            <div className="w-1/2 bg-white rounded-md">
            <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full mr-2">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7h.01M19 7h.01M15 11h.01M19 11h.01M15 15h.01M19 15h.01M9 7h.01M13 7h.01M9 11h.01M13 11h.01M9 15h.01M13 15h.01M3 5h18M3 19h18"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold">0 calls dialed</h2>
              <p className="text-sm text-gray-500">Week-to-date</p>
            </div>
          </div>
          <div className="flex flex-row ">
            <div className="w-1/3">
              <p>0 calls connected</p>
              <p className="text-2xl font-bold">0%</p>
              <p className="text-green-500 text-sm">▲ 0% from last week</p>
            </div>
            <div className="w-1/3">
              <p>0 positive calls</p>
              <p className="text-2xl font-bold">0%</p>
              <p className="text-green-500 text-sm">▲ 0% from last week</p>
            </div>
            <div className="w-1/3">
              <p>Average duration</p>
              <p className="text-2xl font-bold">0s</p>
              <p className="text-green-500 text-sm">▲ 0% from last week</p>
            </div>
          </div>
        </div>
            </div>

        </div>



      
    </>
  );
}

export default Home;
