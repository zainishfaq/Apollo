import React from 'react'
import { useSidebarCollapseContext } from '../../Context/SidebarCollapseContext';

function RecentReplies() {
    const { isCollapsed } = useSidebarCollapseContext();
  return (
    <div className={`${isCollapsed ? "-ml-44" : "ml-5"} mt-auto`}>RecentReplies</div>
  )
}

export default RecentReplies