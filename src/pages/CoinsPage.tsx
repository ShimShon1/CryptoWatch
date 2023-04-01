import React, { useContext } from "react";
import { AppContext } from "../App";

export default function CoinsPage() {
  const appContext = useContext(AppContext);
  console.log(appContext);
  return (
    <>
      <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl ">
        Cryptocurrency Prices by Market Cap
      </h1>
    </>
  );
}
