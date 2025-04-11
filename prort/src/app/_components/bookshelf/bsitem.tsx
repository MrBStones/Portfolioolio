"use client";

import type { bsItemProps } from "./bsdata";

export default function BsItem({
  num,
  title,
  description,
}: Readonly<bsItemProps>) {
  return (
    <>
      <div className="container flex h-bs-item-h w-bs-item-w min-w-[400px] flex-row rounded-xl bg-light text-dark">
        <div className="container flex h-full w-fit flex-row content-center items-center justify-center text-6xl">
          <h1 className="w-bs-item-h text-center">{num}</h1>
        </div>
        <div className="container flex w-full flex-col justify-center pr-3 text-right">
          <h1 className="w-full text-3xl">
            <b>{title}</b>
          </h1>
          <h2 className="w-full text-xl">{description}</h2>
        </div>
      </div>
    </>
  );
}
