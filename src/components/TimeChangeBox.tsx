import React from "react";
import TimeTd from "./TimeTd";

type TimeChangeBoxProps = {
  num: number;
  children: React.ReactNode;
};

export default function TimeChangeBox({
  num,
  children,
}: TimeChangeBoxProps) {
  return (
    <div
      className="flex w-full flex-col gap-2 rounded-sm border-r
 border-blue-950 border-opacity-30 bg-slate-400 bg-opacity-10 p-4  dark:border-gray-200"
    >
      <span className="border-b border-blue-950 border-opacity-10">
        {" "}
        {children}
      </span>
      <TimeTd num={num} />
    </div>
  );
}
