import React from 'react';
import WhiteUBSLogoWithName from "../image/logo/WhiteUBSLogoWithName.png";

const Footer = () => {
  return (
    <footer className="bg-black shadow">
      <div className="w-full max-w-screen-xl px-6 py-8 mx-auto text-white">
        <div className="flex flex-wrap justify-between items-center">
          <a href="https://www.ubs.com/hk/en/wealth-management.html" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4 space-x-3 sm:mb-0">
            <img src={WhiteUBSLogoWithName} className="h-12" alt="UBS Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-base font-medium sm:mb-0">
            <li>
              <a href="https://www.ubs.com/global/en/legal/info-on-ubs.html" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md transition duration-150 ease-in-out hover:bg-gray-700">About</a>
            </li>
            <li>
              <a href="https://www.ubs.com/global/en/legal/privacy.html" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md transition duration-150 ease-in-out hover:bg-gray-700">Privacy Policy</a>
            </li>
            <li>
              <a href="https://www.ubs.com/global/en/media/contact.html" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md transition duration-150 ease-in-out hover:bg-gray-700">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700" />
        <span className="block text-sm text-center text-gray-400">
          © 2023 UBS. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;