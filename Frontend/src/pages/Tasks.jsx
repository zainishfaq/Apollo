import React from 'react'
//import { FaFilter, FaTasks, FaCalendarAlt, FaUser, FaStar } from 'react-icons/fa';
import { FaPlay, FaClock, FaUser, FaChevronDown, FaEllipsisV } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import TaskStatus from '../components/Filters/TaskStatus';
import { GoSearch } from 'react-icons/go';
import TaskAssociation from '../components/Filters/TaskAssociation';
import TaskAssignee from '../components/Filters/TaskAssignee';
import TaskDueDate from '../components/Filters/TaskDueDate';
import Sequences from '../components/Filters/Sequences';
import TaskPriority from '../components/Filters/TaskPriority';
import TaskCreatedFrom from '../components/Filters/TaskCreatedFrom';
import TaskStarred from '../components/Filters/TaskStarred';

function Tasks() {
 

  return (
    <>
    <div className="fixed top-16 left-64 right-0 bg-white z-40"> {/* Position fixed for the navigation bar */}
    <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-4">
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium text-black mt-4">Tasks</h2>
            <button style={{ width: '100px', height: '30px' }} className="bg-blue-700 text-white rounded-md p-1 text-sm mt-5 mr-4">Create Task</button>
        </div>
        
    </div>
    </div>


    <div className="flex h-screen ml-56 mt-24">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className='flex justify-between items-center'>
            <h2 className="text-lg font-semibold">Filters</h2>
            <button className='text-sm text-gray-600'>Save</button>
          </div>
         
        </div>
        <div className="flex-grow overflow-y-auto p-0 pt-0">
        <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full border-b-2 border-gray-200 p-3 pl-10 focus:outline-none"
              />
              <GoSearch className="absolute left-3 top-1/2 text-xl font-semibold transform -translate-y-1/2 text-gray-500" />
            </div>
          {/* Task Status */}
          <div>
            <TaskStatus/>
          </div>

          {/* Task Association */}
          <div>
           <TaskAssociation/>
          </div>

          {/* Task Assignee */}
          <div>
          <TaskAssignee/>
          </div>

          {/* Task Due Date */}
          <div>
          <TaskDueDate/>
          </div>

          {/* Scores */}
          <div>
          <TaskStatus/>
          </div>

          {/* Additional Fields */}
          <div>
          <Sequences/>
          </div>

          <div> 
          <TaskPriority/>
          </div>

          <div>
          <TaskCreatedFrom/>
          </div>

          <div>
          <TaskStarred/>
          </div>

          <div>
          <TaskStatus/>
          </div>

          <div>
          <TaskStatus/>
          </div> 

          <div>
          <TaskStatus/>
          </div>

          <div>
          <TaskStatus/>
          </div>

          <div>
          <TaskStatus/>
          </div>

          <div>
          <TaskStatus/>
          </div>
        </div> 
        {/* Fixed More Filters Button */}
        <div className="p-4 border-t border-gray-200 bg-white sticky bottom-0">
          <button className="w-full bg-blue-600 text-white py-2 rounded">More Filters</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white p-4">
        <div className="flex items-center mb-4">
          <button className="flex text-sm w-28 h-8 items-center bg-white text-black border border-black p-2 rounded">
            <FaSearch className="mr-2" />
            Hide Filters
          </button>
            <button className='bg-blue-100 w-24 h-12 m-0 p-0 ml-2'> <span>0</span><br/>Total</button>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <div className='flex flex-row'>
          <input
                type="checkbox"
                id="dropdownCheckbox"
                className="p-2 pt-0"
            />
            <div className='ml-14 mt-1'>
              <button className='border border-gray-400 p-2'><FaPlay className=" text-sm text-gray-400" /></button>
              <button className='border border-gray-400 p-2'><FaClock className=" text-sm text-gray-400" /></button>
              <button className='border border-gray-400 p-2'><FaUser className=" text-sm text-gray-400" /></button>
              <button className='border border-gray-400 p-2'><FaChevronDown className=" text-sm text-gray-400"/></button>
              <button className='border border-gray-400 p-2'> <FaEllipsisV className=" text-sm text-gray-400" /></button>
              
            </div>
            <button className='ml-96 mt-1 w-32 h-8 border border-gray-400'>
              Due Date
            </button>
            <button className='border border-gray-400 p-2 h-8 mt-1'><FaClock className=" text-sm text-gray-400" />
            </button>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span>Task</span>
            <span>Associated with</span>
            <span>Due Date</span>
            <span>Priority</span>
            <span>Owners</span>
          </div>
          <div className="text-center py-8">
            <div className="flex flex-col items-center justify-center">
              <FaSearch className="text-5xl text-blue-500 mb-4" />
              <p className="text-lg">You've completed all your tasks for today! Check again later for any updates.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
</>
  )
}

export default Tasks;