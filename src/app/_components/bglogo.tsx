"use client";

import Image from "next/image";
import { useDarkModeClass } from "src/app/_components/utils/useDarkModeClass";

export default function BgLogo() {
  const isDark = useDarkModeClass();

  return (
    <div className="size-128 opacity-10">
      {isDark ? (
        <Image
          src={"/scrunchesvgwhite.svg"}
          alt="Scrunches Logo"
          height={500}
          width={500}
          className="p-2"
        />
      ) : (
        <Image
          src="/scrunchesvg.svg"
          alt="Scrunches Logo"
          height={500}
          width={500}
          className="p-2"
        />
      )}
    </div>
  );
}
