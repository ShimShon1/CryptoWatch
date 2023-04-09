import React, { ReactNode } from "react";

export default function CoinsTable({ children }: { children: ReactNode }) {
  return (
    <section>
      <div className="relative mt-6 w-full overflow-x-auto" id="table">
        <table className="w-full text-left text-sm  ">
          <thead className="bg-gray-50 text-xs uppercase  dark:bg-gray-700 ">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
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

              <th scope="col" className="  px-6 py-3 ">
                24hr
              </th>

              <th scope="col" className="  px-6 py-3 ">
                7d
              </th>

              <th scope="col" className="   px-6   py-3 ">
                marketcap
              </th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </section>
  );
}
