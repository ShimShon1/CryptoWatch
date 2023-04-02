import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { formatNum } from "../util/nums";
import { AppContext } from "../App";
import CoinTableRow from "../components/CoinTableRow";
import PageBtns from "../components/PageBtns";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";

export default function ExchangesPage() {
  const appContext = useContext(AppContext);
  const [displayedExchanges, setDisplayedExchanges]: any = useState([{}]);
  const [currentExchanges, setCurrentExchanges]: any = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);

  function flipPage(page: number) {
    displayPage(currentExchanges.length, currentExchanges, page);
  }

  function displayPage(num = 50, arr = appContext?.exchangesList, page = 1) {
    setCurrentPage(page);
    arr && setCurrentExchanges(arr);
    let start = 50 * (page - 1);
    let end = num >= 50 ? 50 : num;
    end = end * page;
    let newDisplayList = [];
    for (let i = start; i < end; i++) {
      arr !== undefined && newDisplayList.push(arr[i]);
    }
    setDisplayedExchanges(newDisplayList);
  }
  //initialaize first 50 exchanges
  useEffect(() => {
    console.log("ran display");
    displayPage();
  }, [appContext?.exchangesList]);

  let ExchangeRowElems = displayedExchanges.map((exc: any) => {
    return (
      <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
        <th scope="row" className="  px-6 py-4 font-medium">
          {exc.trust_score_rank}
        </th>
        <td className="  px-6 py-4 font-semibold tracking-wide">
          <a href={exc.url} target="_blank" className="flex items-center gap-2">
            <img className="w-6" src={exc.image} alt="" /> {exc.name}
          </a>
        </td>
        <td className="px-6 py-4 font-semibold">{exc.trust_score}</td>
        <td className="px-6 py-4">${formatNum(exc.trade_volume_24h_btc)}</td>

        <td className=" hidden px-6  py-4 md:table-cell">
          {exc.year_established}
        </td>
      </tr>
    );
  });

  return (
    <>
      <section className="space-y-8" id="section-top">
        <PageTitle> Top Crypto Exchanges Ranked By Trust Score</PageTitle>

        <SearchBar displayPage={displayPage} />
      </section>

      <div className="relative mt-6 w-full overflow-x-auto" id="table">
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
                Trust Score
              </th>
              <th scope="col" className="px-6 py-3">
                Trade Volume (24hr)
              </th>

              <th scope="col" className=" hidden px-6 py-3 md:table-cell">
                Since
              </th>
            </tr>
          </thead>
          <tbody>{ExchangeRowElems}</tbody>
        </table>
      </div>

      <PageBtns
        currentList={currentExchanges}
        displayPage={displayPage}
        currentPage={currentPage}
      />
    </>
  );
}
