"use client";

import { Dispatch, SetStateAction } from "react";

export default function Hamburger({
  toggled,
  toggleAction,
}: {
  toggled: boolean;
  toggleAction: Dispatch<SetStateAction<boolean>>;
}) {
  const handleToggle = () => {
    toggleAction(!toggled);
  };
  return (
    <div
      className={`container flex size-12 flex-col items-center justify-center gap-1 rounded ${toggled ? "bg-spring-green" : "bg-celadon"}`}
      onClick={handleToggle}
    >
      <div className={`h-1 w-7 rounded bg-black`}></div>
      <div className={`h-1 w-7 rounded bg-black`}></div>
      <div className={`h-1 w-7 rounded bg-black`}></div>
    </div>
  );
}
