import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const UserNavbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/user"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Logo" />
            <p className="self-center text-lg md:text-xl font-semibold whitespace-nowrap dark:text-white">
              <span>Qo'qon davlat</span>
              <br />
              <span>Pedagogika instituti</span>
            </p>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="avatar cursor-pointer">
              <div className="w-12 rounded-full overflow-hidden">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="avatar" />
              </div>
            </div>
            {/* <Link
              to="/login"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              CHIQISH
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserNavbar;
