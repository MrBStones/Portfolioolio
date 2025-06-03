"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BgLogo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDark(document.documentElement.classList.contains("dark"));
    }
  }, []);

  return (
    <div className="size-128 opacity-10">
      <Image
        src={isDark ? "/scrunchesvgwhite.svg" : "/scrunchesvg.svg"}
        alt="Scrunches Logo"
        height={500}
        width={500}
        className="p-2"
      />
    </div>
  );
}
