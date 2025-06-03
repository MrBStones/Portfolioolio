"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import BsItemHover from "./bsitemhover";
import { bsData } from "./bsdata";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { EasePack } from "gsap/EasePack";
import { useRouter } from "next/navigation";

export default function Bookshelf() {
  /* eslint-disable */
  gsap.registerPlugin(ScrollTrigger, EasePack, CustomEase);
  /* eslint-enable */

  const router = useRouter();
  const scrollTopRef = useRef<HTMLDivElement>(null);
  const scrollBotRef = useRef<HTMLDivElement>(null);
  const scrollTopRef2 = useRef<HTMLDivElement>(null);
  const scrollBotRef2 = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(() => {
    /* eslint-disable */
    CustomEase.create(
      "speedEase",
      "M0,0 C0,0 0.05,0.49 0.597,0.784 0.832,0.91 1,1 1,1 ",
    );
    /* eslint-enable */
    const targetsTop = gsap.utils.toArray("#scrollTop");
    const targetsBot = gsap.utils.toArray("#scrollBot");

    const tl1 = gsap.timeline({ paused: true, scrollTrigger: "#scrollTop" });
    // start animation
    tl1
      .from("#scrollTop", {
        duration: 3,
        opacity: 0,
        x: 824,
        ease: "speedEase",
      })
      .from(
        "#scrollBot",
        {
          duration: 3,
          opacity: 0,
          x: -824,
          ease: "speedEase",
        },
        "<",
      )
      .call(() => {
        // start the carousel animation when the page loads
        tl2.play();
      });

    const tl2 = gsap.timeline({
      paused: true,
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

  const onClick = contextSafe(() => {
    const tl = gsap.timeline();
    tl.to("#bookshelf div *", {
      duration: 0.5,
      scale: 1,
      y: 60,
      ease: "power1.Out",
      alpha: 0,
      stagger: {
        amount: 1,
        from: "start",
      },
    })
      .to(
        "#home > *",
        {
          delay: 0.5,
          duration: 1,
          x: 100,
          ease: "power1.In",
          filter: "blur(5px)",
          alpha: 0,
          stagger: 0.1,
        },
        "<",
      )

      .call(() => {
        // Navigate to the projects page
        router.push("/projects");
      });
  });

  return (
    <div
      id="bookshelf"
      className={
        "h-sc bg-light-dark/50 container flex h-128 cursor-pointer flex-col overflow-clip rounded-xl backdrop-blur-sm dark:bg-dark/50"
      }
      onClick={onClick}
    >
      <div className="container flex flex-row justify-center">
        <p className={"p-5 text-5xl"}>BOOKSHELF</p>
      </div>
      <div className="container flex h-full -rotate-6 flex-col justify-center gap-3">
        <div
          ref={scrollTopRef}
          id="scrollTop"
          className="container flex flex-row justify-center gap-3 overflow-visible"
        >
          {bsData.map((item, index) => {
            const isEven = index % 2 === 0;
            if (isEven)
              return (
                <div key={index}>
                  <BsItemHover
                    num={item.num}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              );
          })}
        </div>
        <div
          ref={scrollBotRef}
          id="scrollBot"
          className="container flex flex-row justify-center gap-3 overflow-visible"
        >
          {bsData.map((item, index) => {
            const isOdd = index % 2 !== 0;
            if (isOdd)
              return (
                <div key={index}>
                  <BsItemHover
                    num={item.num}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              );
          })}
        </div>
        <div
          ref={scrollTopRef2}
          id="scrollTop"
          className="container flex flex-row justify-center gap-3 overflow-visible"
        >
          {bsData.map((item, index) => {
            const isOdd = index % 2 !== 0;
            if (isOdd)
              return (
                <div key={index}>
                  <BsItemHover
                    num={item.num}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              );
          })}
        </div>
        <div
          ref={scrollBotRef2}
          id="scrollBot"
          className="container flex flex-row justify-center gap-3 overflow-visible"
        >
          {bsData.map((item, index) => {
            const isEven = index % 2 === 0;
            if (isEven)
              return (
                <div key={index}>
                  <BsItemHover
                    num={item.num}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}
