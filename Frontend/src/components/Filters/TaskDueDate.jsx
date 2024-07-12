import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { GoChevronUp } from "react-icons/go";
import { IoIosCalendar } from "react-icons/io";

const TaskDueDate = ({ selectedTaskDueDate, handleTaskDueDateChange }) => {
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
        <IoIosCalendar /> <span className="-ml-36">Task Due Date</span>
        {isOpen ? <GoChevronUp /> : <IoCaretDown />}
      </label>
      {isOpen && (
        <div className="relative -mt-2 w-full bg-white border">
          <h1 className="mt-3 -mb-3 ml-5 text-sm">Select Dates</h1>
          <div className="flex flex-col m-5">
            <label className="text-sm mb-1">From:</label>
            <input
              type="date"
              className="p-1 border border-gray-200 text-sm hover:border-blue-500 hover:text-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col m-5">
            <label className="text-sm mb-1">To:</label>
            <input
              type="date"
              className="p-1 border border-gray-200 text-sm hover:border-blue-500 hover:text-blue-500 focus:outline-none"
            />
          </div>
          </div>
         )}
    </div>
  );
};

export default TaskDueDate;
