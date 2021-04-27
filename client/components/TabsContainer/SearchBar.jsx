import React from "react";

//Search bar for shopping list
//No functionality at this time
export const SearchBar = () => {
  return (
    <>
      <div className="mt-1 flex w-3/5 rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img
              className="submit"
              src="client/media/pictures/search-icon-png-4-original.png"
              alt="Search"
              width="21"
              height="17"
            ></img>
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
            placeholder="Find an Item"
          />
        </div>
        <button className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
          <span>Search</span>
        </button>
      </div>
    </>
  );
};
