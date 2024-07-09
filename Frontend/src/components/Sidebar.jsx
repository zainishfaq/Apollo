import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LuPanelLeftClose } from "react-icons/lu";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { LuHome, LuSearch } from "react-icons/lu";
import { TbSend2 } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegCalendar } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";
import { RiTaskLine } from "react-icons/ri";
import { BsLightningCharge } from "react-icons/bs";
import { VscGraph } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import SpillWord from "../assets/spillword icons.png";
import { useSidebarCollapseContext } from '../Context/SidebarCollapseContext';

const Sidebar = () => {
    const { isCollapsed, toggleSidebar } = useSidebarCollapseContext();
    const ICON_SIZE = "1.25rem";
    const location = useLocation();


    const Divider = () => (
        isCollapsed && <div className="border-t border-gray-200 my-2 mx-2"></div>
    );

    return (
        <div className={`fixed top-0 left-0 h-full flex flex-col bg-white border-r border-gray-200 ${isCollapsed ? 'w-14' : 'w-60'}`}>
            <div className={`flex items-center justify-between px-4 ${isCollapsed ? 'h-10' : 'h-14'}`}>
                <img src={SpillWord} alt="Logo" className={`h-8 w-28 mt-2 rounded-lg ${isCollapsed ? 'hidden' : ''}`} />
                <button onClick={toggleSidebar} className="text-gray-500">
                    <LuPanelLeftClose className='text-black mt-2' style={{ width: "1.5rem", height: "1.5rem" }} />
                </button>
            </div>
            <Divider />
            <ul className={`flex flex-col mt-3 gap-y-1 flex-grow overflow-y-auto ${isCollapsed ? 'h-full' : 'scrollbar'}`}>
                <NavLink to='/Home/RecentReplies' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 px-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/' ? 'bg-blue-100' : ''}`}>
                        <LuHome className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Home</span>
                    </li>
                </NavLink>

                <Divider />

                {!isCollapsed && (
                    <li className="px-6 py-2 text-gray-400 font-semibold">
                        <span className="text-sm">Prospect & Enrich</span>
                    </li>
                )}
                <NavLink to='/Search' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Search' ? 'bg-blue-100' : ''}`}>
                        <LuSearch className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Search</span>
                    </li>
                </NavLink>
                <NavLink to='/Data_Enrichment/DataHealthCenter' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Data_Enrichment' ? 'bg-blue-100' : ''}`}>
                        <PiArrowsCounterClockwiseBold className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Data enrichment</span>
                    </li>
                </NavLink>

                <Divider />

                {!isCollapsed && (
                    <li className="px-6 py-2 text-gray-400 font-semibold">
                        <span className="text-sm">Engage</span>
                    </li>
                )}
                <NavLink to='/Sequences' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Sequences' ? 'bg-blue-100' : ''}`}>
                        <TbSend2 className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Sequences</span>
                    </li>
                </NavLink>
                <NavLink to='/Email' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Email' ? 'bg-blue-100' : ''}`}>
                        <MdMailOutline className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Emails</span>
                    </li>
                </NavLink>
                <NavLink to='/Calls' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Calls' ? 'bg-blue-100' : ''}`}>
                        <FiPhoneCall className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Calls</span>
                    </li>
                </NavLink>

                <Divider />

                {!isCollapsed && (
                    <li className="px-6 py-2 text-gray-400 font-semibold">
                        <span className="text-sm">Win & Close</span>
                    </li>
                )}
                <NavLink to='/Meetings' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Meetings' ? 'bg-blue-100' : ''}`}>
                        <FaRegCalendar className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Meetings</span>
                    </li>
                </NavLink>
                <NavLink to='/Conversations' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Conversations' ? 'bg-blue-100' : ''}`}>
                        <FiMessageCircle className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Conversations</span>
                    </li>
                </NavLink>
                <NavLink to='/Deals' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Deals' ? 'bg-blue-100' : ''}`}>
                        <BsCurrencyDollar className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Deals</span>
                    </li>
                </NavLink>

                <Divider />

                {!isCollapsed && (
                    <li className="px-6 py-2 text-gray-400 font-semibold">
                        <span className="text-sm">Tools & Workflows</span>
                    </li>
                )}
                <NavLink to='/Tasks' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Tasks' ? 'bg-blue-100' : ''}`}>
                        <RiTaskLine className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Tasks</span>
                    </li>
                </NavLink>
                <NavLink to='/Plays' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Plays' ? 'bg-blue-100' : ''}`}>
                        <BsLightningCharge className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Plays</span>
                    </li>
                </NavLink>
                <NavLink to='/Analytics/Dashboard' className="flex items-center">
                    <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer w-full ${location.pathname === '/Analytics' ? 'bg-blue-100' : ''}`}>
                        <VscGraph className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                        <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Analytics</span>
                    </li>
                </NavLink>
            </ul>
            <NavLink to='/Settings' className="flex items-center">
                <li className={`px-${isCollapsed ? '4' : '6'} py-2 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer border-t border-gray-200 w-full ${location.pathname === '/Settings' ? 'bg-blue-100' : ''}`}>
                    <IoSettingsOutline className="text-gray-600 mr-3" style={{ width: ICON_SIZE, height: ICON_SIZE, minWidth: ICON_SIZE }} />
                    <span className={`transition-all duration-300 text-sm font-semibold ${isCollapsed ? 'hidden' : ''}`}>Settings</span>
                </li>
            </NavLink>
        </div>
    );
};

export default Sidebar;

