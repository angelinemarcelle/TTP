import React from 'react';
import White3KeysLogo from "../image/logo/White3KeysLogo.png";
import UnknownImageAvatar from "../image/UnknownImageAvatar.jpeg"

function Navbar() {
  return (
    <div className="bg-black min-h-screen">
      <nav className="font-sans font-bold text-base relative flex w-full items-center justify-between bg-gray-200 bg-opacity-20 py-2 shadow-dark-mild lg:py-4">
        <div className="flex items-center px-3">
          <a className="flex items-center" href="#">
            <img
              className="mr-2"
              src={White3KeysLogo}
              style={{ height: '45px' }}
              alt="UBS White 3 Keys Logo"
              loading="lazy"
            />
            <span className="text-black dark:text-white">Union Bank of Switzerland</span>
          </a>
        </div>
        <div className="flex justify-end items-center px-3">
          <ol className="flex items-center text-gray-800 dark:text-white">
            <li>
              <a href="/events" className="px-4 py-2 rounded-md text-white transition duration-150 ease-in-out hover:bg-light-grey hover:bg-opacity-40">
                Events
              </a>
            </li>
            <li>
              <a href="/mentorship" className="px-4 py-2 rounded-md text-white transition duration-150 ease-in-out hover:bg-light-grey hover:bg-opacity-40">
                Mentorship
              </a>
            </li>
            <li>
              <a href="/articles" className="px-4 py-2 rounded-md text-white transition duration-150 ease-in-out hover:bg-light-grey hover:bg-opacity-40">
                Articles
              </a>
            </li>
            <li>
              <a href="/profile" className="px-4 py-2 rounded-md flex items-center justify-center text-white transition duration-150 ease-in-out hover:bg-light-grey hover:bg-opacity-40">
                <img
                  src={UnknownImageAvatar}
                  className="rounded-full"
                  style={{ height: '30px', width: '30px' }}
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