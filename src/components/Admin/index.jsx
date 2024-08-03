import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import controlImg from "../../assets/control.png";
import logo from "../../assets/logo.png";
import analitikaImg from "../../assets/Chart.png";
import talabaImg from "../../assets/graduate.png";
import shartnomaImg from "../../assets/contract.png";
import Exit from "../../assets/icons/exit.svg"

const AdminDashboard = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const Menus = [
    { title: "Analitika", src: analitikaImg, link: "/admin/analitika" },
    { title: "Talabalar", src: talabaImg, link: "/admin/talabalar" },
    {
      title: "Shartnoma olganlar",
      src: shartnomaImg,
      link: "/admin/shartnoma-olganlar",
    },
  ];

  return (
    <div className="flex">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src={controlImg}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
          alt="icon"
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt="icon"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Qo'qon davlat <br /> Pedagogika instituti
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index}>
              <Link
                to={Menu.link}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"} ${
                  location.pathname === Menu.link && "bg-light-white"
                }`}
              >
                <img src={Menu.src} alt="icon" width={24} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute left-5 bottom-2">
        <Link
          to="/login"
          className="flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4"
        >
          <img src={Exit} alt="icon" width={24} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            CHIQISH
          </span>
        </Link>
      </div>
      <div className="h-screen flex-1 p-7 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
