import React from 'react';
import BlackUBS3KeysLogo from "../image/logo/BlackUBS3KeysLogo.png";
import UnknownImageAvatar from "../image/UnknownImageAvatar.jpeg";

function Navbar() {
  return (
    <div>
      <nav className="font-sans font-bold text-base flex w-full items-center justify-between bg-gray-200 bg-opacity-70 py-2 shadow-lg fixed top-0 pl-10 z-50">
        <div className="flex items-center px-3">
          <a className="flex items-center" href="/">
            <img
              className="mr-4 p-2"
              src={BlackUBS3KeysLogo}
              alt="UBS White 3 Keys Logo"
              style={{ height: '50px' }}
              loading="lazy"
            />
            <span className="text-black dark:text-white">Union Bank of Switzerland</span>
          </a>
        </div>
        <div className="flex justify-end items-center px-3 pr-10">
          <ol className="flex items-center space-x-4">
            <li>
              <a href="/events" className="px-4 py-2 rounded-md text-black hover:bg-gray-300 hover:bg-opacity-40 transition duration-150 ease-in-out">
                Events
              </a>
            </li>
            <li>
              <a href="/mentorbuddy" className="px-4 py-2 rounded-md text-black hover:bg-gray-300 hover:bg-opacity-40 transition duration-150 ease-in-out">
                Mentorship
              </a>
            </li>
            <li>
              <a href="/articles" className="px-4 py-2 rounded-md text-black hover:bg-gray-300 hover:bg-opacity-40 transition duration-150 ease-in-out">
                Articles
              </a>
            </li>
            <li>
              <a href="/profile" className="px-4 py-2 rounded-md flex items-center justify-center text-white hover:bg-gray-300 hover:bg-opacity-40 transition duration-150 ease-in-out">
                <img
                  src={UnknownImageAvatar}
                  className="h-8 w-8 rounded-full"
                  alt="User Avatar"
                  loading="lazy"
                />
              </a>
            </li>
          </ol>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;