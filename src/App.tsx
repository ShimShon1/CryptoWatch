import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import CoinsPage from "./pages/CoinsPage";
import Coins from "./pages/CoinsPage";

export type AppContextType = {
  isDark: boolean;
  coinsList: object[];
} | null;

export const AppContext = createContext<AppContextType>(null);

function App() {
  const [isDark, setIsDark] = useState(false);
  const [coinsList, setCoinsList] = useState([{}]);
  // console.log(coinsList, "ma coins are here shawty");
  useEffect(() => {
    async function getCoins() {
      try {
        let response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d&locale=en"
        );
        let data = await response.json();
        setCoinsList(data);
        console.log("i fetcheddd");
      } catch (e) {
        console.error(e);
      }
    }

    getCoins();
  }, []);

  console.log(coinsList, "GOTCHA");
  useEffect(() => {
    console.log("ran");
    let root = document.querySelector("#root");
    if (isDark) {
      root!.className = "dark";
    } else {
      root!.className = "";
    }
  }, [isDark]);
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-white   to-slate-300 text-blue-950 dark:from-slate-900
     dark:to-slate-950  dark:text-gray-200 "
    >
      <AppContext.Provider value={{ isDark: isDark, coinsList: coinsList }}>
        <header className=" sticky top-0 z-10 bg-white shadow-lg dark:bg-slate-950">
          <Nav setIsDark={setIsDark} />
        </header>
        <main className=" z-1 m-auto min-h-[90vh] p-6  lg:mt-6 lg:w-2/3">
          <Routes>
            <Route path="/exchanges" element={<CoinsPage />} />
            <Route path="/" element={<CoinsPage />} />
          </Routes>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
