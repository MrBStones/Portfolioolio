"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AnimateIdOnOpen({ id }: { id: string }) {
  const { contextSafe } = useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(`#${id} > *`, {
      duration: 1,
      alpha: 0,
      y: -100,
      ease: "power2.out",
      stagger: 0.1,
    });

    return tl;
  });

  return <></>;
}
