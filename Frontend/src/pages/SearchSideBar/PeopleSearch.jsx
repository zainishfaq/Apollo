import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/solid"; // Make sure to import the icon
import {
  MdEmail,
  MdList,
  MdDateRange,
  MdError,
  MdBusiness,
  MdOutlineFilterList,
} from "react-icons/md";
import {
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineFile,
  AiOutlineSearch,
  AiOutlineFundProjectionScreen,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import EmailTemplatePopUp from "./EmailTemplate"; // Import the popup component
import { MdFilterListOff } from "react-icons/md";
import TotalSearchEmail from "./TotalEmail";
import ScheduleSearchEmail from "./ScheduleEmail";
import NetNewEmail from "./NetNewEmail";

function PeopleSearch() {
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [emailList, setEmailList] = useState([]);

  const [selectedEmail, setSelectedEmail] = useState(null);
  const [boolean, setBoolean] = useState(null); // Initial state for component rendering
  const [newBoolean, setNewBoolean] = useState(false); // Initial state for additional component rendering

  // const emailOptions = [
  //   { value: "email1@example.com", label: "email1@example.com" },
  //   { value: "email2@example.com", label: "email2@example.com" },
  //   { value: "email3@example.com", label: "email3@example.com" },
  // ];

  const handleClick = (component) => {
    if (component === "Unlock" || component === "Bounces") {
      setNewBoolean(true); // Set newBoolean to true for Unlock and Bounces
    } else {
      setNewBoolean(false); // Reset newBoolean to false for other components
    }
    setBoolean(component); // Sets boolean to the component name (string)
  }; // Update initial state
  const [filter, setFilter] = useState({
    Listname: "",
    industry: "",
    country: "",
    city: "",
    name: "",
    timezone: "",
    totalYearsOfExperience: "",
    timeInCurrentRole: "",
    sequence: "",
    lastActivity: "",
    emailSent: "",
    emailClicked: "",
    emailReplied: "",
    emailMeetingSet: "",
    emailBounced: "",
    list: "",
    emailStatus: "",
    notSentReason: "",
    company: "",
    location: "",
    buyingIntent: "",
  });
  const [filterOptions, setFilterOptions] = useState({
    lists: [],
    emailStatusOptions: [],
    notSentReasonOptions: [],
    companies: [],
    countries: [],
    industries: [],
    locations: [],
    buyingIntents: [],
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Manage popup state
  const [savedCompanies, setSavedCompanies] = useState([]); // State for saved companies
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const emailOptions = [
    { value: "email1@example.com", label: "Email 1" },
    { value: "email2@example.com", label: "Email 2" },
    { value: "email3@example.com", label: "Email 3" },
  ];

  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const [
          listsRes,
          emailStatusRes,
          notSentReasonRes,
          companiesRes,
          countryRes,
          industryRes,
          locationRes,
          buyingIntentRes,
        ] = await Promise.all([
          axios.get("http://localhost:3000/getemail", {
            params: { company: filter.company },
          }),
          axios.get("http://localhost:3000/email-status"),
          axios.get("http://localhost:3000/not-sent-reasons"),
          axios.get("http://localhost:3000/unique-companies"),
          axios.get("http://localhost:3000/getmail", {
            params: { industry: filter.industry },
          }),
          axios.get("http://localhost:3000/locations"),
          axios.get("http://localhost:3000/buying-intents"),
        ]);

        setFilterOptions({
          lists: listsRes.data,
          emailStatusOptions: emailStatusRes.data,
          notSentReasonOptions: notSentReasonRes.data,
          companies: companiesRes.data.map((company) => ({
            value: company,
            label: company,
          })),
          countries: countryRes.data.map((country) => ({
            value: country,
            label: country,
          })),
          industries: industryRes.data.map((industry) => ({
            value: industry,
            label: industry,
          })),
          locations: locationRes.data.map((location) => ({
            value: location,
            label: location,
          })),
          buyingIntents: buyingIntentRes.data.map((intent) => ({
            value: intent,
            label: intent,
          })),
        });
      } catch (error) {
        console.error("Error fetching filter options:", error);
      }
    };

    fetchFilterOptions();
  }, [filter.company, filter.industry]);

  const fetchData = async () => {
    try {
      const { company, Listname, ...restFilters } = filter;
      const response = await axios.get("http://localhost:3000/getemail", {
        params: {
          company: company,
          Listname: Listname,
          ...restFilters,
        },
      });
      console.log("getmail", response.data);
      setEmailList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  const handleFilterChange = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };

  const toggleSelectEmail = (email) => {
    setSelectedEmails((prevSelected) => {
      if (prevSelected.includes(email)) {
        return prevSelected.filter((e) => e !== email);
      } else {
        return [...prevSelected, email];
      }
    });
  };

  const handleSendClick = () => {
    if (selectedEmails.length > 0) {
      setIsPopupOpen(true); // Open the popup
    } else {
      alert("Please select at least one email to send.");
    }
  };

  const handleSaveClick = () => {
    const savedCompany = {
      company: filter.company,
      filters: { ...filter },
    };
    setSavedCompanies((prev) => [...prev, savedCompany]);
  };

  const sections = [
    {
      title: "From Email",
      icon: <MdEmail className="mr-2" />,
      content: (
        <Select
          options={[{ value: "", label: "Select email..." }, ...emailOptions]}
          value={selectedEmails.map((email) => ({
            value: email,
            label: email,
          }))}
          isMulti
          onChange={(selectedOptions) => {
            const selectedEmails = selectedOptions.map(
              (option) => option.value
            );
            setSelectedEmails(selectedEmails);
            handleFilterChange("emailSent", selectedEmails.join(","));
          }}
          placeholder="Specify email..."
        />
      ),
      filterKey: "emailSent",
    },
    {
      title: "Lists",
      icon: <MdList className="mr-2" />,
      content: (
        <Select
          options={filterOptions.lists.map((l) => ({ value: l, label: l }))}
          value={filter.list}
          onChange={(selectedOption) =>
            handleFilterChange("list", selectedOption?.value || "")
          }
          placeholder="Select list..."
        />
      ),
      filterKey: "list",
    },
    {
      title: "Country",
      icon: <MdDateRange className="mr-2" />,
      content: (
        <Select
          options={filterOptions.countries}
          value={filter.country}
          onChange={(selectedOption) =>
            handleFilterChange("country", selectedOption?.value || "")
          }
          placeholder="Select country..."
        />
      ),
      filterKey: "country",
    },
    {
      title: "Industry",
      icon: <MdError className="mr-2" />,
      content: (
        <Select
          options={filterOptions.industries}
          value={filter.industry}
          onChange={(selectedOption) =>
            handleFilterChange("industry", selectedOption?.value || "")
          }
          placeholder="Select industry..."
        />
      ),
      filterKey: "industry",
    },
    {
      title: "Companies",
      icon: <MdBusiness className="mr-2" />,
      content: (
        <Select
          options={filterOptions.companies}
          value={filter.company}
          onChange={(selectedOption) =>
            handleFilterChange("company", selectedOption?.value || "")
          }
          placeholder="Type to search companies..."
          onInputChange={(inputValue) =>
            handleFilterChange("company", inputValue)
          }
        />
      ),
      filterKey: "company",
    },
    {
      title: "Location",
      icon: <MdBusiness className="mr-2" />,
      content: (
        <Select
          options={filterOptions.locations}
          value={filter.location}
          onChange={(selectedOption) =>
            handleFilterChange("location", selectedOption?.value || "")
          }
          placeholder="Select location..."
        />
      ),
      filterKey: "location",
    },
    {
      title: "Buying Intent",
      icon: <MdBusiness className="mr-2" />,
      content: (
        <Select
          options={filterOptions.buyingIntents}
          value={filter.buyingIntent}
          onChange={(selectedOption) =>
            handleFilterChange("buyingIntent", selectedOption?.value || "")
          }
          placeholder="Select buying intent..."
        />
      ),
      filterKey: "buyingIntent",
    },
    {
      title: "Industry & Keywords",
      icon: <MdOutlineFilterList className="mr-2" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter industry & keywords..."
          value={filter.Listname}
          onChange={(e) => handleFilterChange("Listname", e.target.value)}
        />
      ),
      filterKey: "Listname",
    },
    {
      title: "Scores",
      icon: <AiOutlineSearch className="mr-2" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter scores..."
          value={filter.emailReplied}
          onChange={(e) => handleFilterChange("emailReplied", e.target.value)}
        />
      ),
      filterKey: "emailReplied",
    },
    {
      title: "Technologies",
      icon: <AiOutlineFile className="mr-2" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter technologies..."
          value={filter.totalYearsOfExperience}
          onChange={(e) =>
            handleFilterChange("totalYearsOfExperience", e.target.value)
          }
        />
      ),
      filterKey: "totalYearsOfExperience",
    },
    {
      title: "Revenue",
      icon: <AiOutlineDollarCircle className="mr-2" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter revenue..."
          value={filter.emailMeetingSet}
          onChange={(e) =>
            handleFilterChange("emailMeetingSet", e.target.value)
          }
        />
      ),
      filterKey: "emailMeetingSet",
    },
    {
      title: "Funding",
      icon: <AiOutlineFundProjectionScreen className="mr-2" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter funding..."
          value={filter.emailClicked}
          onChange={(e) => handleFilterChange("emailClicked", e.target.value)}
        />
      ),
      filterKey: "emailClicked",
    },
    {
      title: "Job Postings",
      icon: <AiOutlineCalendar className="mr-2" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter job postings..."
          value={filter.emailBounced}
          onChange={(e) => handleFilterChange("emailBounced", e.target.value)}
        />
      ),
      filterKey: "emailBounced",
    },
    {
      title: "Signals",
      icon: <AiOutlineTeam className="mr-2" />,
      content: (
        <input
          type="text"
          className="w-full px-2 py-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter signals..."
          value={filter.emailStatus}
          onChange={(e) => handleFilterChange("emailStatus", e.target.value)}
        />
      ),
      filterKey: "emailStatus",
    },
  ];

  const [filterVisible, setFilterVisible] = useState(true); // State for filter visibility

  // Your useEffect and other functions remain unchanged

  const toggleFilterVisibility = () => {
    setFilterVisible(!filterVisible); // Toggle visibility state
  };

  return (
    <>
      <div className=" bg-gray-100 flex">
        {filterVisible && (
          <div className="w-1/4 bg-white shadow-md p-4 mx-4 my-6 rounded overflow-y-auto max-h-screen">
            <div className="flex  mb-4">
              <button
                className="px-4 py-2 text-gray-600 rounded-md font-semibold hover:bg-blue-200"
                onClick={handleSaveClick}
              >
                Search
              </button>

              <button
                className="px-4 py-2  text-gray-600 rounded-md font-semibold hover:bg-blue-200"
                onClick={handleSaveClick}
              >
                Saved Search
              </button>
            </div>
            <hr className="py-1"></hr>
            <div className="mb-4 relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <hr />
            <div className="px-2 py-2">
              <h1 className="font-bold text-lg mb-4">Filters</h1>
              <hr />
            </div>

            <div className="overflow-y-auto max-h-96">
              {sections.map((section, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex justify-between w-full py-2 px-4 text-sm font-medium text-left text-blue-900 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <div className="flex items-center">
                          {section.icon}
                          <span>{section.title}</span>
                        </div>
                        {open ? (
                          <ChevronUpIcon className="w-5 h-5 text-blue-500" />
                        ) : (
                          <ChevronDownIcon className="w-5 h-5 text-blue-500" />
                        )}
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-2 pb-4 text-sm text-gray-500">
                        <div className="max-h-24 overflow-y-auto">
                          {section.content}
                        </div>
                      </Disclosure.Panel>
                      <hr className="my-2" />
                    </>
                  )}
                </Disclosure>
              ))}
            </div>

            <div className="py-8">
              <button
                className="px-11 mx-9  py-2 bg-green-200 text-white rounded-md font-semibold hover:bg-green-600"
                onClick={handleSaveClick}
              >
                Save Search
              </button>
            </div>
          </div>
        )}

        {/* <div className="flex-1 p-4">
          <div className="flex justify-end mb-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
              onClick={handleSendClick}
            >
              Send Email
            </button>
          </div>
          <div className="bg-white rounded-md border border-gray-300 p-4">
            {emailList.length === 0 ? (
              <div className="text-center text-gray-500">No emails found.</div>
            ) : (
              <ul className="divide-y divide-gray-200">
                {emailList.map((email, index) => (
                  <li key={email._id} className="py-2 flex items-center">
                    <input
                      key={email._id}
                      type="checkbox"
                      className="mr-2"
                      checked={selectedEmails.includes(email._id)}
                      onChange={() => toggleSelectEmail(email._id)}
                    />
                    <div className="flex-1">
                      {email.Listname}: {email.email}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div> */}

        <div className="flex-1 p-4">
          <div className="bg-white">
            <div className="flex items-center mb-4">
              <div className="flex ">
                <div className="py-2 px-2">
                  <button
                    className="px-4 py-2 text-black bg-transparent rounded-md flex hover:bg-gray-200 border border-gray-300"
                    onClick={toggleFilterVisibility}
                  >
                    {filterVisible ? (
                      <>
                        <MdFilterListOff className="inline-block mr-2" />
                        Hide Filters
                      </>
                    ) : (
                      <>
                        <MdFilterListOff className="inline-block mr-2" />
                        Show Filters
                      </>
                    )}
                  </button>
                </div>
                <div className="flex space-x-4 px-6">
                  <button
                    className="px-4 py-2 rounded-md hover:bg-blue-200"
                    onClick={() => handleClick("Total")}
                  >
                    Total
                  </button>
                  <button
                    className="px-4 py-2 rounded-md hover:bg-blue-200"
                    onClick={() => handleClick("Scheduled")}
                  >
                    Net New
                  </button>
                  <button
                    className="px-4 py-2 rounded-md hover:bg-blue-200"
                    onClick={() => handleClick("NetEmail")}
                  >
                    Schedule
                  </button>
                </div>
              </div>
              <div className="flex items-center ml-auto space-x-2">
                {/* Icons can be replaced with actual SVGs or icon components */}
                <span className="mx-2 px-2 text-gray-700 hover:text-gray-900 cursor-pointer">
                  🔗
                </span>{" "}
                |
                <span className="mx:2  px-2 text:gray:700 hover:text:gray:900 cursor:pointer rounded-full bg-blue:500 text:white p:2">
                  👤
                </span>{" "}
                |
                <span className="mx-2 px-2 text-gray-700 hover:text-gray-900 cursor-pointer">
                  🔔
                </span>
              </div>
            </div>

            <hr />

            {/* Render components based on boolean and newBoolean state */}
            <div>
              {boolean === "Total" ? (
                <TotalSearchEmail />
              ) : boolean === "Scheduled" ? (
                <ScheduleSearchEmail />
              ) : boolean === "NetEmail" ? (
                <NetNewEmail />
              ) : (
                <p>No content selected.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Render the popup component if open */}
      {isPopupOpen && (
        <EmailTemplatePopUp
          selectedEmails={selectedEmails.map((emailId) => {
            const selectedEmail = emailList.find(
              (email) => email._id === emailId
            );
            return {
              value: selectedEmail.email, // Assuming you want to use the email address as value and label
              label: selectedEmail.email,
            };
          })}
          userEmailAddress={filter.name}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </>
  );
}

export default PeopleSearch;
