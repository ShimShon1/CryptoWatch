import React from "react";
import TimeTd from "./TimeTd";

export default function CoinTableRow({ coin }: any) {
  function formatNum(num: number | undefined) {
    if (num !== undefined) {
      return num.toLocaleString();
    }
  }
  return (
    coin && (
      <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
        <th scope="row" className="  px-6 py-4 font-medium">
          {coin.market_cap_rank}
        </th>
        <td className="flex items-center gap-2 px-6 py-4 font-semibold">
          {" "}
          <img className="w-6" src={coin.image} alt="" /> {coin.name}
        </td>
        <td className="px-6 py-4">${formatNum(coin.current_price)}</td>
        <td className="px-6 py-4  ">
          <TimeTd num={coin.price_change_percentage_1h_in_currency} />
        </td>
        <td className="hidden px-6 py-4 md:table-cell ">
          <TimeTd num={coin.price_change_percentage_24h_in_currency} />
        </td>
        <td className="hidden px-6 py-4 md:table-cell ">
          <TimeTd num={coin.price_change_percentage_7d_in_currency} />
        </td>
        <td className=" hidden px-6  py-4 md:table-cell">
          ${formatNum(coin.market_cap)}
        </td>
      </tr>
    )
  );
}
