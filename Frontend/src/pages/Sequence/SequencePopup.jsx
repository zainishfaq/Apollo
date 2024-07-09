import React from "react";

const CreateSequence = () => {
  return (
    <>
      <div className="container bg-grey-400 mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Create a sequence</h1>
          <button className="text-blue-500 hover:underline">
            Learn more about sequences
          </button>
        </div>
        <div className="flex flex-col space-y-4 mt-4">
          <div className=" flex flex-row">
            <div className="bg-gray-100 p-4 mx-2 rounded-md shadow-md">
              <h2 className="text-xl font-bold">
                Create a simple outbound sequence with one click
              </h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4">
                Start with a template
              </button>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <h2 className="text-xl font-bold">
                Clone one of your existing sequences
              </h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4">
                Clone
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-bold">
              Create a new sequence from scratch
            </h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4">
              Create from scratch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateSequence;
