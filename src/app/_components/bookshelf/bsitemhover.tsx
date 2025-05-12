"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { bsItemProps } from "./bsdata";
import { useRef } from "react";
import tailwindConfig from "tailwind.config";
import BsItem from "./bsitem";

export default function BsItemHover({
  num,
  title,
  description,
}: Readonly<bsItemProps>) {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: container });
  const heroColor = tailwindConfig.theme.extend.colors.hero;
  const lightColor = tailwindConfig.theme.extend.colors.light;

  const mouseEnter = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(container.current, {
      duration: 0,
      zIndex: 10,
    }).to(container.current, {
      duration: 0.5,
      scale: 1.2,
      ease: "power2.out",
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
      backgroundColor: heroColor,
      zIndex: 10,
    });
  });

  const mouseLeave = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(container.current, {
      duration: 0,
      zIndex: 9,
    }).to(container.current, {
      duration: 0.5,
      scale: 1,
      ease: "power2.out",
      zIndex: 8,
      backgroundColor: lightColor,
    });
  });

  return (
    <>
      <div
        ref={container}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="w-bs-item-w rounded-xl bg-light"
        id="bsItemHover"
      >
        <BsItem num={num} title={title} description={description} bgColor="" />
      </div>
    </>
  );
}
