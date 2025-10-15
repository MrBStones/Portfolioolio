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
  fixedWidth = true,
  className,
}: Readonly<bsItemProps> & { fixedWidth?: boolean }) {
  const container = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP(
    () => {
      gsap.set(container.current, { zIndex: 8 });
    },
    { scope: container },
  );
  const heroColor = tailwindConfig.theme.extend.colors.hero;
  const lightColor = tailwindConfig.theme.extend.colors.light;

  const mouseEnter = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(container.current, {
      duration: 0,
      zIndex: 10,
      overwrite: true,
      position: "relative",
    }).to(container.current, {
      duration: 0.5,
      scale: 1.2,
      ease: "power2.out",
      boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.5)", // use full syntax
      backgroundColor: heroColor,
      zIndex: 10,
      overwrite: true,
    });
  });

  const mouseLeave = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to(container.current, {
      duration: 0,
      zIndex: 9,
      overwrite: true,
      position: "relative",
    }).to(container.current, {
      duration: 0.5,
      scale: 1,
      ease: "power2.out",
      zIndex: 8,
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)", // use full syntax
      backgroundColor: lightColor,
      overwrite: true,
    });
  });

  return (
    <>
      <div
        ref={container}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={mouseLeave}
        className={`${fixedWidth ? "w-bs-item-w min-w-[375px]" : ""} ${className} rounded-xl bg-light`}
        id="bsItemHover"
      >
        <BsItem num={num} title={title} description={description} bgColor="" />
      </div>
    </>
  );
}
