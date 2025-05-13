"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { bsData } from "../_components/bookshelf/bsdata";
import BsItemHover from "../_components/bookshelf/bsitemhover";

export default function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#projects > *", {
      duration: 1,

      x: -100,
      ease: "power2.out",
      opacity: 0,
      stagger: 0.1,
    });
  });

  return (
    <main className="-z-20 flex min-h-screen select-none flex-col items-center justify-center overflow-hidden text-light">
      <div className="container flex w-full flex-col gap-3" id="projects">
        <div className="h-[30svh]" />
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl">
          Here are some of the projects I have worked on. Click on the tabs to
          see more details.
        </p>
        <div className="container flex flex-wrap items-stretch justify-center gap-3">
          {bsData.map((item, index) => {
            return (
              <BsItemHover
                key={index}
                num={item.num}
                title={item.title}
                description={item.description}
                fixedWidth={false}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
