import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // Adjust the import path as needed
import Header from './Header';

const Layout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Header />
                <div className="flex-grow p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
