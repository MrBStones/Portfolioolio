"use client";

import { bsItemProps } from "./bsdata";
import BsItem from "./bsitem";

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
  return (
    <>
      <div className="container flex w-128 flex-col gap-3 rounded-3xl bg-dark/50 p-3 backdrop-blur-xl backdrop-filter">
        <div className="container flex w-full flex-row gap-3">
          <img src={icon} alt={iconAlt} className="w-10 text-light" />
          <p className="text-right">{description}</p>
        </div>
        <BsItem
          num={bsItem.num}
          title={bsItem.title}
          description={bsItem.description}
        />
        <div className="container flex flex-row gap-3">
          <div className="container flex flex-col gap-3">
            <a href={linkOne}>
              <div className="h-bs-item-h rounded-xl bg-hero p-3 text-right text-3xl text-dark">
                {linkOneText}
              </div>
            </a>
            <a href={linkTwo}>
              <div className="h-bs-item-h rounded-xl bg-dark-hero p-3 text-right text-3xl text-dark">
                {linkTwoText}
              </div>
            </a>
          </div>
          <div className="h-full w-full">
            <img
              src={image}
              alt={imageAlt}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="container flex h-bs-item-h flex-row items-center justify-end gap-3">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="rounded-xl bg-dark-hero px-4 py-2 text-right text-dark"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
