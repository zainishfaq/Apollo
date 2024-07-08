import { React, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
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

const App = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home - SpillWord";
        break;
      case "/Search":
        document.title = "Home - SpillWord";
        break;
      case "/Data_Enrichment":
        document.title = "Enrichment - SpillWord";
        break;
      case "/Sequences":
        document.title = "Engagement - SpillWord";
        break;
      case "/Email":
        document.title = "Engagement - SpillWord";
        break;
      case "/Calls":
        document.title = "Engagement - SpillWord";
        break;
      case "/Meentings":
        document.title = "Engagement - SpillWord";
        break;
      case "/Conversations":
        document.title = "Conversation - SpillWord";
        break;
      case "/Deals":
        document.title = "Conversation - SpillWord";
        break;
      case "/Tasks":
        document.title = "Engagement - SpillWord";
        break;
      case "/Plays":
        document.title = "Plays - SpillWord";
        break;
      case "/Analytics":
        document.title = "Engagement - SpillWord";
        break;
      case "/Settings":
        document.title = "You - SpillWord";
        break;
      default:
        document.title = "SpillWord";
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
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
          <Route path='Dashboard' element={<Dashboard />} />
          <Route path="Reports" element={<Reports />} />
          </Route>
        <Route path="Settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
