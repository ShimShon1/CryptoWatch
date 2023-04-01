import { useContext, useState } from "react";
import { AppContext } from "../App";

export default function CoinsPage() {
  const appContext = useContext(AppContext);

  const [searchText, setSearchText] = useState("");
  console.log(appContext);

  function handleChange(e) {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }
  return (
    <>
      <section className="space-y-8">
        <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl ">
          Cryptocurrency Prices by Market Cap
        </h1>

        <input
          type="text"
          placeholder="Search"
          className="rounded-md bg-slate-200 indent-2 md:text-lg lg:w-80"
          onChange={(e) => handleChange(e)}
          value={searchText}
        />
      </section>

      <div className="relative mt-6 overflow-x-auto">
        <table className="w-full text-left text-sm  ">
          <thead className="bg-gray-50 text-xs uppercase  dark:bg-gray-700 ">
            <tr>
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

              <th scope="col" className="px-6 py-3">
                24hr
              </th>

              <th scope="col" className="px-6 py-3">
                7d
              </th>

              <th scope="col" className="px-6 py-3">
                marketcap
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
              <th scope="row" className="  px-6 py-4 font-medium">
                1{" "}
              </th>
              <td className="flex items-center gap-1 px-6 py-4">
                {" "}
                <img
                  className="w-6"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt=""
                />{" "}
                BitCoin
              </td>
              <td className="px-6 py-4">0.1</td>
              <td className="px-6 py-4">3.1</td>
              <td className="px-6 py-4">-2.1</td>
              <td className="px-6 py-4">1.1</td>
              <td className="px-6 py-4">$219,716,202,155</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
