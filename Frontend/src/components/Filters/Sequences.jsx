import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { GoChevronUp } from "react-icons/go";
import { IoIosVideocam } from "react-icons/io";

const Sequences = ({ selectedSequences, handleSequencesChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleAdvancedDropdown = () => {
    setIsAdvancedOpen(!isAdvancedOpen);
  };

  return (
    <div className="mb-4 relative">
      <label
        onClick={toggleDropdown}
        className=" text-sm font-medium mb-1 w-full -mt-4 border-b-2 border-gray-200 p-3 pl-4 focus:outline-none flex justify-between items-center hover:bg-gray-300 hover:text-blue-500"
      >
        <IoIosVideocam className="text-sm" />{" "}
        <span className="-ml-36">Sequences</span>
        {isOpen ? <GoChevronUp className="text-sm" /> : <IoCaretDown className="text-sm" />}
      </label>
      {isOpen && (
        <div className="relative -mt-2 w-full bg-white border">
          <h1
            onClick={toggleAdvancedDropdown}
            className="mt-3 -mb-3 ml-5 text-sm"
          >
            Include Sequences
            <select className="w-60 p-2 border border-gray-200 ml-2 text-sm hover:border-blue-500 hover:text-blue-500 focus:outline-none">
              <option value="">In any sequence</option>
              <option value="">Test1</option>
              <option value="">Test2</option>
            </select>
            {isAdvancedOpen ? <GoChevronUp className="text-sm" /> : ""}
          </h1>
          {isAdvancedOpen && (
            <div className="relative w-full bg-white border">
              <h1 className="mt-3 -mb-3 ml-5 text-sm">Exclude Sequences</h1>
              <select className="w-60 p-2 border border-gray-200 m-5 text-sm hover:border-blue-500 hover:text-blue-500 focus:outline-none">
                <option value="">Test1</option>
                <option value="">Test2</option>
                <option value="">Test3</option>
              </select>
            </div>
          )}
          <button
            onClick={toggleAdvancedDropdown}
            className="text-blue-500 text-sm mt-4 ml-5 focus:outline-none"
          >
            {isAdvancedOpen ? "Hide Advanced" : "Show Advanced"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Sequences;
