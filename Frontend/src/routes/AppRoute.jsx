import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Data_Enrichment from "../components/DataEnrichment";
import Search from "../pages/Search";
import Sequences from "../pages/Sequences";
import Email from "../pages/Email";
import Calls from "../pages/Calls";
import Meetings from "../pages/Meetings";
import Conversations from "../pages/Conversations";
import Deals from "../pages/Deals";
import Tasks from "../pages/Tasks";
import Plays from "../pages/Plays";
import Settings from "../pages/Settings";
import DataHealthCenter from "../pages/DataEnrichment/DataHealthCenter";
import CRM from "../pages/DataEnrichment/CRM";
import CSV from "../pages/DataEnrichment/CSV";
import JobChangesAlert from "../pages/DataEnrichment/JobChangesAlert";
import Analytics from "../components/Analytics";
import Dashboard from "../pages/Analytics/Dashboard";
import Reports from "../pages/Analytics/Reports";
import RecentReplies from "../pages/Home/RecentReplies";
import RecommendedProspects from "../pages/Home/RecommendedProspects";
import MessageOptimization from "../pages/Home/MessageOptimization";
import Alerts from "../pages/Home/Alerts";
import Task from "../pages/Home/Task";

const AppRoute = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home - SpillWord";
        break;
      case "/Search":
        document.title = "Search - SpillWord";
        break;
      case "/Data_Enrichment":
        document.title = "Data Enrichment - SpillWord";
        break;
      case "/Sequences":
        document.title = "Sequences - SpillWord";
        break;
      case "/Email":
        document.title = "Email - SpillWord";
        break;
      case "/Calls":
        document.title = "Calls - SpillWord";
        break;
      case "/Meetings":
        document.title = "Meetings - SpillWord";
        break;
      case "/Conversations":
        document.title = "Conversations - SpillWord";
        break;
      case "/Deals":
        document.title = "Deals - SpillWord";
        break;
      case "/Tasks":
        document.title = "Tasks - SpillWord";
        break;
      case "/Plays":
        document.title = "Plays - SpillWord";
        break;
      case "/Analytics":
        document.title = "Analytics - SpillWord";
        break;
      case "/Settings":
        document.title = "Settings - SpillWord";
        break;
      default:
        document.title = "SpillWord";
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="Home/RecentReplies" />} />
        <Route path="Home" element={<Home />}>
          <Route index element={<RecentReplies />} />
          <Route path="RecentReplies" element={<RecentReplies />} />
          <Route path="RecommendedProspects" element={<RecommendedProspects />} />
          <Route path="MessageOptimization" element={<MessageOptimization />} />
          <Route path="Task" element={<Task />} />
          <Route path="Alerts" element={<Alerts />} />
        </Route>
        <Route path="Data_Enrichment" element={<Data_Enrichment />}>
          <Route index element={<DataHealthCenter />} />
          <Route path="DataHealthCenter" element={<DataHealthCenter />} />
          <Route path="CRM" element={<CRM />} />
          <Route path="CSV" element={<CSV />} />
          <Route path="JobChangeAlerts" element={<JobChangesAlert />} />
        </Route>
        <Route path="Search" element={<Search />} />
        <Route path="Sequences" element={<Sequences />} />
        <Route path="Email" element={<Email />} />
        <Route path="Calls" element={<Calls />} />
        <Route path="Meetings" element={<Meetings />} />
        <Route path="Conversations" element={<Conversations />} />
        <Route path="Deals" element={<Deals />} />
        <Route path="Tasks" element={<Tasks />} />
        <Route path="Plays" element={<Plays />} />
        <Route path="Analytics" element={<Analytics />}>
          <Route index element={<Dashboard />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Reports" element={<Reports />} />
        </Route>
        <Route path="Settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
