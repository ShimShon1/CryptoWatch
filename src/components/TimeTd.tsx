import React from "react";

export default function TimeTd({ num }: any) {
  return (
    <td
      className={`${
        num > 0 ? "text-green-600" : "text-red-600"
      }  px-6 py-4 font-semibold`}
    >
      {num?.toFixed(2)}%
    </td>
  );
}
