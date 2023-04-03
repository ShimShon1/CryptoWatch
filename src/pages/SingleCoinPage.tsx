import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import TimeChangeBox from "../components/TimeChangeBox";
import TimeTd from "../components/TimeTd";
import { formatNum } from "../util/nums";

export default function SingleCoinPage() {
  let coinsList: any = useContext(AppContext)?.coinsList;
  let pathId = useParams().id;

  let [currentCoin, setCurrentCoin] = useState<any>(null);
  useEffect(() => {
    async function getCoin() {
      let response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${pathId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      );
      let data = await response.json();

      setCurrentCoin(data);
    }

    getCoin();
  }, []);

  let descHtml = { __html: "placeholder" };
  if (currentCoin !== null) {
    descHtml = { __html: currentCoin.description.en };
  }
  return currentCoin !== null ? (
    <div className="rounded-md bg-gray-100 p-6 dark:bg-slate-600">
      <section className="justify-around space-y-6 text-center ">
        <div className="justify-around space-y-6 md:flex">
          <div className=" flex items-center justify-center gap-2">
            <img className="w-10" src={currentCoin.image.large} />
            <h1 className="text-3xl font-semibold">{currentCoin.name}</h1>
          </div>

          <div>
            <h2 className="text-lg ">Current Price</h2>
            <span className="text-4xl font-semibold">
              ${formatNum(currentCoin.market_data.current_price.usd)}
            </span>
          </div>
        </div>
        <hr />
        <div className="flex justify-around">
          <div className=" text-left ">
            <h2 className=" lg:text-lg">Total Volume</h2>
            <span className="text-lg font-semibold lg:text-xl">
              ${formatNum(currentCoin.market_data.total_volume.usd)}
            </span>
          </div>
          <div className="text-left">
            <h2 className="lg:text-lg">Total Supply</h2>
            <span className="text-lg font-semibold lg:text-xl">
              ${formatNum(currentCoin.market_data.total_supply)}
            </span>
          </div>
        </div>

        <hr />
        <h2 className=" text-xl font-medium">Price Changes In The Last</h2>
        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
          <TimeChangeBox
            num={
              currentCoin.market_data.price_change_percentage_1h_in_currency.usd
            }
          >
            1h
          </TimeChangeBox>
          <TimeChangeBox
            num={currentCoin.market_data.price_change_percentage_24h}
          >
            24h
          </TimeChangeBox>
          <TimeChangeBox
            num={currentCoin.market_data.price_change_percentage_7d}
          >
            7d
          </TimeChangeBox>
          <TimeChangeBox
            num={currentCoin.market_data.price_change_percentage_14d}
          >
            14d
          </TimeChangeBox>
          <TimeChangeBox
            num={currentCoin.market_data.price_change_percentage_30d}
          >
            30d
          </TimeChangeBox>
          <TimeChangeBox
            num={currentCoin.market_data.price_change_percentage_60d}
          >
            60d
          </TimeChangeBox>
          <TimeChangeBox
            num={currentCoin.market_data.price_change_percentage_200d}
          >
            200d
          </TimeChangeBox>
          <TimeChangeBox
            num={currentCoin.market_data.price_change_percentage_1y}
          >
            1y
          </TimeChangeBox>
        </div>
        <hr />
      </section>
      <section className="mt-6 space-y-6 ">
        <h2 className="text-center text-xl font-medium">Description</h2>

        <p className=" m-auto  p-2 text-sm lg:text-base">
          <span className="mt-8" dangerouslySetInnerHTML={descHtml} />
        </p>
      </section>
    </div>
  ) : (
    <h1></h1>
  );
}
