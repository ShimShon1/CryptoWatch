import React, { useContext } from "react";
import { AppContext } from "../App";
import CoinTableRow from "../components/CoinTableRow";

export default function Favorites() {
  let context = useContext(AppContext);

  let coinRowElems = context?.favsList.map((coin: any) => {
    if (coin === undefined) return;
    return <CoinTableRow coin={coin} key={coin.id} />;
  });

  return (
    <>
      <section className="space-y-8" id="section-top"></section>

      <div className="relative mt-6 w-full overflow-x-auto" id="table">
        <table className="w-full text-left text-sm  ">
          <thead className="bg-gray-50 text-xs uppercase  dark:bg-gray-700 ">
            <tr>
            <th scope="col" className="px-6 py-3">
                
              </th>
              <th scope="col" className="px-6 py-3">
                #
              </th>

              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                1hr
              </th>

              <th scope="col" className="  px-6 py-3 md:table-cell">
                24hr
              </th>

              <th scope="col" className="  px-6 py-3 md:table-cell">
                7d
              </th>

              <th scope="col" className="   px-6   py-3 md:table-cell">
                marketcap
              </th>
            </tr>
          </thead>
          <tbody>{coinRowElems}</tbody>
        </table>
      </div>
    </>
  );
}
