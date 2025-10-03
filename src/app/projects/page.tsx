"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { projectsData } from "../_components/bookshelf/bsdata";
import BsDetailView from "../_components/bookshelf/bsdetailview";
import ContactButton from "../_components/contactButton";

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

  // Split: first half in first column, last half in second
  const mid = Math.ceil(projectsData.length / 2);
  const colA = projectsData.slice(0, mid);
  const colB = projectsData.slice(mid);

  return (
    <main className="-z-20 flex min-h-screen select-none flex-col items-center justify-center overflow-hidden text-light-light dark:text-light">
      <div
        className="mainContainer container flex w-full flex-col gap-6"
        id="projects"
      >
        <div className="h-[30svh]" />
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl">
          Here are some of the projects I have worked on. Click on the tabs to
          see more details.
        </p>
        <div className="flex w-full justify-center">
          <div className="flex flex-col items-center gap-3 md:w-[calc(64rem+12px)] md:flex-row md:items-start md:justify-center">
            <div className="flex w-full flex-col gap-3 md:w-128">
              {colA.map((item, idx) => {
                const key = idx; // first half
                return (
                  <BsDetailView
                    key={key}
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
            <div className="flex w-full flex-col gap-3 md:w-128">
              {colB.map((item, idx) => {
                const key = mid + idx; // offset for uniqueness
                return (
                  <BsDetailView
                    key={key}
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
          </div>
        </div>

        <div className="container flex h-[30svh] items-center justify-center">
          <ContactButton />
        </div>
      </div>
    </main>
  );
}
