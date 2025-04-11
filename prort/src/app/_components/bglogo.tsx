"use client";

import Image from "next/image";

export default function BgLogo() {
  return (
    <div className={"size-128 opacity-10"}>
      <Image
        src={"scrunchesvgwhite.svg"}
        alt={"Scrunches Logo"}
        height={500}
        width={500}
        className={"p-2"}
      />
    </div>
  );
}
