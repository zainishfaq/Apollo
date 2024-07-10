import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { GoChevronUp } from "react-icons/go";

const PlayStatusFilter = ({ selectedStatus, handleStatusChange, isOpen, toggleDropdown }) => {
  const [isCheckedActive, setIsCheckedActive] = useState(selectedStatus.includes("Active"));
  const [isCheckedInactive, setIsCheckedInactive] = useState(selectedStatus.includes("Inactive"));
  const [isCheckedArchived, setIsCheckedArchived] = useState(selectedStatus.includes("Archived"));

  const handleActiveChange = () => {
    const newActiveStatus = !isCheckedActive;
    setIsCheckedActive(newActiveStatus);
    handleStatusChange("Active", newActiveStatus);
  };

  const handleInactiveChange = () => {
    const newInactiveStatus = !isCheckedInactive;
    setIsCheckedInactive(newInactiveStatus);
    handleStatusChange("Inactive", newInactiveStatus);
  };

  const handleArchivedChange = () => {
    const newArchivedStatus = !isCheckedArchived;
    setIsCheckedArchived(newArchivedStatus);
    handleStatusChange("Archived", newArchivedStatus);
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
              checked={isCheckedActive}
              onChange={handleActiveChange}
              className="mr-2"
            />
            Active
          </label>
          <label className="flex items-center p-2">
            <input
              type="checkbox"
              value="Inactive"
              checked={isCheckedInactive}
              onChange={handleInactiveChange}
              className="mr-2"
            />
            Inactive
          </label>
          <label className="flex items-center p-2">
            <input
              type="checkbox"
              value="Archived"
              checked={isCheckedArchived}
              onChange={handleArchivedChange}
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
