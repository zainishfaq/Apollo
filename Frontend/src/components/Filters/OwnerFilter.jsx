import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { GoChevronUp } from "react-icons/go";

const OwnerFilter = ({ selectedOwner, handleOwnerChange }) => {
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
        Owner
        {isOpen ? <GoChevronUp /> : <IoCaretDown />}
      </label>
      {isOpen && (
        <div className="relative -mt-2 w-full bg-white border">
          <h1 className="mt-5 -mb-3 ml-5 text-sm">Specify Owner</h1>
          <input
            type="text"
            value={selectedOwner}
            onChange={handleOwnerChange}
            className="w-52 p-1 border border-gray-200 m-5 text-sm hover:border-blue-500 hover:text-blue-500 focus:outline-none"
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default OwnerFilter;
