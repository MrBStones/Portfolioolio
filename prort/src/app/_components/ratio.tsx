"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface RatioProps {
  leftText: string;
  rightText: string;
  odd: boolean;
}

export default function Ratio({ leftText, rightText, odd }: RatioProps) {
  const container = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      const side1 = odd ? "#ratio-left" : "#ratio-right";
      const side2 = odd ? "#ratio-right" : "#ratio-left";

      const tl = gsap.timeline({ repeat: -1, yoyo: false });
      tl.to(side1, { width: "12rem", duration: 1, ease: "easeInOut" })
        .to(side2, { width: "24rem", duration: 1, ease: "easeInOut" }, "<")
        .to(side1, { width: "24rem", duration: 1, ease: "easeInOut" })
        .to(side2, { width: "12rem", duration: 1, ease: "easeInOut" }, "<");
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="px4 container flex flex-row items-center justify-center gap-12 py-16"
    >
      <div
        className={`container flex h-48 flex-col items-center justify-center rounded-xl md:p-0 ${odd ? "w-96 bg-dark-hero" : "w-48 bg-hero"}`}
        id={"ratio-left"}
      >
        <p className="text-center text-2xl text-dark">{leftText}</p>
      </div>
      <div
        className={`container flex h-48 flex-col items-center justify-center rounded-xl md:p-0 ${odd ? "w-48 bg-hero" : "w-96 bg-dark-hero"}`}
        id={"ratio-right"}
      >
        <p className="text-center text-2xl text-dark">{rightText}</p>
      </div>
    </div>
  );
}
