import React from 'react';
import WhiteUBSLogoWithName from "../image/logo/WhiteUBSLogoWithName.png"

const Footer = () => {
  return (
    <footer className="bg-black shadow dark:bg-black">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://www.ubs.com/hk/en/wealth-management.html" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={WhiteUBSLogoWithName} className="h-12" alt="UBS Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-base  font-medium text-white sm:mb-0 dark:text-white">
            <li>
              <a href="#" className="px-4 py-2 rounded-md text-white transition duration-150 ease-in-out hover:bg-light-grey hover:bg-opacity-40">About</a>
            </li>
            <li>
              <a href="#" className="px-4 py-2 rounded-md text-white transition duration-150 ease-in-out hover:bg-light-grey hover:bg-opacity-40">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="px-4 py-2 rounded-md text-white transition duration-150 ease-in-out hover:bg-light-grey hover:bg-opacity-40">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 UBS. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;