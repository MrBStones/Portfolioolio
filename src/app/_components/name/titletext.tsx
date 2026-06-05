"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";

gsap.registerPlugin(TextPlugin);

interface TitleTextProps {
  text: string;
  subTextFrom: string;
  subTextTo: string;
}

export default function TitleText({
  text,
  subTextFrom,
  subTextTo,
}: Readonly<TitleTextProps>) {
  const container = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const fullConfig = resolveConfig(tailwindConfig);
  const easeMode = "power2.Out";
  const duration = 1;
  const hero = fullConfig.theme.colors.hero;
  const reversedText = text.split("").reverse().join("");

  useEffect(() => {
    const containerElement = container.current;
    const contentElement = content.current;

    if (!containerElement || !contentElement) {
      return;
    }

    const updateScale = () => {
      const availableWidth = containerElement.clientWidth;
      const requiredWidth = contentElement.scrollWidth;

      if (!availableWidth || !requiredWidth) {
        return;
      }

      setScale(Math.min(1, availableWidth / requiredWidth));
    };

    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(containerElement);
    resizeObserver.observe(contentElement);

    return () => resizeObserver.disconnect();
  }, [text, subTextFrom, subTextTo]);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 2 });
      tl.from("#title", {
        duration: duration,
        ease: easeMode,
      })
        .to(
          "#title",
          {
            duration: duration,
            color: hero,
            ease: easeMode,
            text: { delimiter: "", value: text, rtl: true },
          },
          "<",
        )
        .to(
          "#scramble",
          {
            duration: 2,
            text: { delimiter: "", value: subTextTo },
            ease: easeMode,
          },
          "<",
        );
    },
    { scope: container },
  );

  return (
    <div ref={container} className="flex w-full justify-center overflow-hidden">
      <div
        ref={content}
        className="inline-flex origin-center flex-col items-center"
        style={{ transform: `scale(${scale})` }}
      >
        <h1
          id="title"
          className="whitespace-nowrap text-6xl text-light-light dark:text-light"
        >
          {reversedText}
        </h1>
        <div className="flex flex-row whitespace-nowrap">
          <p>(</p>
          <div id="scramble">{subTextFrom}</div>
          <p>)</p>
        </div>
      </div>
    </div>
  );
}
