import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { GoChevronUp } from "react-icons/go";
import { MdGridView } from "react-icons/md";
const TaskAssociation = ({ selectedTaskAssociation, handleTaskAssociationChange }) => {
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
        <MdGridView className="mr-8"/>  <span className="-ml-36">Task Association</span>
        {isOpen ? <GoChevronUp /> : <IoCaretDown />}
      </label>
      {isOpen && (
        <div className="relative -mt-2 w-full bg-white border">
          <h1 className="mt-3 -mb-3 ml-5 text-sm"></h1>
          <select className="w-60 p-0 border border-gray-200 m-5 text-sm hover:border-blue-500 hover:text-blue-500 focus:outline-none">
            <option value="">Contacts</option>
            <option value="">Accounts</option>
            <option value="">Deals</option>
            </select>
        </div>
      )}
    </div>
  );
};

export default TaskAssociation;