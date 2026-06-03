"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useHoveredElement } from "./useHoveredElement";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return !window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  });
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const { element, rect, cursorType } = useHoveredElement();

  const cursorTypeRef = useRef(cursorType);
  const xToRef = useRef<((v: number) => void) | null>(null);
  const yToRef = useRef<((v: number) => void) | null>(null);
  const xToDotRef = useRef<((v: number) => void) | null>(null);
  const yToDotRef = useRef<((v: number) => void) | null>(null);
  const lastPosRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: none) and (pointer: coarse)");

    const updateEnabledState = () => setEnabled(!mediaQuery.matches);

    updateEnabledState();
    mediaQuery.addEventListener("change", updateEnabledState);

    return () => mediaQuery.removeEventListener("change", updateEnabledState);
  }, []);

  useEffect(() => {
    cursorTypeRef.current = cursorType;
  }, [cursorType]);

  // create quickTo functions once and keep a stable mousemove listener
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const cursorDot = cursorDotRef.current;
    if (!cursorDot) return;

    xToRef.current = gsap.quickTo(cursor, "x", {
      duration: 0.22,
      overwrite: true,
      ease: "power3.out",
    });
    yToRef.current = gsap.quickTo(cursor, "y", {
      duration: 0.22,
      overwrite: true,
      ease: "power3.out",
    });

    xToDotRef.current = gsap.quickTo(cursorDot, "x", {
      duration: 0.1,
      ease: "power3.out",
    });
    yToDotRef.current = gsap.quickTo(cursorDot, "y", {
      duration: 0.1,
      ease: "power3.out",
    });

    const onMove = (e: MouseEvent) => {
      lastPosRef.current.x = e.clientX;
      lastPosRef.current.y = e.clientY;

      xToDotRef.current?.(e.clientX - 4);
      yToDotRef.current?.(e.clientY - 4);

      // only move directly with pointer when NOT in outline mode
      if (
        cursorTypeRef.current !== "outline" &&
        cursorTypeRef.current !== "outlinexl" &&
        cursorTypeRef.current !== "outline2xl"
      ) {
        xToRef.current?.(e.clientX - 16);
        yToRef.current?.(e.clientY - 16);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // When outline mode is active, drive cursor position from `rect`.
  // When outline ends, snap/animate immediately back to last mouse pos.
  useEffect(() => {
    const xTo = xToRef.current;
    const yTo = yToRef.current;
    if (!xTo || !yTo) return;

    if (
      (cursorType === "outline" ||
        cursorType === "outlinexl" ||
        cursorType === "outline2xl") &&
      rect
    ) {
      // position to element's top-left so the outline matches size set elsewhere
      xTo(rect.left);
      yTo(rect.top);
    } else {
      // resume and snap/animate to last known mouse position immediately
      xTo(lastPosRef.current.x - 16);
      yTo(lastPosRef.current.y - 16);
    }
  }, [cursorType, rect]);

  // sizing/visual state (unchanged logic, still driven by element/cursorType/rect)
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (element) {
      if (cursorType === "outline2xl") {
        if (!rect) return;
        gsap.to(cursor, {
          width: rect.width + 2,
          height: rect.height + 2,
          borderRadius: 15,
          duration: 0.3,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
        });
      } else if (cursorType === "outline") {
        if (!rect) return;
        gsap.to(cursor, {
          width: rect.width + 2,
          height: rect.height + 2,
          borderRadius: 3,
          duration: 0.3,
          scale: 1,
          opacity: 1,
          ease: "power3.out",
        });
      } else if (cursorType === "outlinexl") {
        if (!rect) return;
        gsap.to(cursor, {
          width: rect.width + 2,
          height: rect.height + 2,
          borderRadius: 11,
          duration: 0.3,
          opacity: 1,
          scale: 1,
          ease: "power3.out",
        });
      } else {
        gsap.to(cursor, {
          scale: 1.6,
          duration: 0.3,
          borderRadius: 20,
          opacity: 0.5,
          width: 32,
          height: 32,
          ease: "power3.out",
        });
      }
    } else {
      gsap.to(cursor, {
        scale: 1,
        width: 32,
        height: 32,
        duration: 0.3,
        borderRadius: 20,
        opacity: 1,
        ease: "power3.out",
      });
    }
  }, [element, cursorType, rect]);

  if (!enabled) {
    return null;
  }

  return (
    <div>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-50 h-8 w-8 !cursor-none select-none rounded-3xl outline outline-4 outline-offset-4 outline-black dark:outline-white [&_*]:!cursor-none"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed left-0 top-0 z-50 size-2 !cursor-none select-none rounded-xl bg-black/70 dark:bg-white/70 [&_*]:!cursor-none"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </div>
  );
}
