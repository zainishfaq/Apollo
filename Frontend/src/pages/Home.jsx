import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import {
  FaReply,
  FaUserFriends,
  FaEnvelopeOpenText,
  FaTasks,
  FaBell,
} from "react-icons/fa";
import Homelayout from "./HomeSidebar/Homelayout";

function Home() {
  return (
    <>
      <div className="text-2xl font-medium bg-white text-black mt-8  -mr-4 ml-56 py-2 border-b border-gray-200 px-4">
        Home
      </div>

      <div className="flex flex-row gap-3 m-5 ml-64">
        <div className="w-1/2 bg-white rounded-lg">
          <div className="bg-white shadow-xl rounded-lg p-3">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 flex justify-center items-center bg-blue-100 rounded-full mr-5">
                <MdOutlineMailOutline className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">0 emails delivered</h2>
                <p className="text-sm text-gray-500">Week-to-date</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/3">
                <p>0 emails opened</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0%</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
              <div className="w-1/3">
                <p>0 emails replied</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0%</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
              <div className="w-1/3">
                <p>0 emails interested</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0%</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-white rounded-lg">
          <div className="bg-white shadow-xl rounded-lg p-3">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 flex justify-center items-center bg-pink-100 rounded-full mr-5">
                <IoCallOutline className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">0 calls dialed</h2>
                <p className="text-sm text-gray-500">Week-to-date</p>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="w-1/3">
                <p>0 calls connected</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0%</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
              <div className="w-1/3">
                <p>0 positive calls</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0%</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
              <div className="w-1/3">
                <p>Average duration</p>
                <span className="flex -flex-row items-center">
                  <p className="text-2xl font-semibold">0s</p>
                  <div className="ml-3 mt-3">
                    <p className="text-green-500 text-sm bg-green-200 rounded-lg flex items-center justify-center">
                      ▲ 0%
                    </p>
                    <p className="text-gray-500 text-sm"> from last week</p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <Homelayout />
      </div> */}
    </>
  );
}

export default Home;
