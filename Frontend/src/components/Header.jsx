import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
    return (
        <div className="flex items-center justify-end bg-white  py-4 border-b border-gray-200">
            <div className="flex items-center text-md">
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <i className="fas fa-search text-gray-500"></i>
                    </span>
                    <input
                        type="text"
                        placeholder="Search SpillWord"
                        className="pl-8 border border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-4 ml-2 mr-2">
                <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
                    Upgrade
                </button>
                <i className="fas fa-puzzle-piece text-gray-600"></i>
                <i className="fas fa-phone text-gray-600"></i>
                <i className="fas fa-bell text-gray-600"></i>
                <i className="fas fa-user-circle text-gray-600"></i>
            </div>
        </div>
    );
};

export default Header;
