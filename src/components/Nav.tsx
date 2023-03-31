import React, { useContext, useEffect, useState } from "react";

import logoDark from "../assets/logo-white.png";
import logoLight from "../assets/logo-black.png";

import menuIconDark from "../assets/icons/menu-white.svg";
import menuIconLight from "../assets/icons/menu-black.svg";

import themeIconDark from "../assets/icons/sun.svg";
import themeIconLight from "../assets/icons/moon.svg";

import favLight from "../assets/icons/star-black.svg";
import favDark from "../assets/icons/star-white.svg";

import { AppContext } from "../App";
import { Link, NavLink } from "react-router-dom";
type navPropsType = {
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Nav({ setIsDark }: navPropsType) {
  const [isOpen, setIsOpen] = useState(false);
  let { isDark }: any = useContext(AppContext);
  return (
    <nav className=" p-4 px-6  flex justify-between items-center w-full relative lg:w-2/3 m-auto font-semibold">
      <div className="flex items-center gap-2">
        <img
          src={isDark ? logoDark : logoLight}
          className="w-8 h-10 lg:h-12 lg:w-10"
        />
        <h1 className="text-xl lg:text-2xl comf font-bold">CryptoWatch</h1>
      </div>

      {/* //dropdown menu */}
      <div onClick={() => setIsOpen(!isOpen)}>
        <img
          src={isDark ? menuIconDark : menuIconLight}
          className="cursor-pointer lg:hidden"
        />
        <ul
          className={`${
            isOpen ? "visible" : "hidden"
          }  dark:bg-slate-900 bg-slate-200 absolute px-20 py-4 space-y-4 text-lg bottom-0 top-full left-0 w-screen h-fit transition-all`}
        >
          <li>
            <NavLink to={"/"}>Coins</NavLink>
          </li>
          <li>
            <NavLink to={"/exchanges"}>Exchanges</NavLink>
          </li>

          <li className="flex gap-3">
            <img src={isDark ? favDark : favLight} alt="" />
            <img
              className="cursor-pointer"
              onClick={() => setIsDark(!isDark)}
              src={isDark ? themeIconDark : themeIconLight}
              alt=""
            />
          </li>
        </ul>
      </div>

      {/* large menu */}
      <ul className="hidden lg:flex gap-7 text-lg items-center justify-around">
        <li>
          <NavLink to={"/"}>Coins</NavLink>
        </li>
        <li>
          <NavLink to={"/exchanges"}>Exchanges</NavLink>
        </li>

        <li className="flex gap-3">
          <img src={isDark ? favDark : favLight} alt="" />
          <img
            className="cursor-pointer"
            onClick={() => setIsDark(!isDark)}
            src={isDark ? themeIconDark : themeIconLight}
            alt=""
          />
        </li>
      </ul>
    </nav>
  );
}
