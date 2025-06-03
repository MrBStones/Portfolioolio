"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "tailwind.config";

gsap.registerPlugin(TextPlugin);

interface TitleTextProps {
  text: string;
  subText: string;
}

export default function TitleText({ text, subText }: Readonly<TitleTextProps>) {
  const container = useRef<HTMLDivElement>(null);
  const fullConfig = resolveConfig(tailwindConfig);
  const easeMode = "power2.Out";
  const duration = 1;
  const hero = fullConfig.theme.colors.hero;
  const reversedText = text.split("").reverse().join("");

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
            text: { delimiter: "", value: subText },
            ease: easeMode,
          },
          "<",
        );
    },
    { scope: container },
  );

  return (
    <div ref={container} className="w-[32rem]">
      <h1 id="title" className="text-light-light text-6xl dark:text-light">
        {reversedText}
      </h1>
      <div className="flex flex-row">
        <div id="scramble">(Scrunches</div>
        <p>)</p>
      </div>
    </div>
  );
}
