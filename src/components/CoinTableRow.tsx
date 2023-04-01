import React from "react";

export default function CoinTableRow({ coin }: any) {
  let cap = coin?.market_cap;
  if (cap !== undefined) {
    cap = cap.toLocaleString();
  }
  console.log(typeof cap);
  console.log(coin);
  return (
    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
      <th scope="row" className="  px-6 py-4 font-medium">
        {coin?.market_cap_rank}
      </th>
      <td className="flex items-center gap-2 px-6 py-4 font-semibold">
        {" "}
        <img className="w-6" src={coin?.image} alt="" /> {coin?.name}
      </td>
      <td className="px-6 py-4">1.1</td>
      <td className="px-6 py-4">3.1</td>
      <td className="px-6 py-4">-2.1</td>
      <td className="px-6 py-4">1.1</td>
      <td className="px-6 py-4">{cap}</td>
    </tr>
  );
}
