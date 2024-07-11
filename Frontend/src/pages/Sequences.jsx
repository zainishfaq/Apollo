import { CiLock } from "react-icons/ci";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Select from "react-select";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { MdOutlineEmail } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { SearchIcon } from "@heroicons/react/solid";
import { useSidebarCollapseContext } from '../Context/SidebarCollapseContext'; // Make sure to import the icon

import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineFile,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi"; // Import the settings icon
import CreateSequence from "./Sequence/SequencePopup";

function Sequences() {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showCreateSequence, setShowCreateSequence] = useState(false);
  const [openSectionIndex, setOpenSectionIndex] = useState(null);
  const [showFilters, setShowFilters] = useState(true);

  const emailOptions = [
    { value: "email1@example.com", label: "email1@example.com" },
    { value: "email2@example.com", label: "email2@example.com" },
    { value: "email3@example.com", label: "email3@example.com" },
  ];

  const sections = [
    {
      title: "Starred",
      icon: <MdOutlineEmail className="w-5 h-5 text-gray-700" />,
      content: (
        <Select
          options={emailOptions}
          value={selectedEmail}
          onChange={setSelectedEmail}
          placeholder="Specify email..."
        />
      ),
    },
    {
      title: "Own By",
      icon: <AiOutlineFile className="w-5 h-5 text-gray-700" />,
      content: <input 
      type="text" 
      placeholder="Enter email content here..." 
      className="border border-gray-300 p-2 rounded-md w-full" 
    />,
    },
    {
      title: "Tags",
      icon: <AiOutlineTeam className="w-5 h-5 text-gray-700" />,
      content: <input 
      type="text" 
      placeholder="Enter email content here..." 
      className="border border-gray-300 p-2 rounded-md w-full" 
    />,
    },
    {
      title: "Status",
      icon: <AiOutlineCalendar className="w-5 h-5 text-gray-700" />,
      content: <input 
      type="text" 
      placeholder="Enter email content here..." 
      className="border border-gray-300 p-2 rounded-md w-full" 
    />,
    },
    {
      title: "Performance",
      icon: <AiOutlineUser className="w-5 h-5 text-gray-700" />,
      content: <input 
      type="text" 
      placeholder="Enter email content here..." 
      className="border border-gray-300 p-2 rounded-md w-full" 
    />,
    },
    {
      title: "Folders",
      icon: <AiOutlineSearch className="w-5 h-5 text-gray-700" />,
      content: <input 
      type="file" 
      // placeholder="Enter email content here..." 
      className="border border-gray-300 p-2 rounded-md w-full" 
    />,
    },
  ];

  const toggleCreateSequencePopup = () => {
    setShowCreateSequence(!showCreateSequence);
  };

  const toggleFiltersVisibility = () => {
    setShowFilters(!showFilters);
  };

  const toggleSection = (index) => {
    setOpenSectionIndex(openSectionIndex === index ? null : index);
  };

  const isActiveNavLink = (path) => {
    return location.pathname.startsWith(path);
  };

  const { isCollapsed } = useSidebarCollapseContext();

  return (
    <>
        <div className={`fixed top-16 ${isCollapsed ? 'left-18' : 'left-64'} right-0 bg-white z-40`}>
        <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-black mt-4">Sequence</h2>
            <div className="flex gap-4 mt-6 mr-3">
              <button className="flex items-center  text-sm text-gray-600 px-3 py-2 rounded-lg hover:bg-blue-300">
                <span className="text-gray-600 px-2 rounded-md">
                  <FiSettings className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="min-h-screen" style={{ backgroundColor: "#F3F4F6" }}>
            <div className="flex">
              {/* Filters Sidebar */}
              {showFilters && (
                <div className="flex py-3 px-3" style={{ height: "42rem" }}>
                  <div className="bg-white shadow-md rounded p-4">
                    <div className="flex justify-between py-1">
                      <h3 className="font-bold">Filters</h3>
                    </div>
                    <hr />
                    <div className="text-gray-500">
                      <div className="w-64 p-4 border-r border-gray-200">
                        <div className="mb-4 relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                          <input
                            type="text"
                            className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Search..."
        
                          />
                        </div>
                        <hr />

                        {sections.map((section, index) => (
                          <div key={index} className="mb-4 border-gray-400 ">
                            <Disclosure as="div">
                              {({ open }) => (
                                <>
                                  <Disclosure.Button
                                    className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-gray-700 rounded-t-lg hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                    onClick={() => toggleSection(index)}
                                  >
                                    <div className="flex items-center space-x-2">
                                      {section.icon}
                                      <span>{section.title}</span>
                                    </div>
                                    {openSectionIndex === index ? (
                                      <ChevronUpIcon className="w-5 h-5 text-blue-500" />
                                    ) : (
                                      <ChevronDownIcon className="w-5 h-5 text-blue-500" />
                                    )}
                                  </Disclosure.Button>
                                  {openSectionIndex === index && (
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                      {section.content}
                                    </Disclosure.Panel>
                                  )}
                                  <hr className="my-2 " />
                                </>
                              )}
                            </Disclosure>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Main Content Area */}
              <div className="flex-1 p-4">
                <div className="bg-white">
                  <div className="flex items-center px-2 py-3">
                    <button
                      className="px-4 py-2 text-gray-400 border hover:text-gray-700 rounded-md"
                      onClick={toggleFiltersVisibility}
                    >
                      {showFilters ? "Hide Filters" : "Show Filters"}
                    </button>
                  </div>
                  <hr />
                  {/* + New Sequence Button */}
                  <div className="flex flex-row w-full rounded-lg bg-gray-100 shadow-md justify-between">
                    <div className="flex flex-row items-center px-4 py-2">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-indigo-600"
                      />
                      <div className="border border-gray-300 rounded-md p-2 ml-4">
                        <label className="inline-flex items-center ml-2">
                          <span className="text-gray-700 px-2">
                            <FaArrowDown className="h-5 w-5 text-gray-700 cursor-pointer" />
                          </span>
                        </label>
                        <label className="inline-flex items-center px-3">
                          <span className="text-gray-700">
                            <MdDelete className="h-5 w-5 text-gray-700 cursor-pointer" />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-row items-center px-4 py-2 space-x-2">
                      <button className="border border-gray-300 rounded-md px-3 py-1 text-gray-500 hover:text-indigo-500 hover:border-indigo-500">
                        Recently Used
                      </button>
                      <button className="border border-gray-300 rounded-md px-3 py-1 ml-2 text-gray-500 hover:text-indigo-500 hover:border-indigo-500">
                        Run diagnostics
                      </button>
                      <button
                        className="text-indigo-500 px-3 py-2 rounded-full bg-indigo-200 hover:bg-indigo-400"
                        onClick={toggleCreateSequencePopup}
                      >
                        + New Sequence
                      </button>
                    </div>
                  </div>
                  {/* Placeholder for Sequence Content */}
                  <div
                    className="flex items-center justify-center h-64 border border-dashed bg-white border-gray-300 rounded-md"
                    style={{ height: "35rem" }}
                   >
                    <div className="text-center">
                      <div className="text-2xl text-gray-500">
                        No emails here!
                      </div>
                      <div className="text-gray-400">
                        Check again later or clear any applied filters.
                      </div>
                      <button className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-md">
                        Clear filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Show Create Sequence Popup */}
            {/* {showCreateSequence && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                <CreateSequence />
                <button
                  className="absolute top-4 right-4 text-gray-900 hover:text-white"
                  onClick={toggleCreateSequencePopup}
                >
                  Close
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <div className="mt-36 ml-60">
        {" "}
        {/* Margin-top to ensure content doesn't overlap with fixed header and navbar */}
        <Outlet />
      </div>
    </>
  );
}

export default Sequences;
