import React, { useContext } from "react";
import { AppContext } from "../App";
import CoinTableRow from "../components/CoinTableRow";
import CoinsTable from "../components/CoinsTable";
import PageTitle from "../components/PageTitle";

export default function Favorites() {
  let context = useContext(AppContext);

  let coinRowElems = context?.favsList.map((coin: any) => {
    if (coin === undefined) return;
    return <CoinTableRow coin={coin} key={coin.id} />;
  });

  return (
    <>
      <PageTitle>Your Favorite Coins</PageTitle>

      <CoinsTable children={coinRowElems} />
    </>
  );
}
