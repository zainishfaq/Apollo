import React from 'react'
import { useSidebarCollapseContext } from '../../Context/SidebarCollapseContext';

function RecentReplies() {
    const { isCollapsed } = useSidebarCollapseContext();
  return (
    <div className={`mt-5 ${isCollapsed ? "-ml-44" : "ml-5"} ${isCollapsed ? "mr-2" : "mr-5"}`}>
        <h1 className='text-xl font-semibold'>RecentReplies</h1>
    </div>
    
  )
}

export default RecentReplies