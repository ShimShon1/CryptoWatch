import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo-white.png";
import menuIconWhite from "../assets/icons/menu-white.svg";

import { AppContext } from "../App";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  let { light } = useContext(AppContext);

  console.log(light);

  return (
    <nav className="p-4 px-6 bg-slate-950  flex justify-between items-center w-full relative">
      <div className="flex items-center gap-2">
        <img src={Logo} className="w-8 h-10" />
        <span className="text-xl font-semibold">CryptoWatch</span>
      </div>

      <div onClick={() => setIsOpen(!isOpen)}>
        <img src={menuIconWhite} className="cursor-pointer" />
        <ul
          className={`${
            isOpen ? "visible" : "hidden"
          }  ${"bg-slate-900"} absolute px-20 py-4 space-y-3 text-lg bottom-0 top-full left-0 w-screen h-fit transition-all`}
        >
          <li>Coins</li>
          <li>Exchanges</li>
          <li>Fav</li>
          <li>Theme</li>
        </ul>
      </div>
    </nav>
  );
}
