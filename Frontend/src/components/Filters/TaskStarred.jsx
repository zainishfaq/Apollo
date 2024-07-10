import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { GoChevronUp } from "react-icons/go";
import { IoIosVideocam } from "react-icons/io";

const TaskStarred = ({ selectedTaskStarred, handleTaskStarredChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 relative">
      <label
        onClick={toggleDropdown}
        className="cursor-pointer text-sm font-medium mb-1 w-full -mt-4 border-b-2 border-gray-200 p-3 pl-4 focus:outline-none flex justify-between items-center hover:bg-gray-300 hover:text-blue-500"
      >
        <IoIosVideocam /> <span className="-ml-36">TaskStarred</span>
        {isOpen ? <GoChevronUp /> : <IoCaretDown />}
      </label>
      {isOpen && (
        
        <div className="relative -mt-2 w-full bg-white border">
            
          <h1 className="mt-6 -mb-3 ml-5 text-sm"></h1>
          <div className="ml-5 mb-2">
          <span>Starred</span>
            <label className="inline-flex items-center text-sm">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600 ml-44 mt-1"
              />
              
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskStarred;
