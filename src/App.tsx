import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import CoinsPage from "./pages/CoinsPage";
import Coins from "./pages/CoinsPage";
import ExchangesPage from "./pages/ExchangesPage";

export type AppContextType = {
  isDark: boolean;
  coinsList: object[];
  exchangesList: object[];
} | null;

export const AppContext = createContext<AppContextType>(null);

function App() {
  const [isDark, setIsDark] = useState(false);
  const [coinsList, setCoinsList] = useState([{}]);
  const [exchangesList, setExchangesList] = useState([{}]);

  useEffect(() => {
    async function getCoins() {
      try {
        const urls = [
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d&locale=en",
          "https://api.coingecko.com/api/v3/exchanges?per_page=250",
        ];

        const promises = urls.map((url) =>
          fetch(url).then((response) => response.json())
        );
        const data = await Promise.all(promises);

        setCoinsList(data[0]);
        setExchangesList(data[1]);

        console.log(data[1]);
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
      className="min-h-screen  max-w-full bg-gradient-to-b  from-white to-slate-300 text-blue-950
     dark:from-slate-900  dark:to-slate-950 dark:text-gray-200	"
    >
      <AppContext.Provider
        value={{
          isDark: isDark,
          coinsList: coinsList,
          exchangesList: exchangesList,
        }}
      >
        <header className=" sticky top-0 z-10  bg-white shadow-lg dark:bg-slate-950">
          <Nav setIsDark={setIsDark} />
        </header>
        <main className=" z-1 overflow-x-hidden    p-6 lg:m-auto lg:mt-4 lg:w-3/4	">
          <Routes>
            <Route path="/" element={<CoinsPage />} />
            <Route path="/exchanges" element={<ExchangesPage />} />
            <Route path="/coin/:id" element={<h1>Coin Here</h1>} />
          </Routes>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
