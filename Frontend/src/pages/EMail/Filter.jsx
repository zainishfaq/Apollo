import React, { useState } from "react";
import Select from "react-select";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { MdOutlineEmail } from "react-icons/md";
import { CiSliderVertical } from "react-icons/ci";

import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineFile,
  AiOutlineSearch,
} from "react-icons/ai";

import TotalEmail from "./TotalEmail";
import ScheduleEmail from "./ScheduleEmail";
import DeliveredEmail from "./DeliveredEmail";
import UnlockEmail from "./UnlockEmail";
import BouncesEmail from "./BouncesEmail";

function FilterTemplate() {
  const [boolean, setBoolean] = useState(null);
  const [newBoolean, setNewBoolean] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [openSectionIndex, setOpenSectionIndex] = useState(null);
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [contentWidth, setContentWidth] = useState("lg:w-[65rem]"); // Initial width

  const emailOptions = [
    { value: "email1@example.com", label: "email1@example.com" },
    { value: "email2@example.com", label: "email2@example.com" },
    { value: "email3@example.com", label: "email3@example.com" },
  ];

  const handleClick = (component) => {
    if (component === "Unlock" || component === "Bounces") {
      setNewBoolean(true);
    } else {
      setNewBoolean(false);
    }
    setBoolean(component);
  };

  const toggleSection = (index) => {
    setOpenSectionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const sections = [
    {
      title: "From Email",
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
      title: "Sequences",
      icon: <AiOutlineFile className="w-5 h-5 text-gray-700" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter sequence..."
        />
      ),
    },
    {
      title: "Contact Lists",
      icon: <AiOutlineTeam className="w-5 h-5 text-gray-700" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter Contact Lists..."
        />
      ),
    },
    {
      title: "Date Range",
      icon: <AiOutlineCalendar className="w-5 h-5 text-gray-700" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter date range..."
        />
      ),
    },
    {
      title: "Not Sent Reason",
      icon: <AiOutlineUser className="w-5 h-5 text-gray-700" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Not Sent Reason"
        />
      ),
    },
    {
      title: "Email Opened",
      icon: <AiOutlineSearch className="w-5 h-5 text-gray-700" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Email Opened"
        />
      ),
    },
  ];

  const handleToggleFilters = () => {
    setFiltersVisible((prevVisible) => !prevVisible);
    // Adjust content width based on visibility
    setContentWidth((prevWidth) =>
      prevWidth === "lg:w-[65rem]" ? "w-full" : "lg:w-[65rem]"
    );
  };

  return (
    <div className="flex py-3 px-3" style={{ height: "36rem" }}>
      {filtersVisible && (
        <div className="bg-white shadow-md rounded p-4">
          <div className="flex justify-between py-1">
            <h3 className="font-bold">Filters</h3>
            <div className="flex space-x-0.5">
              <button className="text-blue-500">Load</button>
              <p>|</p>
              <button className="text-blue-500">Save</button>
            </div>
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
                  className="mb-6 border border-gray-300 rounded-md "
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-left text-gray-700 rounded-t-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
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
                  </button>
                  {openSectionIndex === index && (
                    <div className="px-4 pt-4 pb-2 text-sm text-gray-500">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={`mx-auto ${contentWidth}`}>
        <div className="flex-1 p-4">
          <div className="bg-white">
            <div className="flex flex-wrap items-center mb-4">
              <div className="py-2 px-2">
                <button
                  className="px-4 py-2  text-gray-500  hover:text-gray-900 border rounded-md flex items-center"
                  onClick={handleToggleFilters}
                >
                  <CiSliderVertical />
                  <span className="px-2">
                    {filtersVisible ? "Hide Filters" : "Show Filters"}
                  </span>
                </button>
              </div>
              <div className="flex flex-wrap space-x-4 px-6">
                <button
                  className="px-4 py-2 rounded-md hover:bg-blue-200"
                  onClick={() => handleClick("Total")}
                >
                  Total
                </button>
                <button
                  className="px-4 py-2 rounded-md hover:bg-blue-200"
                  onClick={() => handleClick("Scheduled")}
                >
                  Scheduled
                </button>
                <button
                  className="px-4 py-2 rounded-md hover:bg-blue-200"
                  onClick={() => handleClick("Delivered")}
                >
                  Delivered
                </button>
                <button
                  className="px-4 py-2 rounded-md hover:bg-blue-200"
                  onClick={() => handleClick("Unlock")}
                >
                  Unlock
                </button>
                <button
                  className="px-4 py-2 rounded-md hover:bg-blue-200"
                  onClick={() => handleClick("Bounces")}
                >
                  Bounces
                </button>
              </div>
            </div>
            <hr />
            <div>
              {boolean === "Total" ? (
                <TotalEmail />
              ) : boolean === "Scheduled" ? (
                <ScheduleEmail />
              ) : boolean === "Delivered" ? (
                <DeliveredEmail />
              ) : boolean === "Unlock" && newBoolean ? (
                <UnlockEmail />
              ) : boolean === "Bounces" && newBoolean ? (
                <BouncesEmail />
              ) : (
                <p>No content selected.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterTemplate;
