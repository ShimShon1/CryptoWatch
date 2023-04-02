import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import searchIcon from "../assets/icons/search.svg";
type SearchBarPropsType = {
  displayPage: (num?: number, arr?: object[]) => void;
};
export default function SearchBar({ displayPage }: SearchBarPropsType) {
  const [searchText, setSearchText] = useState("");
  const appContext = useContext(AppContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
    let search = e.target.value.toLowerCase();
    let filteredArr = appContext?.coinsList.filter((coin: any) => {
      let name = coin.name.substring(0, search.length).toLowerCase();
      return search === name;
    });
    filteredArr &&
      (filteredArr?.length >= 50
        ? displayPage(50, filteredArr)
        : displayPage(filteredArr?.length, filteredArr));
  }
  return (
    <label className="relative ">
      <img
        className="absolute left-2 w-5 translate-y-2.5 transform  opacity-40"
        src={searchIcon}
        alt=""
      />
      <input
        type="text"
        placeholder="Search"
        className={`w-full rounded-md bg-slate-100 bg-left p-2 indent-6 md:text-lg
       
    `}
        onChange={(e) => handleChange(e)}
        value={searchText}
      />
    </label>
  );
}
