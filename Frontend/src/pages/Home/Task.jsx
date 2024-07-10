import { NavLink, Outlet, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Select from "react-select";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { MdOutlineEmail } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineFile,
  AiOutlineSearch,
} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useSidebarCollapseContext } from "../../Context/SidebarCollapseContext";


function Task() {
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
      title: "Task due date ",
      icon: <MdOutlineEmail className="w-5 h-5 text-blue-500" />,
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
      title: "Sequences",
      icon: <AiOutlineFile className="w-5 h-5 text-blue-500" />,
      content: <p>Sequence content here...</p>,
    },
    {
      title: "Task Priority",
      icon: <AiOutlineTeam className="w-5 h-5 text-blue-500" />,
      content: <p>Contact list content here...</p>,
    },
    {
      title: "Email Opened",
      icon: <AiOutlineCalendar className="w-5 h-5 text-blue-500" />,
      content: <p>Date range content here...</p>,
    },
    {
      title: "Phone/Confidence",
      icon: <AiOutlineUser className="w-5 h-5 text-blue-500" />,
      content: <p>Not sent reason content here...</p>,
    },
    {
      title: "Company",
      icon: <AiOutlineSearch className="w-5 h-5 text-blue-500" />,
      content: <p>Email opened content here...</p>,
    },
    {
      title: "Persona",
      icon: <AiOutlineSearch className="w-5 h-5 text-blue-500" />,
      content: <p>Email opened content here...</p>,
    },
    {
      title: "Time zone",
      icon: <AiOutlineSearch className="w-5 h-5 text-blue-500" />,
      content: <p>Email opened content here...</p>,
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
      <div className={`top-30 ${isCollapsed ? "-ml-44" : "ml-4"} ${isCollapsed ? "mr-2" : "mr-5"} right-0 bg-white z-40`}>
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
                        <div className="mb-4 border border-gray-300 rounded-md">
                          <input
                            type="text"
                            placeholder="Search Emails..."
                            className="w-full px-3 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                          />
                        </div>
                        {sections.map((section, index) => (
                          <div
                            key={index}
                            className="mb-4 border border-gray-300 rounded-md"
                          >
                            <Disclosure as="div">
                              {({ open }) => (
                                <>
                                  <Disclosure.Button
                                    className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 rounded-t-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
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
                      className="px-4 py-2 text-black bg-gray-200 rounded-md"
                      onClick={toggleFiltersVisibility}
                    >
                      {showFilters ? "Hide Filters" : "Show Filters"}
                    </button>
                  </div>
                  <hr />
                  {/* + New Sequence Button */}
                  <div className="flex flex-row w-full rounded-lg bg-gray-100 shadow-md justify-between">
                    <div className="flex items-center space-x-4 p-2 border border-gray-300 rounded-md">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 hover:bg-gray-500 rounded">
                          <i className="fas fa-square text-gray-400"></i>
                        </button>
                        <button className="p-1 hover:bg-gray-500 rounded">
                          <i className="fas fa-clock text-gray-400"></i>
                        </button>
                        <button className="p-1 hover:bg-gray-500 rounded">
                          <i className="fas fa-envelope text-gray-400"></i>
                        </button>
                        <button className="p-1 hover:bg-gray-500 rounded">
                          <i className="fas fa-trash text-gray-400"></i>
                        </button>
                        <button className="p-1 hover:bg-gray-500 rounded">
                          <i className="fas fa-play text-gray-400"></i>
                        </button>
                        <button className="p-1 hover:bg-gray-500 rounded">
                          <i className="fas fa-redo text-gray-400"></i>
                        </button>
                        <button className="p-1 hover:bg-gray-500 rounded">
                          <i className="fas fa-ellipsis-h text-gray-400"></i>
                        </button>
                      </div>
                      
                    </div>

                    <div className="flex flex-row items-center px-4 py-2 space-x-2">
                      <button className="border border-gray-300 rounded-md px-3 py-1 text-gray-500 hover:text-indigo-500 hover:border-indigo-500">
                        Task Status
                      </button>
                      
                      <button
                        className="text-indigo-500 px-3 py-2  text-white bg-indigo-300 hover:bg-indigo-500"
                        onClick={toggleCreateSequencePopup}
                      >
                        New Task
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
            {showCreateSequence && (
              <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                <CreateSequence />
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={toggleCreateSequencePopup}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
