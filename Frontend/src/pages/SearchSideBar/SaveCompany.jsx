import React from 'react'

function SaveCompany() {
  return (
   <>
   <div className="w-1/4 bg-white shadow-md p-4 mx-4 my-6 rounded overflow-y-auto max-h-screen">
          <h3 className="font-bold text-lg mb-4">Saved Companies</h3>
          {savedCompanies.length === 0 ? (
            <div className="text-center text-gray-500">
              No saved companies.
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {savedCompanies.map((savedCompany, index) => (
                <li key={index} className="py-2">
                  <div className="font-bold">{savedCompany.company}</div>
                  <ul className="ml-4 text-sm text-gray-600">
                    {Object.entries(savedCompany.filters).map(
                      ([key, value], idx) => (
                        <li key={idx} className="flex justify-between">
                          <span>{key}:</span>
                          <span>{value}</span>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
   </>
  )
}

export default SaveCompany