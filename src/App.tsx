import { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import CoinsPage from "./pages/CoinsPage";
import ExchangesPage from "./pages/ExchangesPage";
import Favorites from "./pages/Favorites";
import SingleCoinPage from "./pages/SingleCoinPage";
import { AppContextType } from "./AppContextType";

export const AppContext = createContext<AppContextType>(null);

export default function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")!)
  );

  const [favsList, setFavsList] = useState([
    ...(JSON.parse(localStorage.getItem("favs")!) || []),
  ]);
  const [exchangesList] = useGetData();
  function addToFavs(coin: any) {
    let newFavs = [...favsList, coin];
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setFavsList(newFavs);
  }

  function removeFromFavs(coin: any) {
    let newFavs = favsList.filter((favCoin: any) => {
      return favCoin.id !== coin.id;
    });
    localStorage.setItem("favs", JSON.stringify(newFavs));
    setFavsList(newFavs);
  }

  useEffect(() => {
    let root = document.querySelector("#root")!;
    if (isDark) {
      root.className = "dark";
    } else {
      root.className = "";
    }

    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);
  return (
    <div
      className="min-h-screen max-w-full bg-gradient-to-b from-white  to-slate-300 text-blue-950 dark:from-slate-900
     dark:to-slate-950   dark:text-gray-200	"
    >
      <AppContext.Provider
        value={{
          isDark: isDark,
          exchangesList: exchangesList,
          addToFavs: addToFavs,
          favsList: favsList,
          removeFromFavs: removeFromFavs,
        }}
      >
        <header className=" sticky top-0 z-10  bg-white shadow-lg dark:bg-slate-950">
          <Nav setIsDark={setIsDark} />
        </header>
        <main className=" z-1 overflow-x-hidden    p-6 lg:m-auto lg:mt-4 lg:w-3/4	">
          <Routes>
            <Route path="/" element={<CoinsPage />} />
            <Route path="/exchanges" element={<ExchangesPage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/coin/:id" element={<SingleCoinPage />} />
          </Routes>
        </main>
      </AppContext.Provider>
    </div>
  );
}
function useGetData() {
  const [coinsList, setCoinsList] = useState([{}]);
  const [exchangesList, setExchangesList] = useState([{}]);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const endPoint =
        "https://api.coingecko.com/api/v3/exchanges?per_page=250";

      const response = await fetch(endPoint, {
        method: "GET",
        mode: "cors",
        headers: {},
      });

      const data = await response.json();

      setExchangesList(data);
    } catch (e) {
      console.error(e);
    }
  }
  return [exchangesList];
}
