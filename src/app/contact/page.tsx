"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { bsData, projectsData } from "../_components/bookshelf/bsdata";
import BsItemHover from "../_components/bookshelf/bsitemhover";
import BsDetailView from "../_components/bookshelf/bsdetailview";

export default function Projects() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("#contact > *", {
      duration: 1,
      filter: "blur(5px)",
      x: -100,
      ease: "power2.out",
      opacity: 0,
      stagger: 0.1,
    });
  });

  return (
    <main className="-z-20 flex min-h-screen select-none flex-col items-center justify-center overflow-hidden text-light-light dark:text-light">
      <div
        className="mainContainer container flex w-full flex-col gap-3"
        id="contact"
      >
        <div className="h-[30svh]" />
        <h1 className="text-4xl font-bold">Contact</h1>
        <p className="text-xl">
          PLEEEAAASE CONTACT ME PLEASE PLEASE PLEASE CONTACT ME PLEASE!
        </p>
        <p className="text-xl">
          You can reach me at:{" "}
          <a
            href="mailto: bjornmogelhoj@gmail.com"
            className="text-light-dark-hero dark:text-hero"
          >
            bjornmogelhoj@gmail.com
          </a>
        </p>
        <p className="text-xl">Or you can find me in the silly asylum :)</p>

        <div className="w-fit overflow-hidden rounded-lg shadow-md shadow-light-light dark:shadow-light">
          <Image src="/sillyness.jpg" alt="Silly" width={735} height={581} />
        </div>

        <div className="h-[30svh]" />
      </div>
    </main>
  );
}
