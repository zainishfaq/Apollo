import React, { useState, useRef, useEffect } from "react";
import { useSidebarCollapseContext } from "../Context/SidebarCollapseContext";
import { IoCaretDown } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import PlayStatusFilter from "../components/Filters/PlayStatusFilter";
import OwnerFilter from "../components/Filters/OwnerFilter";
import FolderFilter from "../components/Filters/FolderFilter";
import Play from "../assets/Play.png";
import { TfiWrite } from "react-icons/tfi";

function Plays() {
  const { isCollapsed } = useSidebarCollapseContext();
  const [folders, setFolders] = useState(["All"]);
  const [newFolderName, setNewFolderName] = useState("");
  const [showCreateFolderPopup, setShowCreateFolderPopup] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState("Current User");
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [activeFilters, setActiveFilters] = useState(["status", "owner", "folder"]); // Track active filters

  const filterRef = useRef(null);

  // Close filter dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setActiveFilters([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle function for filters
  const toggleFilter = (filterName) => {
    if (activeFilters.includes(filterName)) {
      setActiveFilters(activeFilters.filter((filter) => filter !== filterName));
    } else {
      setActiveFilters([...activeFilters, filterName]);
    }
  };

  // Event handlers
  const handleCreateFolder = () => {
    if (newFolderName.trim() !== "") {
      setFolders([...folders, newFolderName.trim()]);
      setNewFolderName("");
      setShowCreateFolderPopup(false);
    }
  };

  const handleNewFolderNameChange = (event) => {
    setNewFolderName(event.target.value);
  };

  const handleFolderChange = (event, folder) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedStatus([...selectedStatus, folder]);
    } else {
      setSelectedStatus(selectedStatus.filter((selectedFolder) => selectedFolder !== folder));
    }
  };

  const handleOwnerChange = (event) => {
    setSelectedOwner(event.target.value);
  };

  const handleStatusChange = (status) => {
    // Implement your logic for handling status change here
    console.log("Status changed:", status);
  };

  return (
    <>
      <div
        className={`fixed top-16 ${
          isCollapsed ? "left-18" : "left-64"
        } right-0 bg-white z-40`}
      >
        <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-black mt-4">Plays</h2>
            <div className="flex gap-4 mt-6 mr-3">
              <button className="flex items-center bg-blue-500 text-sm text-white px-2 py-2 rounded-lg hover:bg-blue-300">
                Create Play{" "}
                <span className="text-white mt-1 ml-1 rounded-md">
                  <IoCaretDown />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed w-full ${isCollapsed ? "ml-10" : "ml-56"} mt-28 p-4`}
        ref={filterRef}
      >
        <div className="flex gap-4 h-496">
          <div className="w-1/4 bg-white border rounded-md shadow-sm overflow-y-auto">
            <h3 className="text-lg font-semibold m-3 mb-5">Filters</h3>
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Search plays..."
                className="w-full border-t-2 border-b-2 border-gray-200 p-3 pl-10 focus:outline-none"
              />
              <GoSearch className="absolute left-3 top-1/2 text-xl font-semibold transform -translate-y-1/2 text-gray-500" />
            </div>
            <PlayStatusFilter
              selectedStatus={selectedStatus}
              handleStatusChange={handleStatusChange}
              isOpen={activeFilters.includes("status")}
              toggleDropdown={() => toggleFilter("status")}
            />
            <OwnerFilter
              selectedOwner={selectedOwner}
              handleOwnerChange={handleOwnerChange}
              isOpen={activeFilters.includes("owner")}
              toggleDropdown={() => toggleFilter("owner")}
            />
            <FolderFilter
              folders={folders}
              selectedStatus={selectedStatus}
              handleFolderChange={handleFolderChange}
              handleCreateFolder={handleCreateFolder}
              handleNewFolderNameChange={handleNewFolderNameChange}
              showCreateFolderPopup={showCreateFolderPopup}
              toggleCreateFolderPopup={() => toggleFilter("folder")}
              isOpen={activeFilters.includes("folder")}
              toggleDropdown={() => toggleFilter("folder")}
            />
          </div>

          <div
            className={`w-3/4 bg-gray-100 border rounded-md shadow-sm ${
              isCollapsed ? "mr-16" : "mr-60"
            } overflow-y-auto`}
          >
            <div className={`bg-white flex items-center justify-between p-4 border-b border-gray-200 fixed top-36 rounded-sm ml-0 ${isCollapsed ? "w-[963px]": "w-[832px]" } mr-1 z-50`}>
              <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 bg-gray-400 p-2" />
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  <button className="flex items-center text-gray-400   bg-white border border-black text-sm  px-2 py-1 rounded-lg hover:bg-gray-300">
                    <TfiWrite />
                  </button>
                  <button className="bg-white flex justify-center items-center text-sm border border-black text-gray-400 px-4 py-2 rounded-md hover:bg-gray-300">
                    Last Modified
                     <IoCaretDown className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 mt-16"> {/* Adjust margin-top to ensure content is below fixed navbar */}
              <div className="flex flex-col justify-between items-center mb-4">
                <h3 className="text-xl font-semibold mx-56 mt-20 mb-4">
                  Meet plays: the easy way to get more done—with less manual effort
                </h3>
                <p className="text-sm text-center mx-36 mb-4">
                  From reaching out to newly funded companies to getting ahead of renewals, plays can automate key revenue-driving activities.
                </p>
                <button className="bg-white px-16 py-1 text-sm rounded-md shadow-md border border-black">
                  See all play templates
                </button>
              </div>
              <div className="flex justify-center mt-10">
                <img
                  src={Play}
                  alt="Data Template"
                  className="h-[300px] w-[550px] rounded-lg shadow-lg z-50"
                />
              </div>
            </div>

            <div>

            </div>
          </div>
        </div>
      </div>

      {showCreateFolderPopup && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-md shadow-lg w-1/3">
            <h3 className="text-lg font-semibold mb-2">Create Folder</h3>
            <input
              type="text"
              value={newFolderName}
              onChange={handleNewFolderNameChange}
              placeholder="Folder name"
              className="w-full p-2 border rounded-md mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setShowCreateFolderPopup(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateFolder}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-400"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Plays;
