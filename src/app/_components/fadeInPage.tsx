"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function FadeInPage() {
  const fadeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap
      .timeline()
      .to("#fadeId", {
        alpha: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
      .call(() => {
        if (fadeRef.current) {
          fadeRef.current.style.display = "none";
        }
      });
  });

  return (
    <div
      ref={fadeRef}
      id="fadeId"
      className="fixed inset-0 z-50 bg-background"
    ></div>
  );
}
