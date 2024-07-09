import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useSidebarCollapseContext } from '../Context/SidebarCollapseContext';

function Data_Enrichment() {
    const location = useLocation();
    const { isCollapsed } = useSidebarCollapseContext();

    // Function to determine if a NavLink should be active
    const isActiveNavLink = (path) => {
        return location.pathname.startsWith(path);

    };

    const getButtonText = () => {
        if (isActiveNavLink('/Data_Enrichment/DataHealthCenter')) {
            return 'Schedule enrichment';
        }else
        return 'Create Dashboard';
    };

    return (
        <>
            <div className={`fixed top-16 ${isCollapsed ? 'left-18' : 'left-64'} right-0 bg-white z-40`}> {/* Position fixed for the navigation bar */}
                <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b border-gray-200 px-4">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-medium text-black mt-4">Data Enrichments</h2>
                        <div className="flex gap-4 mt-6 mr-3">
                            <button className="text-sm bg-gray-200 hover:bg-gray-400 px-2 py-2 rounded-lg">Account Segment</button>
                            <button className="flex items-center bg-blue-500 text-sm text-white px-2 py-2 rounded-lg hover:bg-blue-300">
                                Schedule enrichment
                                <span className="ml-2 bg-white text-black px-2 rounded-md">0</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-2xl font-medium bg-white text-black -mt-4 -mr-4 -ml-4 border-b p-3 border-gray-200 px-4">
                    <ul className="flex flex-row text-sm gap-4">
                        <li>
                            <NavLink
                                to="/Data_Enrichment/DataHealthCenter"
                                className={`text-black-600 ${isActiveNavLink('/Data_Enrichment/DataHealthCenter') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
                            >
                                Data Health Center
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Data_Enrichment/CRM"
                                className={`text-black-600 ${isActiveNavLink('/Data_Enrichment/CRM') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
                            >
                                CRM
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Data_Enrichment/CSV"
                                className={`text-black-600 ${isActiveNavLink('/Data_Enrichment/CSV') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
                            >
                                CSV
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Data_Enrichment/JobChangeAlerts"
                                className={`text-black-600 ${isActiveNavLink('/Data_Enrichment/JobChangeAlerts') ? 'bg-blue-100' : ''} hover:bg-gray-300 rounded-md p-1`}
                            >
                                Job Change Alerts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-36 ml-60"> {/* Margin-top to ensure content doesn't overlap with fixed header and navbar */}
                <Outlet />
            </div>
        </>
    );
}

export default Data_Enrichment;
