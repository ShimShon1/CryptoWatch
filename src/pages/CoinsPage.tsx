import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import CoinTableRow from "../components/CoinTableRow";
import PageBtns from "../components/PageBtns";
import PageTitle from "../components/PageTitle";
import SearchBar from "../components/SearchBar";
import CoinsTable from "../components/CoinsTable";

export default function CoinsPage() {
  const appContext = useContext(AppContext);
  const [displayedCoins, setDisplayedCoins] = useState([{}]);
  const [currentCoins, setCurrentCoins] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);

  function flipPage(page: number) {
    displayPage(currentCoins.length, currentCoins, page);
  }

  function displayPage(num = 50, arr = appContext?.coinsList, page = 1) {
    setCurrentPage(page);
    arr && setCurrentCoins(arr);
    let start = 50 * (page - 1);
    let end = num >= 50 ? 50 : num;
    end = end * page;
    let newDisplayList = [];
    for (let i = start; i < end; i++) {
      arr !== undefined && newDisplayList.push(arr[i]);
    }
    setDisplayedCoins(newDisplayList);
  }
  //initialaize first 50 coins
  useEffect(() => {
    displayPage();
  }, [appContext?.coinsList]);

  let coinRowElems = displayedCoins.map((coin: any) => {
    if (coin === undefined) return;
    return <CoinTableRow coin={coin} key={coin.id} />;
  });

  return (
    <>
      <section className="space-y-8" id="section-top">
        <PageTitle> Cryptocurrency Prices By Current Market Cap</PageTitle>

        <SearchBar displayPage={displayPage} target={"coins"} />
      </section>

      <CoinsTable children={coinRowElems}/>

      <PageBtns
        currentList={currentCoins}
        displayPage={displayPage}
        currentPage={currentPage}
      />
    </>
  );
}
