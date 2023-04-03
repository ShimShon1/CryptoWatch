import { formatNum } from "../util/nums";

export default function ExchangeTableRow({ exc }: any) {
  return (
    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
      <th scope="row" className="  px-6 py-4 font-medium">
        {exc.trust_score_rank}
      </th>
      <td className="  px-6 py-4 font-semibold tracking-wide">
        <a href={exc.url} target="_blank" className="flex items-center gap-2">
          <img className="w-6" src={exc.image} alt="" /> {exc.name}
        </a>
      </td>
      <td className="px-6 py-4 font-semibold">{exc.trust_score}</td>
      <td className="px-6 py-4">${formatNum(exc.trade_volume_24h_btc)}</td>

      <td className="  px-6  py-4 ">{exc.year_established}</td>
    </tr>
  );
}
