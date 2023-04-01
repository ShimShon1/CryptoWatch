import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import CoinTableRow from "../components/CoinTableRow";
import searchIcon from "../assets/icons/search.svg";

export default function CoinsPage() {
  const appContext = useContext(AppContext);
  console.log(appContext, "contextttttttttttttttt");
  const [searchText, setSearchText] = useState("");
  const [displayedCoins, setDisplayedCoins] = useState([{}]);
  useEffect(() => {
    console.log("ran display");
    let newDisplayList = [];
    for (let i = 0; i < 50; i++) {
      newDisplayList.push(appContext?.coinsList[i]!);
    }
    setDisplayedCoins(newDisplayList);
  }, [appContext?.coinsList]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }

  let coinRowElems = displayedCoins.map((coin: any) => {
    return <CoinTableRow coin={coin} />;
  });

  console.log(displayedCoins);
  return (
    <>
      <section className="space-y-8">
        <h1 className="mb-4 text-xl font-semibold md:text-2xl lg:text-3xl">
          Cryptocurrency Prices By Current Market Cap
        </h1>

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
      </section>

      <div className="relative mt-6  overflow-x-auto">
        <table className="w-full text-left text-sm  ">
          <thead className="bg-gray-50 text-xs uppercase  dark:bg-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>

              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                1hr
              </th>

              <th scope="col" className=" hidden px-6 py-3 md:table-cell">
                24hr
              </th>

              <th scope="col" className=" hidden px-6 py-3 md:table-cell">
                7d
              </th>

              <th scope="col" className="  hidden px-6   py-3 md:table-cell">
                marketcap
              </th>
            </tr>
          </thead>
          <tbody>{coinRowElems || ""}</tbody>
        </table>
      </div>
    </>
  );
}
