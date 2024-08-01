import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const UserNavbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-lg">
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
          <div className="avatar cursor-pointer relative">
            <div
              className="w-12 rounded-full overflow-hidden"
              onClick={handleClick}
            >
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="avatar"
              />
            </div>
            <ul
              className={`absolute shadow-lg bg-white py-2 z-[1000] w-max rounded-lg p-3 right-0 ${
                open ? "block" : "hidden"
              }`}
            >
              <li>Palonchiyev Pistonchi</li>
              <li>
                <Link to="/login" className="">
                  Chiqish
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
