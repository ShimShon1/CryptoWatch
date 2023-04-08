import React, { useContext } from "react";
import { AppContext } from "../App";

import favLight from "../assets/icons/star-black.svg";
import favDark from "../assets/icons/star-white.svg";

import favGold from "../assets/icons/star-gold.svg";

export default function FavIcon({ coin }: any) {
  let context = useContext(AppContext)!;
  let isFav = context.favsList.some((favCoin: any) => {
    return favCoin.id === coin.id;
  });

  return (
    <div className="absolute left-1 top-[18px] cursor-pointer">
      {isFav ? (
        <img
          className=" w-4"
          src={favGold}
          alt=""
          onClick={() => context.removeFromFavs(coin)}
        />
      ) : (
        <img
          className=" w-4"
          src={context.isDark ? favDark : favLight}
          alt=""
          onClick={() => context.addToFavs(coin)}
        />
      )}
    </div>
  );
}
