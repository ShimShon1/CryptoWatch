import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <nav>
        <Link to={"/exchanges"}>EXCHANGES</Link>
      </nav>
      <Routes>
        <Route path="/exchanges" element={<h1>EXCHANGESSSSSS</h1>} />
      </Routes>
    </>
  );
}

export default App;
