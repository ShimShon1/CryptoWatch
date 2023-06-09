import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext, AppContextType } from "../App";
import { formatNum } from "../util/nums";
import FavIcon from "./FavIcon";
import TimeTd from "./TimeTd";

export default function CoinTableRow({ coin }: any) {
  return (
    <tr className="border-b bg-white hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
       <th scope="row" className=" items-center px-4 py-4 font-medium ">
        <FavIcon coin={coin} />
      </th>
      <th scope="row" className=" items-center px-6 py-4 font-medium">
        {coin.market_cap_rank}
      </th>
      <td className="px-6 py-4 font-semibold tracking-wide">
        <Link className="flex items-center gap-2" to={"/coin/" + coin.id}>
          <img className="w-6" src={coin.image} alt="" /> {coin.name}
        </Link>
      </td>
      <td className="px-6 py-4">${formatNum(coin.current_price)}</td>
      <td className="px-6 py-4  ">
        <TimeTd num={coin.price_change_percentage_1h_in_currency} />
      </td>
      <td className=" px-6 py-4 md:table-cell ">
        <TimeTd num={coin.price_change_percentage_24h_in_currency} />
      </td>
      <td className=" px-6 py-4 md:table-cell ">
        <TimeTd num={coin.price_change_percentage_7d_in_currency} />
      </td>
      <td className="  px-6  py-4 md:table-cell">
        ${formatNum(coin.market_cap)}
      </td>
    </tr>
  );
}
