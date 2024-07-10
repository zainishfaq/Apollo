import React, { useState } from "react";
import { IoCaretDown } from "react-icons/io5";
import { GoChevronUp } from "react-icons/go";
import { FaRegFolderOpen } from "react-icons/fa";

const FolderFilter = ({ folders, selectedStatus, handleFolderChange, handleCreateFolder, handleNewFolderNameChange, showCreateFolderPopup, toggleCreateFolderPopup }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-0 relative">
      <label
        onClick={toggleDropdown}
        className="cursor-pointer text-sm font-medium mb-1 w-full -mt-4 border-b-2 border-gray-200 p-3 pl-4 focus:outline-none flex justify-between items-center hover:bg-gray-300 hover:text-blue-500"
      >
        Folders
        {isOpen ? <GoChevronUp /> : <IoCaretDown />}
      </label>
      {isOpen && (
        <div className="relative -mt-2 w-full bg-white border">
          {folders.map((folder, index) => (
            <div key={index} className="flex items-center p-2">
              <input
                type="checkbox"
                value={folder}
                checked={selectedStatus.includes(folder)}
                onChange={(event) => handleFolderChange(event, folder)}
                className="mr-2"
              />
              {folder}
            </div>
          ))}
          <div className="flex items-center p-2 cursor-pointer text-blue-500 hover:bg-gray-300 " onClick={toggleCreateFolderPopup}>
          <FaRegFolderOpen className="mr-3"/> Add Folder
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderFilter;
