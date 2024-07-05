import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-56'}`}>
            <div className={`flex items-center justify-between  border-b border-gray-200 px-4 ${isCollapsed ? 'h-16' : 'h-20'}`} >
                <img src="/path-to-your-logo.png" alt="Logo" className={`h-10 w-10 transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`} />
                <button onClick={toggleSidebar} className="text-gray-500">
                    <i className={`fas ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
                </button>
            </div>
            <ul className="flex flex-col py-4 flex-grow overflow-y-auto">
                <NavLink to='/'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-home mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Home</span>
                    </li>
                </NavLink>
                <li className="px-6 py-2 text-gray-500 font-bold">
                    <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Prospect & Enrich</span>
                </li>
                <NavLink to='/Search'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-search mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Search</span>
                    </li>
                </NavLink>
                <NavLink to='/Data_Enrichment'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-database mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Data enrichment</span>
                    </li>
                </NavLink>
                <li className="px-6 py-2 text-gray-500 font-bold">
                    <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Engage</span>
                </li>
                <NavLink to='/Sequences'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-sync-alt mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Sequences</span>
                    </li>
                </NavLink>
                <NavLink to='/Email'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-envelope mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Emails</span>
                    </li>
                </NavLink>
                <NavLink to='/Calls'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-phone mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Calls</span>
                    </li>
                </NavLink>
                <li className="px-6 py-2 text-gray-500 font-bold">
                    <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Win & Close</span>
                </li>
                <NavLink to='/Meetings'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-calendar-alt mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Meetings</span>
                    </li>
                </NavLink>
                <NavLink to='/Conversations'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-comments mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Conversations</span>
                    </li>
                </NavLink>
                <NavLink to='/Deals'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-handshake mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Deals</span>
                    </li>
                </NavLink>
                <li className="px-6 py-2 text-gray-500 font-bold">
                    <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Tools & Workflows</span>
                </li>
                <NavLink to='/Tasks'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-tasks mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Tasks</span>
                    </li>
                </NavLink>
                <NavLink to='/Plays'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-play mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Plays</span>
                    </li>
                </NavLink>
                <NavLink to='/Analytics'>
                    <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer">
                        <i className="fas fa-chart-bar mr-3"></i>
                        <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Analytics</span>
                    </li>
                </NavLink>
            </ul>
            <NavLink to='/Settings'>
                <li className="px-6 py-2 hover:bg-gray-200 flex items-center cursor-pointer border-t border-gray-200">
                    <i className="fas fa-cog mr-3"></i>
                    <span className={`transition-all duration-300 ${isCollapsed ? 'hidden' : ''}`}>Settings</span>
                </li>
            </NavLink>
        </div>
    );
};

export default Sidebar;
