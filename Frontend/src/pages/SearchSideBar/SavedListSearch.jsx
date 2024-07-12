import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useSidebarCollapseContext } from '../../Context/SidebarCollapseContext';


function SavedListSearch() {
  const { isCollapsed } = useSidebarCollapseContext();
  const people = [
    {
      name: "fff",
      lastModified: "2024-06-26 3:49 pm",
      owner: "Uxama",
      records: 0,
    },
  ];
  return (
    <>
      <div className={`container mx-auto px-4 ${isCollapsed? "-ml-44": "ml-2"} py-2 ${isCollapsed? "w-[2000px]": "w-[1100px]"}`}>
        <div className="flex items-center space-x-4 p-2 border border-gray-300 rounded-md bg-white justify-between">
          <div className="flex">
            <div>
              <p className="">Show</p>
            </div>
            <div className="px-4 ">
              <select className="p-1 border border-gray-300 rounded-md">
                <option>People</option>
                <option>Companies</option>
              </select>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <AiOutlineUser className="h-5 w-5 text-gray-500" />
              </span>
              <input
                type="text"
                className="pl-8 pr-2 py-1 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:border-grey-500"
                placeholder="Your placeholder text"
              />
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700">
              New List
            </button>
          </div>
        </div>

        <div className="border  border-gray-200 rounded-lg">
          <div className="flex flex-row border-b border-gray-200 bg-gray-100">
            <div className="w-1/5 text-sm font-bold py-2 px-4">Name</div>
            <div className="w-1/5 text-sm font-bold py-2 px-4">
              Last Modified
            </div>
            <div className="w-1/5 text-sm font-bold py-2 px-4">Owner</div>
            <div className="w-1/5 text-sm font-bold py-2 px-4">Records</div>
            <div className="w-1/5 text-sm font-bold py-2 px-4">Actions</div>
          </div>
          {people.map((person) => (
            <div
              key={person.name}
              className="flex flex-row border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="w-1/5 text-sm py-2 px-4">{person.name}</div>
              <div className="w-1/5 text-sm py-2 px-4">
                {person.lastModified}
              </div>
              <div className="w-1/5 text-sm py-2 px-4">{person.owner}</div>
              <div className="w-1/5 text-sm py-2 px-4">{person.records}</div>
              <div className="w-1/5 text-sm py-2 px-4">
                <button className="text-blue-500 hover:underline">
                  ► Add to Sequence
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SavedListSearch;
