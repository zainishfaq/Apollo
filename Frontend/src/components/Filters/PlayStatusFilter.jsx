import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { GoChevronUp } from "react-icons/go";

const PlayStatusFilter = ({ selectedStatus, handleStatusChange }) => {
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
        Play status
        {isOpen ? <GoChevronUp /> : <IoCaretDown />}
      </label>
      {isOpen && (
        <div className="relative -mt-2 w-full bg-white border">
          <label className="flex items-center p-2">
            <input
              type="checkbox"
              value="Active"
              checked={selectedStatus.includes("Active")}
              onChange={handleStatusChange}
              className="mr-2"
            />
            Active
          </label>
          <label className="flex items-center p-2">
            <input
              type="checkbox"
              value="Inactive"
              checked={selectedStatus.includes("Inactive")}
              onChange={handleStatusChange}
              className="mr-2"
            />
            Inactive
          </label>
          <label className="flex items-center p-2">
            <input
              type="checkbox"
              value="Archived"
              checked={selectedStatus.includes("Archived")}
              onChange={handleStatusChange}
              className="mr-2"
            />
            Archived
          </label>
        </div>
      )}
    </div>
  );
};

export default PlayStatusFilter;
