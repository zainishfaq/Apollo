import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { RiPuzzleLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className="fixed top-0 left-60 right-0 flex items-center justify-end bg-white py-2 border-b border-gray-200 z-50">
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
            <div className="flex items-center space-x-4 ml-4 mr-2">
                <button className="px-3 py-1 bg-blue-500 text-white rounded-md">
                    Upgrade
                </button>
                <RiPuzzleLine className="text-xl text-gray-600 cursor-pointer"/>
                <FiPhoneCall className="text-xl text-gray-600 cursor-pointer"/>
                <GrNotification className="text-xl text-gray-600 cursor-pointer"/>
                <CgProfile className="text-2xl text-gray-600 cursor-pointer"/>
            </div>
        </div>
    );
};

export default Header;
