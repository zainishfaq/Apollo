import React, { useState } from "react";
import { useSidebarCollapseContext } from "../Context/SidebarCollapseContext";
import { IoCaretDown } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import PlayStatusFilter from "../components/Filters/PlayStatusFilter";
import OwnerFilter from "../components/Filters/OwnerFilter";
import FolderFilter from "../components/Filters/FolderFilter";

function Plays() {
  const { isCollapsed } = useSidebarCollapseContext();
  const [folders, setFolders] = useState(["All"]);
  const [newFolderName, setNewFolderName] = useState("");
  const [showCreateFolderPopup, setShowCreateFolderPopup] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState("Current User");
  const [selectedStatus, setSelectedStatus] = useState([]);

  // Toggle functions
  const toggleCreateFolderPopup = () => {
    setShowCreateFolderPopup(!showCreateFolderPopup);
  };

  const toggleFolderFilter = () => {
    setShowFolderFilter(!showFolderFilter);
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
              <button className="flex items-center bg-blue-500 text-sm text-white px-3 py-2 rounded-lg hover:bg-blue-300">
                Create Play{" "}
                <span className="mr-1 text-white mt-1 ml-3 rounded-md">
                  <IoCaretDown />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isCollapsed ? "ml-14" : "ml-56"} mt-32 mb-0 p-4`}>
        <div className="flex gap-4">
          <div className="w-1/4 bg-white border rounded-md shadow-sm">
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
              handleStatusChange={handleStatusChange} // Pass handleStatusChange here
            />
            <OwnerFilter
              selectedOwner={selectedOwner}
              handleOwnerChange={handleOwnerChange}
            />
            <FolderFilter
              folders={folders}
              selectedStatus={selectedStatus}
              handleFolderChange={handleFolderChange}
              handleCreateFolder={handleCreateFolder}
              handleNewFolderNameChange={handleNewFolderNameChange}
              showCreateFolderPopup={showCreateFolderPopup}
              toggleCreateFolderPopup={toggleCreateFolderPopup}
            />
          </div>
          <div className="flex-1 bg-white p-4 border rounded-md shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Meet plays: the easy way to get more done—with less manual effort
            </h3>
            <p className="mb-4">
              From reaching out to newly funded companies to getting ahead of
              renewals, plays can automate key revenue-driving activities.
            </p>
            <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
              See all play templates
            </button>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded-md">
                <h4 className="text-sm font-medium mb-2">
                  Ask happy customers for reviews
                </h4>
                <p className="text-sm mb-2">
                  Request reviews from happy customers on sites like G2
                  Crowd—helps book demos and close deals!
                </p>
                <button className="text-blue-500 hover:underline">
                  View play
                </button>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h4 className="text-sm font-medium mb-2">
                  Automatically hit no-shows
                </h4>
                <p className="text-sm mb-2">
                  When a prospect doesn’t show up to a meeting, add them to a
                  sequence to keep the meeting on the books.
                </p>
                <button className="text-blue-500 hover:underline">
                  View play
                </button>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h4 className="text-sm font-medium mb-2">
                  End sequence for outdated contacts
                </h4>
                <p className="text-sm mb-2">
                  When stale contact info is identified, those people from
                  sequences to keep deliverability up.
                </p>
                <button className="text-blue-500 hover:underline">
                  View play
                </button>
              </div>
              <div className="bg-gray-100 p-4 rounded-md">
                <h4 className="text-sm font-medium mb-2">
                  Hit recently funded companies
                </h4>
                <p className="text-sm mb-2">
                  Reach out to people at companies in your target account list
                  as soon as they announce new funding.
                </p>
                <button className="text-blue-500 hover:underline">
                  View play
                </button>
              </div>
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
                onClick={toggleCreateFolderPopup}
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
