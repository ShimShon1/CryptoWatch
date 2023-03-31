import { createContext, useContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

type AppContextType = {
  light: boolean;
};

export const AppContext = createContext({
  light: false,
});
function App() {
  return (
    <div className="text-white min-h-screen">
      <AppContext.Provider value={{ light: true }}>
        <header>
          <Nav />
        </header>
        <main className=" bg-gradient-to-b from-slate-800 min-h-[90vh]  to-slate-950  p-6 ">
          <Routes>
            <Route path="/exchanges" element={<h1>EXCHANGESSSSSS</h1>} />
            <Route path="/" element={<h1>COINSSS</h1>} />
          </Routes>
        </main>
      </AppContext.Provider>
    </div>
  );
}

export default App;
