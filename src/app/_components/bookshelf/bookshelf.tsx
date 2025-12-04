"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BsItemHover from "./bsitemhover";
import { bsData } from "./bsdata";
import { useMemo, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { EasePack } from "gsap/EasePack";
import { useRouter } from "next/navigation";
import TransitionLink from "../utils/transitionLink";

export default function Bookshelf() {
  /* eslint-disable */
  gsap.registerPlugin(ScrollTrigger, EasePack, CustomEase);
  /* eslint-enable */

  const router = useRouter();
  const scrollTopRef = useRef<HTMLDivElement>(null);
  const scrollBotRef = useRef<HTMLDivElement>(null);
  const scrollTopRef2 = useRef<HTMLDivElement>(null);
  const scrollBotRef2 = useRef<HTMLDivElement>(null);

  // Memoize filtered data to avoid recalculating on every render
  const evenItems = useMemo(() => bsData.filter((_, i) => i % 2 === 0), []);
  const oddItems = useMemo(() => bsData.filter((_, i) => i % 2 !== 0), []);

  const { contextSafe } = useGSAP(() => {
    /* eslint-disable */
    CustomEase.create(
      "speedEase",
      "M0,0 C0,0 0.05,0.49 0.597,0.784 0.832,0.91 1,1 1,1 ",
    );
    /* eslint-enable */
    const targetsTop = [scrollTopRef.current, scrollTopRef2.current];
    const targetsBot = [scrollBotRef.current, scrollBotRef2.current];

    const tl2 = gsap.timeline({
      repeat: -1,
      onRepeat: () => {
        // Directly manipulate the DOM to move the first child to the end
        if (scrollTopRef.current) {
          const firstChild = scrollTopRef.current.firstElementChild;
          if (firstChild) {
            scrollTopRef.current.appendChild(firstChild); // Move the first child to the end
          }
        }
        if (scrollBotRef.current) {
          const lastChild = scrollBotRef.current.lastElementChild;
          if (lastChild) {
            scrollBotRef.current.insertBefore(
              // Move the last child to the beginning
              lastChild,
              scrollBotRef.current.firstElementChild,
            );
          }
        }
        if (scrollTopRef2.current) {
          const firstChild = scrollTopRef2.current.firstElementChild;
          if (firstChild) {
            scrollTopRef2.current.appendChild(firstChild); // Move the first child to the end
          }
        }
        if (scrollBotRef2.current) {
          const lastChild = scrollBotRef2.current.lastElementChild;
          if (lastChild) {
            scrollBotRef2.current.insertBefore(
              // Move the last child to the beginning
              lastChild,
              scrollBotRef2.current.firstElementChild,
            );
          }
        }
      },
    });
    // carousel animation
    tl2
      .to(targetsTop, {
        duration: 3,
        x: -412,
        ease: "linear",
      })
      .to(
        targetsBot,
        {
          duration: 3,
          x: 412,
          ease: "linear",
        },
        "<",
      );
  });

  const renderItems = (items: typeof bsData) =>
    items.map((item, index) => (
      <div key={`${item.num}-${index}`}>
        <BsItemHover
          num={item.num}
          title={item.title}
          description={item.description}
        />
      </div>
    ));

  return (
    <TransitionLink href="/projects">
      <div
        id="bookshelf"
        className="h-sc container flex h-128 cursor-pointer flex-col overflow-clip rounded-xl bg-light-dark dark:bg-dark"
      >
        <div className="container flex flex-row justify-center">
          <p className="p-5 text-5xl">BOOKSHELF</p>
        </div>
        <div className="container flex h-full -rotate-6 flex-col justify-center gap-3">
          <div
            ref={scrollTopRef}
            className="container flex flex-row justify-center gap-3 overflow-visible will-change-transform"
          >
            {renderItems(evenItems)}
          </div>
          <div
            ref={scrollBotRef}
            className="container flex flex-row justify-center gap-3 overflow-visible will-change-transform"
          >
            {renderItems(oddItems)}
          </div>
          <div
            ref={scrollTopRef2}
            className="container flex flex-row justify-center gap-3 overflow-visible will-change-transform"
          >
            {renderItems(oddItems)}
          </div>
          <div
            ref={scrollBotRef2}
            className="container flex flex-row justify-center gap-3 overflow-visible will-change-transform"
          >
            {renderItems(evenItems)}
          </div>
        </div>
      </div>
    </TransitionLink>
  );
}
