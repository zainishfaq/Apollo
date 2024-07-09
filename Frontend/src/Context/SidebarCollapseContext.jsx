import React, { createContext, useContext, useState } from 'react';

const SidebarCollapseContext = createContext();

export const useSidebarCollapseContext = () => {
    return useContext(SidebarCollapseContext);
};

export const SidebarCollapseProvider = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <SidebarCollapseContext.Provider value={{ isCollapsed, toggleSidebar }}>
            {children}
        </SidebarCollapseContext.Provider>
    );
};
