import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import searchIcon from "../assets/icons/search.svg";
type SearchBarProps = {
  displayPage: (num?: number, arr?: object[]) => void;
  target: string;
};
export default function SearchBar({ displayPage, target }: SearchBarProps) {
  const [searchText, setSearchText] = useState("");
  const appContext = useContext(AppContext);
  if (appContext == undefined) return <h1>Something Went Wrong</h1>;

  let originArr: object[];
  target == "coins"
    ? (originArr = appContext.coinsList)
    : (originArr = appContext.exchangesList);

  let path = useParams();
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
    let search = e.target.value.toLowerCase();
    let filteredArr = originArr.filter((coin: any) => {
      let name = coin.name.substring(0, search.length).toLowerCase();
      return search === name;
    });
    filteredArr && displayPage(filteredArr?.length, filteredArr);
  }
  return (
    <label className=" relative ">
      <img
        className="absolute left-2 w-5 translate-y-2.5 transform  opacity-40"
        src={searchIcon}
        alt=""
      />
      <input
        type="text"
        placeholder="Search"
        className={`w-full rounded-md bg-slate-100 bg-left p-2 indent-6  dark:bg-slate-500 dark:placeholder-gray-50 md:text-lg
       
    `}
        onChange={(e) => handleChange(e)}
        value={searchText}
      />
    </label>
  );
}
