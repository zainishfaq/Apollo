import React from "react";
import RecentReplies from "./RecentReplies";
import Alerts from "./alerts";
import MessageOptimization from "./MessageOptimization";
import RecommendProspect from "./RecommendProspect";
import Task from "./TaskAlert";

function homeIndex({ option }) {
  return (
    <>
      <div>
        {option == "recentReplies" && <RecentReplies />}
        {option == "alerts" && <Alerts />}
        {option == "messageOptimization" && <MessageOptimization />}
        {option == "recommendprospect" && <RecommendProspect />}
        {option == "task" && <Task />}
      </div>
    </>
  );
}

export default homeIndex;
