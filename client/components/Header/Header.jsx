import React from "react";

export const Header = () => {
  return (
    <div className="relative bg-gray-200">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <a href="#" className="flex">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="client/media/pictures/shopping-bag-pngrepo-com.png"
              alt=""
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <nav className="flex flex-row items-center space-x-10 ">
            <div className="text-4xl text-yellow-500">Bodega</div>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Profile
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Settings
            </a>
          </nav>
          <div className="flex items-center md:ml-12">
            <a
              href="#"
              className="text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-700 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
