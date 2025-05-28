"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { bsData, projectsData } from "../_components/bookshelf/bsdata";
import BsItemHover from "../_components/bookshelf/bsitemhover";
import BsDetailView from "../_components/bookshelf/bsdetailview";

export default function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#projects > *", {
      duration: 1,
      filter: "blur(5px)",
      x: -100,
      ease: "power2.out",
      opacity: 0,
      stagger: 0.1,
    });
  });

  return (
    <main className="-z-20 flex min-h-screen select-none flex-col items-center justify-center overflow-hidden text-light">
      <div
        className="mainContainer container flex w-full flex-col gap-3"
        id="projects"
      >
        <div className="h-[30svh]" />
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl">
          Here are some of the projects I have worked on. Click on the tabs to
          see more details.
        </p>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          {projectsData.map((item, index) => {
            return (
              <BsDetailView
                key={index}
                description={item.description}
                linkOneText={item.linkOneText}
                linkOne={item.linkOne}
                linkTwoText={item.linkTwoText}
                linkTwo={item.linkTwo}
                image={item.image}
                imageAlt={item.imageAlt}
                icon={item.icon}
                iconAlt={item.iconAlt}
                bsItem={item.bsItem}
                technologies={item.technologies}
              />
            );
          })}
        </div>
        <div className="h-[30svh]" />
      </div>
    </main>
  );
}
