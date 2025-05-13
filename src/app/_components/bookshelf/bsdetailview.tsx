"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { bsItemProps } from "./bsdata";
import BsItem from "./bsitem";
import { Flip } from "gsap/Flip";
import { useState } from "react";
import BsItemHover from "./bsitemhover";

gsap.registerPlugin(Flip);

interface bsDetailViewProps {
  description: string;
  linkOne?: string;
  linkTwo?: string;
  linkOneText: string;
  linkTwoText: string;
  image: string;
  imageAlt?: string;
  bsItem: bsItemProps;
  icon: string;
  iconAlt?: string;
  technologies?: string[];
}

export default function BsDetailView({
  description,
  linkOne,
  linkTwo,
  linkOneText,
  linkTwoText,
  image,
  imageAlt = "",
  bsItem,
  icon,
  iconAlt = "",
  technologies = [],
}: Readonly<bsDetailViewProps>) {
  const { contextSafe } = useGSAP({});
  const [toggled, setToggled] = useState(false);

  const onImageClicked = contextSafe(() => {
    const state = Flip.getState("#imageContainer, #linkContainer a");
    console.log(state);

    setToggled((prev) => !prev);

    requestAnimationFrame(() => {
      Flip.from(state, {
        duration: 0.4,
        ease: "power3.out",
      });
    });
  });

  return (
    <>
      <div className="container flex max-w-128 flex-col gap-3 rounded-3xl bg-dark/50 p-3 backdrop-blur-xl backdrop-filter">
        <div className="container flex w-full flex-row gap-3">
          <img src={icon} alt={iconAlt} className="w-10 text-light" />
          <p className="text-right">{description}</p>
        </div>
        <BsItemHover
          num={bsItem.num}
          title={bsItem.title}
          description={bsItem.description}
          fixedWidth={false}
        />
        <div
          className={`container flex ${toggled ? "flex-col" : "flex-row"} gap-3`}
        >
          <div
            id="linkContainer"
            className={`container flex ${toggled ? "flex-row-reverse" : "flex-col"} gap-3`}
          >
            <a href={linkOne}>
              <div className="h-bs-item-h w-full rounded-xl bg-hero p-3 text-right text-3xl text-dark transition-colors duration-100 hover:bg-light">
                {linkOneText}
              </div>
            </a>
            <a href={linkTwo}>
              <div className="h-bs-item-h w-full rounded-xl bg-dark-hero p-3 text-right text-3xl text-dark transition-colors duration-100 hover:bg-light">
                {linkTwoText}
              </div>
            </a>
          </div>
          <div className="w-full hover:cursor-pointer" onClick={onImageClicked}>
            <img
              id="imageContainer"
              src={image}
              alt={imageAlt}
              className={`${toggled ? "h-full" : "h-bv-image-h"} w-full rounded-xl object-cover`}
            />
          </div>
        </div>
        <div className="container flex h-bs-item-h flex-row items-center justify-end gap-3 hover:cursor-pointer">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-xl bg-dark-hero px-4 py-2 text-right text-dark transition-colors duration-100 hover:bg-light"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
