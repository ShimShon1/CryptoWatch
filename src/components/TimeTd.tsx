import React from "react";

export default function TimeTd({ num }: any) {
  return (
    <span
      className={`${
        num > 0 ? "text-green-600" : "text-red-600"
      }   text-center font-semibold`}
    >
      {num?.toFixed(2)}%
    </span>
  );
}
