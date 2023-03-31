import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import CoinsPage from "./pages/CoinsPage";
import Coins from "./pages/CoinsPage";

export type AppContextType = {
  isDark: boolean;
} | null;

export const AppContext = createContext<AppContextType>(null);

function App() {
  const [isDark, setIsDark] = useState(false);

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
      className="text-blue-950 dark:text-white min-h-screen   bg-gradient-to-b from-white to-slate-300
     dark:from-slate-900  dark:to-slate-950 "
    >
      <AppContext.Provider value={{ isDark: isDark }}>
        <header className=" dark:bg-slate-950 bg-white shadow-lg sticky top-0">
          <Nav setIsDark={setIsDark} />
        </header>
        <main className="lg:w-2/3 min-h-[90vh] m-auto  p-6 lg:mt-10">
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
