"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function ScrollSmootherWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const smootherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (smootherRef.current) {
      ScrollSmoother.create({
        wrapper: smootherRef.current,
        content: smootherRef.current.firstElementChild as HTMLElement,
        smooth: 1.2,
      });
    }
  }, []);

  return (
    <div ref={smootherRef} id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
