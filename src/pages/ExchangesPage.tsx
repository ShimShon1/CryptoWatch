import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import PageBtns from "../components/PageBtns";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import ExchangeTableRow from "../components/ExchangeTableRow";

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
    displayPage();
  }, [appContext?.exchangesList]);

  let ExchangeRowElems = displayedExchanges.map((exc: any) => {
    if (exc == undefined || Object.keys(exc).length < 1) return;
    return <ExchangeTableRow exc={exc} key={exc.id} />;
  });

  return (
    <>
      <section className="space-y-8" id="section-top">
        <PageTitle> Top Crypto Exchanges Ranked By Trust Score</PageTitle>

        <SearchBar displayPage={displayPage} target="exchanges" />
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

              <th scope="col" className=" px-6 py-3 ">
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
