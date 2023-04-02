import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import CoinTableRow from "../components/CoinTableRow";
import SearchBar from "../components/SearchBar";

export default function CoinsPage() {
  const appContext = useContext(AppContext);
  const [displayedCoins, setDisplayedCoins] = useState([{}]);

  //initialaize first 50 coins
  function displayPage(num = 50, arr = appContext?.coinsList) {
    let newDisplayList = [];
    for (let i = 0; i < num; i++) {
      arr !== undefined && newDisplayList.push(arr[i]);
    }
    setDisplayedCoins(newDisplayList);
  }
  useEffect(() => {
    console.log("ran display");
    displayPage();
  }, [appContext?.coinsList]);

  let coinRowElems = displayedCoins.map((coin: any) => {
    return <CoinTableRow coin={coin} />;
  });

  return (
    <>
      <section className="space-y-8">
        <h1 className="mb-4 text-xl font-semibold md:text-2xl lg:text-3xl">
          Cryptocurrency Prices By Current Market Cap
        </h1>

        <SearchBar displayPage={displayPage} />
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
